/**
 * @flow
 */

import {NativeModules, Platform} from 'react-native';
import LocalizedStrings from 'react-native-localization';
import en from './languages/en';
import vi from './languages/vi';
export default new LocalizedStrings({
  vi: vi,
  en: en,
});

export function getLanguage() {
  let deviceLanguage = '';
  if (Platform.OS === 'ios') {
    deviceLanguage = NativeModules.SettingsManager.settings.AppleLocale;
    if (!deviceLanguage) {
      deviceLanguage = NativeModules.SettingsManager.settings.AppleLanguages[0];
    }
    if (!deviceLanguage) {
      deviceLanguage = 'en';
    }
  } else {
    deviceLanguage = NativeModules.I18nManager.localeIdentifier;
  }

  return deviceLanguage.toString().slice(0, 2);
}
