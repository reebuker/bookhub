import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext'; 
import './Header.css';
import glassIcon from './glass.png';



const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  const { language, changeLanguage, t } = useLanguage();

  return (
    <header className="header">
      <div className="header-content">
        
        {/* Левая часть */}
        <div className="header-left">
          <div className="search-container">
            <button 
              className="search-btn" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <span>{t('header.search')}</span>
              <img src={glassIcon} alt="search" className="search-icon" />
            </button>
            {isSearchOpen && (
              <div className="search-popup">
                <input
                  type="text"
                  placeholder={t('header.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  autoFocus
                />
              </div>
            )}
          </div>

          <Link to="/my-library" className="nav-link">{t('header.myLibrary')}</Link>
        </div>

        {/* Логотип по центру */}
        <Link to="/" className="logo">
          <span className="logo-short">bh</span>
          <span className="logo-full">bookhub</span>
        </Link>

        {/* Правая часть */}
        <div className="header-right">
          <Link to="/about" className="nav-link">{t('header.about')}</Link>

          <div className="auth-links">
            <Link to="/sign-in" className="nav-link">{t('header.signIn')}</Link>
            <span className="divider">{t('header.divider')}</span>
            <Link to="/sign-up" className="nav-link">{t('header.signUp')}</Link>
          </div>

          {/* Переключатель языков */}
          <div className="language-switcher">
            <button 
              className="lang-btn" 
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              {language.toUpperCase()}
              <span className="lang-arrow">▼</span>
            </button>
            
            {isLangOpen && (
              <div className="lang-dropdown">
                <button 
                  className={`lang-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => {
                    changeLanguage('en');
                    setIsLangOpen(false);
                  }}
                >
                  EN
                </button>
                <button 
                  className={`lang-option ${language === 'ru' ? 'active' : ''}`}
                  onClick={() => {
                    changeLanguage('ru');
                    setIsLangOpen(false);
                  }}
                >
                  RU
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;