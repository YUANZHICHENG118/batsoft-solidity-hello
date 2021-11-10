// import axios from 'axios';

export default async function ({ isHMR, app, store, route, params, error, redirect }) {
    // If middleware is called from hot module replacement, ignore it
    if (isHMR || process.browser) return
    const defaultLocale = app.i18n.fallbackLocale
    // Get locale from params
    const locale = params.lang || defaultLocale;
    /**
     * 资源页国际化
     */
    // if (!store.state.i18n.isLoading) {
    //     try {
    //         const pages = []
    //         if (route.matched) {
    //             for (const r of route.matched) {
    //                 pages.push(r.name)
    //             }
    //         }
    //         // eslint-disable-next-line no-unused-vars
    //         const rep = new Promise(resolve => {
    //             axios.get(process.env.INTERNAL_URL + '/admin/global/lang', {
    //                 params: {
    //                     pages: pages.toString(),
    //                     lang: locale
    //                 }
    //             }).then(rep => {
    //                 resolve(rep.data)
    //             })
    //         })
    //         // 获取国际化资源
    //         let { data } = await axios.get(process.env.INTERNAL_URL + '/admin/global')
    //         store.commit('i18n/setLocals', data)
    //         // console.log(data)
    //         // console.log(await rep)
    //         let globalData = await rep
    //         store.commit('i18n/setGlobalData', globalData)
    //         console.log(globalData)
    //         if (pages.length > 0) { store.commit('i18n/setIsLoading', true) }
    //     } catch (e) {
    //         console.log('国际化数据获取异常', e)
    //     }
    // }
    console.log('refresh................', locale)
    // Set locale
    store.commit('i18n/setLocaleMutation', locale)
    app.i18n.locale = store.state.i18n.locale;
    // If route is /<defaultLocale>/... -> redirect to /...
    if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale.toLowerCase()) === -1) {
        return redirect('/' + defaultLocale.toLowerCase())
    }
}
