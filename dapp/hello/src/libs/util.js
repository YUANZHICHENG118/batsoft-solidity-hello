import cookies from './util.cookies';
import log from './util.log';
import encrypt from './util.encrypt';
import Setting from '../setting';

const util = {
    cookies,
    log,
    encrypt
};

function tTitle (title = '') {
    if (window && window.$t) {
        if (title.indexOf('$t:') === 0) {
            return window.$t(title.split('$t:')[1]);
        } else {
            return title;
        }
    } else {
        return title;
    }
}

/**
 * @description 更改标题
 * @param {Object} title 标题
 * @param {Object} count 未读消息数提示（可视情况选择使用或不使用）
 */
util.title = function ({ title, count }) {
    title = tTitle(title);
    let fullTitle = title ? `${title} - ${Setting.titleSuffix}` : Setting.titleSuffix;

    if (count) fullTitle = `(${count}条消息)${fullTitle}`;
    window.document.title = fullTitle;
};

function requestAnimation (task) {
    if ('requestAnimationFrame' in window) {
        return window.requestAnimationFrame(task);
    }

    setTimeout(task, 16);
}

// 参数val为内容，num为需要保留的位数 bl为true则去除无效零
function toIntercept (val, num, bl) {
    if (val === undefined) return 0 //
    var _num = Number(val).toFixed(num + 1);
    if (bl) {
        return parseFloat(Number(_num.substr(0, _num.length - 1)))
    } else {
        return String(_num).substr(0, String(_num).length - 1)
    }
};

/**
 * @param {Object} time 倒计时
 * @param {Object} setup 倒计时回调函数
 * @param {Object} end 结束回调函数
 */
function timer (time, setup, end) {
    var i = time;
    let timer = setInterval(() => {
        setup(i)
        i = i - 1;
        if (i === 0) {
            clearInterval(timer);
            if (end) end();
        }
    }, 1000)
    return timer
}

function scienceToNums (val) {
    const e = String(val)
    let rex = /^([0-9])\.?([0-9]*)e-([0-9])/
    if (!rex.test(e)) return val
    const numArr = e.match(rex)
    const n = Number('' + numArr[1] + (numArr[2] || ''))
    const num = '0.' + String(Math.pow(10, Number(numArr[3]) - 1)).substr(1) + n
    return num.replace(/0*$/, '')
}

export { requestAnimation, toIntercept, timer, scienceToNums };

export default util;
