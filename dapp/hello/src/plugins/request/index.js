import axios from 'axios';
import util from '@/libs/util';
import Setting from '@/setting';
import { Message, Notice } from 'view-design';

// 创建一个错误
function errorCreate (msg) {
    const err = new Error(msg);
    errorLog(err);
    throw err;
}

// 记录和显示错误
function errorLog (err) {
    // 打印到控制台
    if (process.env.NODE_ENV === 'development') {
        util.log.error('>>>>>> Error >>>>>>');
        console.log(err);
    }
    // 显示提示，可配置使用 iView 的 $Message 还是 $Notice 组件来显示
    if (Setting.errorModalType === 'Message') {
        Message.error({
            content: err.message,
            duration: Setting.modalDuration
        });
    } else if (Setting.errorModalType === 'Notice') {
        Notice.error({
            title: 'Error',
            desc: err.message,
            duration: Setting.modalDuration
        });
    }
}

// 创建一个 axios 实例
/* const service = axios.create({
    baseURL: Setting.apiBaseURL,
    timeout: 300000 // 请求超时时间
}); */
const service = axios.create({
    baseURL: Setting.apiBaseURL,
    timeout: 300000, // 请求超时时间
    validateStatus: function (status) {
        return (status >= 200 && status < 300) || status === 426; // 默认的
    }
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        let store = window.$nuxt?.$store;
        const headers = {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
        if (store?.state?.account?.access?.token_type) {
            headers['Authorization'] = store?.state?.account?.access?.token_type + ' ' + store?.state?.account?.access?.access_token
        }
        config.headers = { ...headers, ...config.headers }
        return config;
    },
    error => {
        // 发送失败
        console.log(error);
        Promise.reject(error);
    }
);
// 响应拦截器
service.interceptors.response.use(
    response => {
        // dataAxios 是 axios 返回数据中的 data
        const dataAxios = response.data;
        console.info(response)
        // 这个状态码是和后端约定的
        const { code } = dataAxios;
        // 根据 code 进行判断
        if (code === undefined) {
            // 如果没有 code 代表这不是项目后端开发的接口
            return dataAxios;
        } else {
            // 有 code 代表这是一个后端接口 可以进行进一步的判断
            switch (code) {
            case 0:
                // [ 示例 ] code === 0 代表没有错误
                return dataAxios.data;
            case 1:
                if (dataAxios.data) {
                    Notice.info({
                        title: 'Tips',
                        desc: dataAxios.msg,
                        duration: Setting.modalDuration
                    });
                    return dataAxios.data;
                }
                // [ 示例 ] 其它和后台约定的 code
                errorCreate(`${dataAxios.msg}`);
                break;
            default:
                // 不是正确的 code
                errorCreate(`${dataAxios.msg}: ${response.config.url}`);
                break;
            }
        }
    },
    async error => {
        if (error && error.response) {
            switch (error.response.status) {
            case 400: error.message = 'Request Error'; break;
            case 401:
                await window.$nuxt.$store.dispatch('user/logout')
                error.message = 'Unauthorized, please log in';
                window.$nuxt.$router.push(window.$nuxt.$i18n.path('login'))
                break;
            case 403: error.message = 'Access denied'; break;
            case 404: error.message = `Request address error: ${error.response.config.url}`; break;
            case 408: error.message = 'Request time out'; break;
            case 500: error.message = error.response.data ? error.response.data.msg : 'Server error'; break;
            case 501: error.message = 'Service not implemented'; break;
            case 502: error.message = 'Bad Gateway'; break;
            case 503: error.message = 'Service Unavailable'; break;
            case 504: error.message = 'Gateway timeout'; break;
            case 505: error.message = 'The HTTP version is not supported'; break;
            default: break;
            }
        }
        errorLog(error);
        return Promise.reject(error);
    }
);

export default service;
