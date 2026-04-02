import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './MyLibrary.css';

const MyLibrary = () => {
  const { t } = useLanguage();
  
  return (
    <div className="library-page">
      <h1>{t('myLibrary.title')}</h1>
      <p>Ваша библиотека (добавь книги позже)</p>
    </div>
  );
};

export default MyLibrary;