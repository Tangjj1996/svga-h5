import appJsBridge from './appJsBridge';
import env from './env'

const base = {};
const ua = window.navigator.userAgent.toLowerCase();

// base 方法
base.isWindows = () => !!window.qing_user_info;
base.isMac = () => {
  const re = /studentOnlineMac/gi;
  return re.test(ua);
};

// 是否是新cef版本 -- Chrome/63.0.3239.132 Safari/537.36
base.isSupportNewCef = () => {
  return !!(base.isWindows() && /Chrome\/63\.0/gi.test(ua));
};

base.callWindowsFunc = (name, data, cb) => {
  // console.info('base-callWindowsFunc', name, data, cb)
  if (base.isWindows()) {
    const callbackName = base.registerWindowsFunc(name, cb);
    data = data || {};
    if (typeof window.top.qing_user_info[name] === 'function') {
      window.top.qing_user_info[name](callbackName, JSON.stringify(data));
    }
  } else if (base.isMacStudent() || base.isAndroidPadStudent()) {
    if (data) {
      let obj = Object.assign(data, cb);
      base.sendCustomNotification(obj, name, window.parent);
    } else {
      return data && data.url && window.open(data.url, '_blank');
    }
  }
};

base.registerWindowsFunc = (name, cb, isUid = true) => {
  if (!base.isWindows()) {
    return;
  }
  if (window.top !== window.self && !isUid) {
    return;
  }
  const callbackName = isUid
    ? `qingqing_${name}_windows_callback_${~~(Math.random() * 10000000)}`
    : name;
  window.top.qing_user_info[callbackName] = function (resp) {
    if (typeof cb === 'function') {
      cb(resp);
    }
  };
  return callbackName;
};

// 打开windows蒙板
base.maskMainPage = (val) => {
  if (base.isWindows() && window.qing_user_info['maskMainPage']) {
    window.qing_user_info['maskMainPage'](val);
  }
};

Object.assign(base, appJsBridge);
Object.assign(base, env)

export default base;
