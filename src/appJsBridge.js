//ios8及之前使用UIwebview（同步获取信息）,之后ios的webview升级后使用WKwebview（异步获取信息），导致无法支持之前的同步获取信息,交互通过easyJS发生
//andriod在webview中直接注入QQJSExtenal

/**
 * 历史变更
 * QQJSExternal.qqJSCallBackGetContent---同步获取信息
 * QQJSExternal.qqJSAsyncGetContentcallBack---异步获取信息
 * QQJSExternal.qqJSCallBackWithContentwithMethodName---业务场景交互
 * qqJSCallBackGetContent和qqJSAsyncGetContentcallBack会同时存在，但是前者同步获取信息（ios8及以前），后者异步获取信息
 * 除"tk"、"si"、"ver"、"deviceinfo"、"userinfo"、"locationinfo"、"networkstatus"以外的使用qqJSCallBackWithContentwithMethodName
 * 进行交互。
 */

/**
 * 接口定义 _qingqing_Notification_callback
 *
 * "tk"、"si"、"ver"、"deviceinfo"、"userinfo"、"locationinfo"、"networkstatus"
 * //单纯获取app数据方式如下
 * appJSBridge.getData('tk').then(result => {
 *
 * })
 * -------------------------------------------------------------------------------
 * 其他具体业务交互--第一个参数为通讯事件名称--第二个参数为传入的数据以及对应状态的回调函数-第三个参数为执行完是否移除
 * appJSBridge.communicate({
 *   data: data,
 *   success: () => {},
 *   fail: () => {},
 *   cancel: () => {}
 * }, 'liveclass:mobile:requestMonitor', removeAfterExecute)
 */

import env from './env.js';

const INVALID_ENV = 'INVILID_ENV';
const TIMEOUT = 'TIMEOUT';
const CB_NAME = '_qingqing_Notification_callback'; //回调函数名
const BACKUP_CB_NAME = '_qingqing_BackupNotification_callback'; //原来的回调函数名
const timeout = 5000; //超时时间
const isAppENV = env.isApp(); //是否在app内
const __callbacks = {}; //存储回调函数
let count = 0; //记数器
let isQQJSExternalReady = false; //QQJSExtenal是否ready

function isTypeOf(param, type) {
  return Object.prototype.toString.call(param) === '[object ' + type + ']';
}

window[CB_NAME] = function (jsonString) {
  var param = JSON.parse(jsonString);

  try {
    // 兼容ipad处理的部分数据格式问题.
    // [{"name":"homework:kejian:studentGetAnswerHistory","status":"success","param":{"result":true,"studentId":"618270888","paperId":"ED2675CEAB564D2F8F091D1C12E1A8A6","question_state":[1,1],"studentAnswer":["\\frac{2\\pi}{3}","2.47"],"queId":"ff8080814cd60e83014cd7d1498304b9"}}]
    if (
      jsonString &&
      isTypeOf(param, 'String') &&
      (/\\/g.test(jsonString) ||
        /\n/g.test(jsonString) ||
        /\r/g.test(jsonString))
    ) {
      param = JSON.parse(
        jsonString
          .replace(/\\/g, '\\\\')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\r')
      );
    }

    if (jsonString && isTypeOf(param, 'String')) {
      var decodeJSONString = decodeURIComponent(jsonString);

      param = JSON.parse(decodeJSONString);

      if (
        decodeJSONString &&
        isTypeOf(param, 'String') &&
        (/\\/g.test(decodeJSONString) ||
          /\n/g.test(decodeJSONString) ||
          /\r/g.test(decodeJSONString))
      ) {
        param = JSON.parse(
          decodeJSONString
            .replace(/\\/g, '\\\\')
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
        );
      }
    }
  } catch (err) {
    console.error(err);
  }

  if (Array.isArray(param)) {
    param = param[0];
  }
  const callbackName = param.callbackName;
  const status = param.status;
  const methodName = param.name;
  const response = parseData(param.param);

  let cbfn;
  //如果返回了callbackName则走新版处理（根据callbackName去执行）
  if (callbackName) {
    if (__callbacks[callbackName]) {
      cbfn = __callbacks[callbackName][status];
      if (cbfn) {
        cbfn(response);
      }
      if (__callbacks[callbackName].removeAfterExecute) {
        __callbacks[callbackName] = null;
      }
    }
  } else {
    if (__callbacks[methodName]) {
      cbfn = __callbacks[methodName][status];
      if (cbfn) {
        cbfn(response);
      }
      if (__callbacks[methodName].removeAfterExecute) {
        __callbacks[methodName] = null;
      }
    } else {
      // 7.7.5 中发现 transferAppEasyJS 与 appJSBridge 混合使用，可能导致没有回调的问题
      window[BACKUP_CB_NAME] && window[BACKUP_CB_NAME](jsonString);
    }
  }
};

/**
 *
 * @param {String} str 解析app返回的数据
 */
function parseData(str) {
  if (typeof str === 'string') {
    return JSON.parse(decodeURIComponent(str));
  }
  return str;
}

//ios-js ready callback
document.addEventListener('EasyJSReady', () => {
  console.log('ready-ios');
});

export function QQJSExternalReady() {
  return new Promise((resolve, reject) => {
    if (isAppENV) {
      if (isQQJSExternalReady) {
        resolve();
        return;
      }
      const startTime = Date.now();
      const sid = setInterval(() => {
        if (
          window.QQJSExternal &&
          QQJSExternal.qqJSCallBackGetContent &&
          QQJSExternal.qqJSAsyncGetContentcallBack &&
          QQJSExternal.qqJSCallBackWithContentwithMethodName
        ) {
          resolve();
          isQQJSExternalReady = true;
          clearInterval(sid);
        } else {
          const currentTime = Date.now();
          if (currentTime - startTime > timeout) {
            reject(TIMEOUT);
            clearInterval(sid);
          }
        }
      }, 100);
    } else {
      // reject(INVALID_ENV)
    }
  });
}

QQJSExternalReady()
  .then(() => {
    QQJSExternal.qqJSCallBackWithContentwithMethodName(
      JSON.stringify({ methodName: CB_NAME }),
      'notify'
    );
  })
  .catch((err) => {
    console.log('QQJSExternalReady executed failed: ', err);
  });

const appJSBridge = {
  getData: (arg) => {
    return new Promise((resolve, reject) => {
      const timestamp = Date.now();
      window[`__cb${arg}_${timestamp}`] = (data) => {
        resolve(parseData(data));
      };
      const isValidParam = [
        'tk',
        'si',
        'ver',
        'deviceinfo',
        'userinfo',
        'locationinfo',
        'networkstatus',
      ].some((item) => arg === item);
      if (!isValidParam) {
        alert('appJSBridge.getData方法入参非法');
        return;
      }
      if (window.appData && window.appData[arg]) {
        resolve(window.appData[arg]);
        return;
      }
      QQJSExternalReady()
        .then(() => {
          const data = QQJSExternal.qqJSCallBackGetContent(arg);
          if (data) {
            resolve(parseData(data));
          } else {
            QQJSExternal.qqJSAsyncGetContentcallBack(
              arg,
              `__cb${arg}_${timestamp}`
            );
          }
        })
        .catch((data) => {
          if (data === TIMEOUT) {
            alert('QQJSExternalReady超时！');
          }
          if (data === INVALID_ENV) {
            console.log('不在app中');
          }
        });
    });
  },
  communicate: (info, methodName, removeAfterExecute = false) => {
    return new Promise((resolve, reject) => {
      QQJSExternalReady().then(() => {
        if (typeof info !== 'object' || typeof methodName !== 'string') {
          alert('communicate入参不合法!');
        }
        info.callbackName = info.callbackName || `${methodName}_${count++}`;
        ['success', 'fail', 'cancel'].forEach((status) => {
          if (info[status] && typeof info[status] === 'function') {
            //new version
            __callbacks[info.callbackName] =
              __callbacks[info.callbackName] || {};
            __callbacks[info.callbackName][status] = info[status];
            __callbacks[
              info.callbackName
            ].removeAfterExecute = removeAfterExecute;
            //old version
            __callbacks[methodName] = __callbacks[methodName] || {};
            __callbacks[methodName][status] = info[status];
            __callbacks[methodName].removeAfterExecute = removeAfterExecute;
          }
        });
        QQJSExternal.qqJSCallBackWithContentwithMethodName(
          JSON.stringify(info),
          methodName
        );
      });
    });
  },
};

export default appJSBridge;
