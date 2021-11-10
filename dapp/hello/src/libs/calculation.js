const countDecimals = function (num) {
    let len = 0;
    try {
        num = Number(num);
        var str = num.toString().toUpperCase();
        if (str.split('E').length === 2) { // scientific notation
            var isDecimal = false;
            if (str.split('.').length === 2) {
                str = str.split('.')[1];
                if (parseInt(str.split('E')[0]) !== 0) {
                    isDecimal = true;
                }
            }
            let x = str.split('E');
            if (isDecimal) {
                len = x[0].length;
            }
            len -= parseInt(x[1]);
        } else if (str.split('.').length === 2) { // decimal
            if (parseInt(str.split('.')[1]) !== 0) {
                len = str.split('.')[1].length;
            }
        }
    } catch (e) {
        throw e;
    } finally {
        if (isNaN(len) || len < 0) {
            len = 0;
        }
        // eslint-disable-next-line no-unsafe-finally
        return len;
    }
};

var convertToInt = function (num) {
    num = Number(num);
    var newNum = num;
    var times = countDecimals(num);
    // eslint-disable-next-line camelcase
    var temp_num = num.toString().toUpperCase();
    if (temp_num.split('E').length === 2) {
        newNum = Math.round(num * Math.pow(10, times));
    } else {
        newNum = Number(temp_num.replace('.', ''));
    }
    return newNum;
};

const getCorrectResult = function (type, num1, num2, result) {
    // eslint-disable-next-line camelcase
    let temp_result = 0;
    switch (type) {
    case 'add':
        // eslint-disable-next-line camelcase
        temp_result = num1 + num2;
        break;
    case 'sub':
        // eslint-disable-next-line camelcase
        temp_result = num1 - num2;
        break;
    case 'div':
        // eslint-disable-next-line camelcase
        temp_result = num1 / num2;
        break;
    case 'mul':
        // eslint-disable-next-line camelcase
        temp_result = num1 * num2;
        break;
    }
    // eslint-disable-next-line camelcase
    if (Math.abs(result - temp_result) > 1) {
        // eslint-disable-next-line camelcase
        return temp_result;
    }
    return result;
};
export default {
    // 加法
    accAdd (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        var dec1, dec2, times;
        try { dec1 = countDecimals(num1) + 1; } catch (e) { dec1 = 0; }
        try { dec2 = countDecimals(num2) + 1; } catch (e) { dec2 = 0; }
        times = Math.pow(10, Math.max(dec1, dec2));
        // var result = (num1 * times + num2 * times) / times;
        var result = (this.accMul(num1, times) + this.accMul(num2, times)) / times;
        return getCorrectResult('add', num1, num2, result);
    // return result;
    },
    // 减法
    accSub (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        let dec1, dec2, times;
        try { dec1 = countDecimals(num1) + 1; } catch (e) { dec1 = 0; }
        try { dec2 = countDecimals(num2) + 1; } catch (e) { dec2 = 0; }
        times = Math.pow(10, Math.max(dec1, dec2));
        // var result = Number(((num1 * times - num2 * times) / times);
        const result = Number((this.accMul(num1, times) - this.accMul(num2, times)) / times);
        return getCorrectResult('sub', num1, num2, result);
    },
    /**
     * 除法
     * @param num1
     * @param num2
     * @returns {number}
     */
    accDiv (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        // eslint-disable-next-line one-var
        var t1 = 0,
            t2 = 0,
            dec1, dec2;
        try { t1 = countDecimals(num1); } catch (e) {}
        try { t2 = countDecimals(num2); } catch (e) {}
        dec1 = convertToInt(num1);
        dec2 = convertToInt(num2);
        const result = this.accMul((dec1 / dec2), Math.pow(10, t2 - t1));
        return getCorrectResult('div', num1, num2, result);
    },
    // 乘法
    accMul (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        // eslint-disable-next-line one-var
        var times = 0,
            s1 = num1.toString(),
            s2 = num2.toString();
        try { times += countDecimals(s1); } catch (e) {}
        try { times += countDecimals(s2); } catch (e) {}
        var result = convertToInt(s1) * convertToInt(s2) / Math.pow(10, times);
        return getCorrectResult('mul', num1, num2, result);
    // return result;
    },
    upFixed (num, fix) {
        // num为原数字，fix是保留的小数位数
        let result
        if (Number(num) && fix > 0) { // 简单的做个判断
            fix = +fix || 2
            num = num + ''
            if (/e/.test(num)) { // 如果是包含e字符的数字直接返回
                result = num
            } else if (!/\./.test(num)) { // 如果没有小数点
                result = num + `.${Array(fix + 1).join('0')}`
            } else { // 如果有小数点
                num = num + `${Array(fix + 1).join('0')}`
                let reg = new RegExp(`-?\\d*\\.\\d{0,${fix}}`)
                let floorStr = reg.exec(num)[0]
                if (+floorStr >= +num) {
                    result = floorStr
                } else {
                    let floorNumber = +floorStr + +`0.${Array(fix).join('0')}1`
                    let point = /\./.test(floorNumber + '') ? '' : '.'
                    let floorStr2 = floorNumber + point + `${Array(fix + 1).join('0')}`
                    result = reg.exec(floorStr2)[0]
                }
            }
            return result
        } else {
            return Math.ceil(Number(num));
        }
    },
    downFixed (num, fix) {
        // num为原数字，fix是保留的小数位数
        let result
        if (Number(num) && fix > 0) { // 简单的做个判断
            fix = +fix || 2
            num = num + ''
            if (/e/.test(num)) { // 如果是包含e字符的数字直接返回
                result = num
            } else if (!/\./.test(num)) { // 如果没有小数点
                result = num + `.${Array(fix + 1).join('0')}`
            } else { // 如果有小数点
                num = num + `${Array(fix + 1).join('0')}`
                let reg = new RegExp(`-?\\d*.\\d{0,${fix}}`)
                result = reg.exec(num)[0]
            }
            return result
        } else {
            return Math.floor(Number(num));
        }
    }
}
