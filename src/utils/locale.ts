export enum NativeLanguage {
    zhCN = 'zhCN',
    zhTW = 'zhTW',
    koKR = 'koKR',
    enUS = 'enUS',
}
export const createLanguage = (language: string): NativeLanguage => {
    if (/^zh-(TW|HK|MO)$/i.test(language)) {
        return NativeLanguage.zhTW;
    }
    if (/^zh/i.test(language)) {
        return NativeLanguage.zhCN;
    }
    if (/^ko/i.test(language)) {
        return NativeLanguage.koKR;
    }
    return NativeLanguage.enUS;
};

export const navigatorCreateLanguage = (): NativeLanguage => createLanguage(navigator.language || 'en-US');

export const detectLanguage = (lang: string): NativeLanguage => {
    if (/^zh-(TW|HK|MO)|zh-Hant/i.test(lang)) return NativeLanguage.zhTW;
    if (/^zh/i.test(lang)) return NativeLanguage.zhCN;
    if (/^ko/i.test(lang)) return NativeLanguage.koKR;
    return NativeLanguage.enUS;
};

export const getNavigatorLanguage = (): NativeLanguage => {
    const lang = navigator.languages?.[0] || navigator.language || 'en-US';
    return detectLanguage(lang);
};