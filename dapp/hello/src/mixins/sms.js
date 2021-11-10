import {
    mapState
} from 'vuex'
import {
    sendSms,
    sendSecSms,
    sendCodeSms,
    sendEmail,
    sendSecEmail,
    sendCodeEmail,
    sendSecondVerifyCodeSms,
    sendSecondVerifyCodeEmail
} from '@/api/sms'
/**
 * 短信邮件混合
 * */
export default {
    computed: {
        ...mapState('sec', ['registerParams'])
    },
    data () {
        return {
            time: 0,
            controlCountDown: false
        }
    },
    methods: {
        verificationTimer (time) {
            this.controlCountDown = true;
            let timeFun = setInterval(() => {
                if (this.time > 0) {
                    this.time--;
                } else {
                    clearInterval(timeFun);
                    this.controlCountDown = false;
                    this.time = 0;
                }
            }, 1000);
        },
        sendSmsAction (data, captchaVerification) {
            return new Promise((resolve, reject) => {
                sendSms(data.data, { captchaVerification: captchaVerification }).then(res => {
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        sendSecSmsAction (data) {
            return new Promise((resolve, reject) => {
                sendSecSms(data).then(res => {
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        sendCodeSmsAction (data) {
            return new Promise((resolve, reject) => {
                sendCodeSms(data).then(res => {
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        sendEmailAction (data, captchaVerification) {
            return new Promise((resolve, reject) => {
                sendEmail(data.data, { captchaVerification: captchaVerification }).then(res => {
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        sendSecEmailAction (data) {
            return new Promise((resolve, reject) => {
                sendSecEmail(data).then(res => {
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        sendCodeEmailAction (data) {
            return new Promise((resolve, reject) => {
                sendCodeEmail(data).then(res => {
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        sendSecondVerifyCodeSmsAction (data) {
            return new Promise((resolve, reject) => {
                sendSecondVerifyCodeSms(data).then(res => {
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        sendSecondVerifyCodeEmailAction (data) {
            return new Promise((resolve, reject) => {
                sendSecondVerifyCodeEmail(data).then(res => {
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}
