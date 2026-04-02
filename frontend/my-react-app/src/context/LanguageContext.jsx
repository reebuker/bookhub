import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../translations/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {

    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    keys.forEach((k) => {
      value = value?.[k];
    });
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};