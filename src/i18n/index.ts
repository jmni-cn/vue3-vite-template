import { createI18n } from 'vue-i18n';
import { getNavigatorLanguage } from '@/utils/locale';

import zhCN from './zhCN.json'
// import zhTW from './zhTW.json'

const language = localStorage.getItem('lang') || getNavigatorLanguage()
document.documentElement.setAttribute("lang", language);
const i18n = createI18n({
  locale: language,
  fallbackLocale: 'zhCN',
  legacy: false,
  globalInjection: true,
  messages: {
    zhCN,
  }
});

export default i18n;


