import {tr, en} from '@/lang';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getAppLanguage, setAppLanguage} from '@/utils';
import {settingsActions} from '@/store/actions';

const resources = {
  tr: {
    translation: tr,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .then(async () => {
    const appLanguage = await getAppLanguage();
    if (appLanguage) {
      await i18n.changeLanguage(appLanguage);
    }
    await setAppLanguage(i18n.language);
    settingsActions.changeLanguage(i18n.language);
  });

export default i18n;
