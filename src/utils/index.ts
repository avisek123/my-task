import {MMKVLoader} from 'react-native-mmkv-storage';

const storage = new MMKVLoader().initialize();

export const saveDataToStorage = async (key: string, data: any) => {
  try {
    await storage.setStringAsync(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data to MMKV storage', error);
  }
};

export const getDataFromStorage = async (key: string) => {
  try {
    const jsonValue = await storage.getStringAsync(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error retrieving data from MMKV storage', error);
  }
};

export const clearAllDataFromStorage = async () => {
  try {
    // Clear all keys
    await storage.clearStore();
    console.log('All data cleared from MMKV storage');
  } catch (error) {
    console.error('Error clearing data from MMKV storage:', error);
  }
};

export const isValidEmail = (email: string) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(emailRegex);
};
