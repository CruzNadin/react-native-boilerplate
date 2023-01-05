import EncryptedStorage from 'react-native-encrypted-storage';
import appConfig from '../../app.json';

const setStorage = async (storageName: string, storageData: any) => {
  try {
    await EncryptedStorage.setItem(storageName, JSON.stringify(storageData));
    return true;
  } catch (error) {
    return false;
  }
};

const getStorage = async (storageName: string) => {
  try {
    const storageData = await EncryptedStorage.getItem(storageName);
    if (storageData) {
      return JSON.parse(storageData);
    }
    return null;
  } catch (error) {
    return null;
  }
};

const removeStorage = async (storageName: string) => {
  try {
    await EncryptedStorage.removeItem(storageName);
    return true;
  } catch (error) {
    return false;
  }
};

const clearStorage = async () => {
  try {
    await EncryptedStorage.clear();
    return true;
  } catch (error) {
    return false;
  }
};

//#region LANGUAGE
const getAppLanguage = async (): Promise<string> => {
  return getStorage(`${appConfig.name}_Mobile_Selected_Language`);
};

const setAppLanguage = async (language: string) => {
  return setStorage(`${appConfig.name}_Mobile_Selected_Language`, language);
};
//#endregion

export {
  setStorage,
  getStorage,
  removeStorage,
  clearStorage,
  getAppLanguage,
  setAppLanguage,
};
