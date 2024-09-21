import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translation files
import enExperience from "./locale/experience/en.json";
import enNavbar from './locale/navbar/en.json';
import enHero from './locale/hero/en.json';
import enAbout from './locale/about/en.json';
import enContact from './locale/contact/en.json';


// Nepali translation files
import neExperience from "./locale/experience/ne.json";
import neNavbar from './locale/navbar/ne.json';
import neHero from './locale/hero/ne.json';
import neAbout from './locale/about/ne.json';
import neContact from './locale/contact/ne.json'

export const geti18nLanguage = (language) => {
  try {
    return atob(atob(localStorage.getItem(btoa(btoa(language))) ?? ''));
  } catch (e) {
    return '';
  }
};

// the translations
const resources = {
  en: {
    navbar: enNavbar,
    hero: enHero,
    about: enAbout,
    contact: enContact,
    experience: enExperience,
  },
  ne: {
    navbar: neNavbar,
    hero: neHero,
    about: neAbout,
    contact: neContact,
    experience: neExperience
  }
};


const nepaliCount = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: geti18nLanguage('language') ?? 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    whitelist: ["ne", "en"],

    keySeparator: '.', // we use keys in form ('messages.welcome')

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

/** 
 * Returns data in selected language
 * @param dataEn any data containing english language
 * @param dataNe any data containing nepali language
 */
export function getTextByLanguage(languageEn, languageNe) {
  if (i18n.language === "ne") {
    return languageNe;
  }
  return languageEn

}

/**
 * Converts english number to nepali number as string
 * @param numberEn number in english
 */
export const convertEngToNepNumber = (numberEn) => {
  // eslint-disable-next-line eqeqeq
  if (!numberEn && numberEn != 0) return '';
  return (typeof numberEn === 'string' ? numberEn : numberEn.toString())
    .split('')
    .map((number) => (nepaliCount[+number] ? nepaliCount[+number] : number))
    .join('');
};

export default i18n;
