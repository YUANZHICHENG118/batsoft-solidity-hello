let env = process.env.ENV
let envfile
if (env) {
    envfile = '.env.' + env
} else {
    envfile = '.env'
}
console.log('env file:', envfile)
require('dotenv').config()
module.exports = {
    srcDir: 'src/',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '绿色能源软件开发-碳排放系统搭建-智能合约开发-专业金融软件开发公司「BatSoft」-%s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'keywords', content: '金融软件开发公司,绿色能源软件系统,碳排放系统,智能合约系统,电商系统' },
            { hid: 'description', name: 'description', content: '钡特科技是行业著名综合金融软件及解决方案提供商，公司业务涵盖绿色能源系统、碳排放系统、智能合约系统开发、电商系统、供应链金融系统、汽车金融系统等各金融细分领域，自成立以来已为上千家客户提供了专业的软件系统及金融定制化解决方案。' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            { src: '/qrcode.min.js' }
        ]
    },
    router: {
        middleware: ['device', 'i18n', 'global']
    },
    plugins: [
        '~plugins/lang.js',
        '~plugins/index.js',
        // { src: '~plugins/mock.js', ssr: true }
        { src: '~plugins/iview', ssr: true },
        { src: '~plugins/awesomeSwiper', ssr: false },
        { src: '@/plugins/wow.js', ssr: false }
    ],
    modules: [
        '@nuxtjs/proxy',
        ['@nuxtjs/dotenv', { filename: envfile }],
        ['nuxt-vuex-localstorage', {
            localStorage: [ 'common'], //  If not entered, “localStorage” is the default value
            sessionStorage: ['sec'], //  If not entered, “sessionStorage” is the default value
            mode: 'debug'
        }]

    ],
    axios: {
        proxy: false
    },
    proxy: {
        '/dtasite': {
            // target: 'https://api.bitsafew.com/',
            secure: true,
            target: 'https://api.batsoft.io/',
            // secure: false, // https配置为false
            changeOrigin: true,
            pathRewrite: {
                '^/dtasite': ''
            }
        }
    },
    css: [
        '~/assets/css/reset.less',
        '~/assets/css/iconfont.css',
        '~/assets/css/responsive.css',
        '~/assets/css/font-awesome.min.css',
        '~/assets/css/animate.css'
    ],
    render: {
        resourceHints: false
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        // optimization: {
        //     splitChunks: {
        //         chunks: 'all',
        //         minSize: 10000,
        //         maxSize: 250000
        //     }
        // },
        extractCSS: true,
        babel: {
            compact: false
        },
        transpile: ['view-design'],
        /*
         ** Run ESLint on save
         */
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
