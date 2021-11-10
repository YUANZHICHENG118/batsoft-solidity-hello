import Vue from 'vue';
import ViewUI from 'view-design';

import VueI18n from 'vue-i18n';
import Languages from '@/i18n/locale';
import locale from 'view-design/dist/locale/en-US';
Vue.use(ViewUI, { locale });

Vue.use(VueI18n);

export default ({ app, store }) => {
    store.dispatch('i18n/getLocale');
    const defaultLang = store.state.i18n.locale
    app.i18n = new VueI18n({
        locale: defaultLang,
        fallbackLocale: defaultLang,
        messages: Languages
    });
    app.i18n.path = (link) => {
        return `/${app.i18n.locale.toLowerCase()}/${link}`
    }
}
