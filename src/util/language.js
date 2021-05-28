export default class LanguageUtil {
    constructor() {
        this.EN = 'en'
        this.RU = 'ru'
    }

    setCurrentLanguage(lang) {
        localStorage.setItem('lang', lang)
    }

    getCurrentLanguage() {
        let item = localStorage.getItem('lang');
        return item === null ? 'ru' : item
    }
}

