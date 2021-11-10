// 导入自有语言包
import zhCN from './locale/zh-CN';
import enUS from './locale/en-US';
import jaJP from './locale/ja-JP';
import koKR from './locale/ko-KR';
import arSA from './locale/ar-SA';
import deDE from './locale/de-DE';
import hiIN from './locale/hi-IN';
import zhHK from './locale/zh-HK'

// 导入 iView 语言包
import zhCNiView from 'view-design/dist/locale/zh-CN';
import enUSiView from 'view-design/dist/locale/en-US';
import jaJPiView from 'view-design/dist/locale/ja-JP';
import koKRiView from 'view-design/dist/locale/ko-KR';
import arSAiView from 'view-design/dist/locale/ar-SA';
import deDEiView from 'view-design/dist/locale/de-DE';
import hiINiView from 'view-design/dist/locale/hi-IN';
import hiZHTWiView from 'view-design/dist/locale/zh-TW'

// 导入布局语言包
import layoutLocale from '@/layouts/basic-layout/i18n';

// 合并语言包
export default {
    'zh-cn': Object.assign(zhCN, zhCNiView, layoutLocale['zh-cn']),
    'zh-hk': Object.assign(zhHK, hiZHTWiView, layoutLocale['zh-hk']),
    'en-us': Object.assign(enUS, enUSiView, layoutLocale['en-us']),
    'ja-jp': Object.assign(jaJP, jaJPiView, layoutLocale['ja-jp']),
    'ko-kr': Object.assign(koKR, koKRiView, layoutLocale['ko-kr']),
    'ar-sa': Object.assign(arSA, arSAiView, layoutLocale['ar-sa']),
    'de-de': Object.assign(deDE, deDEiView, layoutLocale['de-de']),
    'hi-in': Object.assign(hiIN, hiINiView, layoutLocale['hi-in'])
};
