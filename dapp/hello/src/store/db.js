/**
 * 持久化存储
 * 一般情况下，您无需修改此文件
 * */

export default {
    namespaced: true,
    actions: {

        /**
         * @description 获取数据
         * @description 效果类似于取值 dbName
         * @param context context
         * @param {Object} dbName {String} key
         */
        get (context, {
            dbName = 'dbName'
        }) {
            return new Promise(resolve => {
                let data = context.rootState[dbName]
                resolve(data ? JSON.parse(data) : {})
            })
        }

    }
};
