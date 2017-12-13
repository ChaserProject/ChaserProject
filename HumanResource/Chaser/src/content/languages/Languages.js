
import LocalizedStrings from 'react-native-localization';

import English from './English';
import VietNam from './VietNam';

export const Languages = new LocalizedStrings({
    en: English,
    vn: VietNam
});

Languages.setLanguage('vn');

export const setLanguage = (lang) => {
    Languages.setLanguage(lang);
};
