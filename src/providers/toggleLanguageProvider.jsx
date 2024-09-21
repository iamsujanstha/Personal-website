import React, { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const ToggleContext = React.createContext({
    toggleLanguage: () => { },
});

const ToggleLanguageProvider = ({ children }) => {
    const { i18n } = useTranslation(); // This replaces the useContext(I18nContext)

    const changeLanguage = useCallback(
        (language) => {
            if (language) {
                i18n.changeLanguage(language); // Correctly calls the i18n changeLanguage function
                localStorage.setItem(btoa(btoa("language")), language); // Save the language in localStorage
            }
        },
        [i18n]
    );

    useEffect(() => {
        const localItem = localStorage.getItem(btoa(btoa("language")));
        if (!localItem) {
            changeLanguage('en'); // Default to English if no language is set
        } else {
            changeLanguage(localItem); // Set the saved language from localStorage
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
