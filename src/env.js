// https://wiki.changingedu.com/pages/viewpage.action?pageId=13763349
// const appname = ['student', 'teacher', 'assistant', 'partner', 'livestudent', 'liveparent', 'studentOnlineIpad', 'qingStudentOnline', 'qingTeacherOnline', 'studentOnlineMac']
// const appplatform = ['web', 'win', 'ios', 'app', 'pad', 'apad', 'AndroidPhone', 'ios_enterprise_liveapp', 'ios_liveapp', 'watchOS', 'tvOS', 'macOS']

// UA - https://wiki.changingedu.com/pages/viewpage.action?pageId=2632395
// student/iPhone/6.5.5 Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E302

// IOS appplatform
// ios_enterprise_liveapp | ios_liveapp | ios | watchOS | tvOS | macOS | pad

// IOS appname
// student | teacher | assistant | partner | livestudent | liveparent | unknown | studentOnlineIpad

// Android appplatform
// appplatform：
// 家长/老师/助教：AndroidPhone
// 在线家长/在线学生：AndroidPhone_liveapp
// pad：android_pad

// appname：
// 家长：student
// 老师：teacher
// 助教：assistant
// 在线家长：liveparent
// 在线学生：livestudent
// pad：studentOnlineIpad
const ua = navigator.userAgent.toLowerCase();
const queryObject = urlQuery();
// 'isElectron',
const names = [
  'appname',
  'appplatform',
  'appversion',
  'isApp',
  'isIpad',
  'isMacStudent',
  'isWinElectronStudent',
  'isAndroidPadStudent',
  'isWeixin',
  'isWinStudent',
  'isWinTeacher',
  'detectAppName',
  'detectAppVersion',
];

export function isMacStudent() {
  if (appplatform() === 'mac') {
    return true;
  }
  const re = /qqingonlinestudentmac/gi;
  return re.test(ua);
}

// export function isElectron() {
//   return !!(window.process && process.versions && !!process.versions.electron)
// }

//根据ua中轻轻特有的字段来判断是否在app中
export function isApp() {
  if (
    isMacStudent() ||
    isWinElectronStudent() ||
    isWinStudent() ||
    isWinTeacher()
  )
    return false;
  return (
    /(student|teacher|assistant|partner)/gi.test(ua) ||
    /studentOnlineIpad/gi.test(ua) ||
    (/(Macintosh)/gi.test(ua) && 'ontouchstart' in window)
  );
}

export function isAndroidPadStudent() {
  if (appplatform() === 'android_pad') {
    return true;
  }
  const re = /(android_pad)/gi;
  return re.test(ua);
}

export function isWinStudent() {
  if (appplatform() === 'win' && appname() === 'studentOnline') {
    return true;
  }
  const re = /qingStudentOnline\/Win/gi;
  return re.test(ua);
}

export function isWinElectronStudent() {
  if (appplatform() === 'win' && appname() === 'studentonlineelectron') {
    return true;
  }
  const re = /studentonlineelectron/gi;
  return re.test(ua);
}

export function isWinTeacher() {
  if (appplatform() === 'win' && appname() === 'teacherOnline') {
    return true;
  }
  const re = /qingTeacherOnline\/Win/gi;
  return re.test(ua);
}

export function isIpad() {
  const curAppPlatform = queryObject.appplatform;
  if (curAppPlatform && curAppPlatform === 'pad') {
    return true;
  }
  // 兼容ios 13的ua
  return (
    /studentOnlineIpad/gi.test(ua) ||
    (/(Macintosh)/gi.test(ua) && 'ontouchstart' in window)
  );
}

export function isWeixin() {
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  }
  return false;
}

export function detectAppVersion() {
  if (/Electron/i.test(ua)) {
    return window.shell ? window.shell.temp.version : '-';
  } else {
    return window._feature_version;
  }
}

export function detectAppName(ua) {
  ua = ua || window.navigator.userAgent;
  let matchstr = null;
  const appname = {
    'teacher/': 'app-teacher',
    'livestudent/': 'app-livestudent',
    'liveparent/': 'app-liveparent',
    'student/': 'app-student',
    'assistant/': 'app-assistant',
    'partner/': 'app-partner',
    'studentOnlineIpad/iPad': 'pad-student',
    'qingStudentOnline/Win': 'win-student',
    'qingTeacherOnline/Win': 'win-teacher',
    // User-Agent: studentOnline/android_pad/4.7.5_test(Dalvik/2.1.0 (Linux; U; Android 10; KRJ-W09 Build/HUAWEIKRJ-W09))
    'studentOnline/android_pad/': 'android_pad-studentOnline',
    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) qqingonlinestudentmac/0.0.4 Chrome/69.0.3497.128 Electron/4.2.12 Safari/537.36
    'studentOnlineMac/': 'mac-studentOnlineMac', // 兼容以前版本
    'qqingonlinestudentmac/': 'mac-studentOnlineMac',
    // Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) studentonlineelectron/0.0.1 Chrome/73.0.3683.121 Electron/5.0.8 Safari/537.36
    'studentonlineelectron/': 'electron-studentonlineelectron',
    default: 'web-h5',
  };

  // winclient.
  try {
    if (top.qing_user_info) {
      if (qing_user_info.type === 'student') {
        matchstr = appname['qingStudentOnline/Win'];
      } else {
        matchstr = appname['qingTeacherOnline/Win'];
      }
    }
  } catch (e) {
    if (window.qing_user_info) {
      if (qing_user_info.type === 'student') {
        matchstr = appname['qingStudentOnline/Win'];
      } else {
        matchstr = appname['qingTeacherOnline/Win'];
      }
    }
  }

  // 兼容ipad ios13
  if (isIpad()) {
    matchstr = appname['studentOnlineIpad/iPad'];
  }

  for (let key in appname) {
    if (new RegExp(key, 'i').test(ua)) {
      matchstr = appname[key];
      break;
    }
  }
  return matchstr || appname['default'];
}

function urlQuery(url = window.location.search || '') {
  const objURL = {};
  url.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function (
    $0,
    $1,
    $2,
    $3
  ) {
    objURL[$1] = $3;
  });
  return objURL;
}

export function appname() {
  const curAppName = queryObject.appname;
  if (curAppName) return curAppName;
  return detectAppName().split('-')[1];
}

export function appplatform() {
  const curAppPlatform = queryObject.appplatform;
  if (curAppPlatform) return curAppPlatform;
  return detectAppName().split('-')[0];
}

export function appversion() {
  const curAppVersion = queryObject.appversion;
  // 过滤apad 1.2.0_test
  if (curAppVersion) return curAppVersion.replace(/[^0-9.]/gi, '');
  return detectAppVersion() || '1.0.0';
}

try {
  if (!sessionStorage.getItem('env_check')) {
    const check_result = [];
    names.forEach((it) => {
      check_result.push(it + ' :: ' + eval(`${it}()`));
    });
    console.info(`启动环境检查:\n\r${check_result.join('\n\r')}`);
    sessionStorage.setItem('env_check', true);
  }
} catch (e) {}

export default {
  isApp,
  // isElectron,
  isMacStudent,
  isWinElectronStudent,
  isAndroidPadStudent,
  isWeixin,
  appname,
  appplatform,
  appversion,
  detectAppName,
  isWinStudent,
  isWinTeacher,
};
