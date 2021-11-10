/**
 * 多语言
 * */
import Languages from '@/i18n/locale';
import Setting from '@/setting';
import util from '@/libs/util';
const savedLocaleKey = 'i18n-locale';

export default {
    state: () => ({
        // 动态载入与storage
        locales: [{ lang: 'zh-cn', name: '简体中文' }, { lang: 'zh-hk', name: '繁體中文' }, { lang: 'en-us', name: 'English' }],
        locale: 'en-us',
        current: {},
        isLoading: false,
        // 当页国际化数据 载入至i18n storage多级缓存
        globalData: {}
    }),
    mutations: {
        setLocaleMutation (state, data) {
            const locales = state.locales
            for (let i = 0; i < locales.length; i++) {
                if (locales[i].lang === data) {
                    state.locale = data;
                    state.current = locales[i]
                    return
                }
            }
        },
        setIsLoading (state, is) {
            state.isLoading = is;
        },
        setLocals (state, locals) {
            state.locales = locals
        },
        setGlobalData (state, globalData) {
            state.globalData = globalData
        }
    },
    actions: {
        /**
         * @description 获取当前语言
         * */
        getLocale ({ state, commit }) {
            let locale;

            const db = util.cookies;

            const savedLocale = db.get(savedLocaleKey);

            // 先判断本地存储是否已有语言选择
            if (savedLocale) {
                locale = savedLocale;
            } else {
                // 判断是否开启自动识别语言
                if (Setting.i18n.auto) {
                    // 如果自动识别的语言，本地没有该语言包，则设置为默认语言
                    const navLang = navigator.language;
                    if (Languages[navLang]) {
                        locale = navLang;
                    } else {
                        locale = Setting.i18n.default;
                    }
                } else {
                    locale = Setting.i18n.default;
                }

                // 将初次的语言保存在本地
                db.set(savedLocaleKey, locale);
            }
            commit('setLocaleMutation', locale)
        },
        /**
         * @description 设置当前语言
         * */
        setLocale ({ state, commit }, { locale = Setting.i18n.default, vm }) {
            const db = util.cookies;
            // 将语言保存在本地
            db.set(savedLocaleKey, locale);
            // 设置当前语言
            commit('setLocaleMutation', locale)
            // 设置 vue-i18n 的语言
            vm.$i18n.locale = locale;
            // 更新网页标题
            util.title({
                title: vm.$route.meta.title
            });
        }
    }
};
