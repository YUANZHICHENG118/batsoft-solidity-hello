const CryptoJS = require('crypto-js');
const encryptConst = {};
const key = CryptoJS.enc.Latin1.parse('batsoft@aliyun.c');
encryptConst.encrypt = function (word) {
    let encrypted = CryptoJS.AES.encrypt(word, key, {
        iv: key,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });
    return encrypted.toString();
}

export default encryptConst;
