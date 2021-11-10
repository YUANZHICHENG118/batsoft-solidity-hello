import Vue from 'vue';
import ViewUI from 'view-design';
import '@/libs/iview-pro/iview-pro.css';
import iViewPro from '@/libs/iview-pro/iview-pro.min.js';
Vue.use(iViewPro);
Vue.use(ViewUI, {
    transfer: true,
    size: 'large',
    capture: false,
    select: {
        arrow: 'md-arrow-dropdown',
        arrowSize: 20
    }
});
