import React, { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import CryptoJS from 'crypto-js';


const ENCRYPTION_KEY = 'localStorage-storing-lanaguage-key';

export const ToggleContext = React.createContext({
    toggleLanguage: () => { },
});

const encrypt = (text) => {
    return CryptoJS.AES.encrypt(text, ENCRYPTION_KEY).toString();
};

const decrypt = (ciphertext) => {
    try {
        const bytes = CryptoJS.AES.decrypt(ciphertext, ENCRYPTION_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (e) {
        console.error('Decryption error:', e);
        return null;
    }
};

const ToggleLanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();

    const changeLanguage = useCallback(
        (language) => {
            if (language) {
                i18n.changeLanguage(language);
                const encryptedLanguage = encrypt(language);
                localStorage.setItem(btoa(btoa("language")), encryptedLanguage);
            }
        },
        [i18n]
    );

    useEffect(() => {
        const encryptedLanguage = localStorage.getItem(btoa(btoa("language")));
        if (!encryptedLanguage) {
            changeLanguage('en');
        } else {
            const decryptedLanguage = decrypt(encryptedLanguage);
            if (decryptedLanguage) {
                changeLanguage(decryptedLanguage);
            } else {
                console.warn('Invalid encryption data, defaulting to English');
                changeLanguage('en');
            }
        }
    }, [changeLanguage]);

    const toggleOptions = useMemo(() => ({
        toggleLanguage: changeLanguage,
    }), [changeLanguage]);

    return (
        <ToggleContext.Provider value={toggleOptions}>
            {children}
        </ToggleContext.Provider>
    );
};

export default ToggleLanguageProvider;

