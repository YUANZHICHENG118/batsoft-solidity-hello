/**
 * 插件
 * */

import Vue from 'vue'
import { toIntercept } from '@/libs/util';
import DateUtil from '../libs/util.date';
import cal from '../libs/calculation';
import echarts from 'echarts' // 引入echarts
let tool = {
    install (Vue) {
        Vue.prototype.Intercept = toIntercept
        Vue.prototype.$DateUtil = DateUtil
        Vue.prototype.$cal = cal
        Vue.prototype.$echarts = echarts // 引入组件（将echarts注册为全局）
    }
}
Vue.use(tool);
