import {settingsActions} from '@/store/actions';
import i18next from 'i18next';
import {setAppLanguage} from './SecureStorage';

export const onChangeLanguage = (lang: string) => {
  setAppLanguage(lang);
  i18next.changeLanguage(lang);
  settingsActions.changeLanguage(lang);
};
