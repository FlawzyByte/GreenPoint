import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import Flag from 'react-flagkit';
import logoTransparent from '../assets/logo_transparent.png';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);

  // Memoized event handlers for better performance
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleLanguage = useCallback(() => {
    setIsLanguageOpen(prev => !prev);
  }, []);

  const handleLanguageChange = useCallback((lang: 'en' | 'es') => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  }, [setLanguage]);

  // Scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img 
            src={logoTransparent} 
            alt="Green Point Logo" 
            className="logo"
            loading="eager"
          />
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
            aria-label={t('nav.home')}
          >
            {t('nav.home')}
          </Link>
          <Link 
            to="services" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
            aria-label={t('nav.services')}
          >
            {t('nav.services')}
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
            aria-label={t('nav.contact')}
          >
            {t('nav.contact')}
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="nav-link book-appointment"
            onClick={() => setIsMenuOpen(false)}
            aria-label={t('nav.book')}
          >
            {t('nav.book')}
          </Link>
        </div>

        <div className="language-switcher">
          <div className="language-dropdown" ref={languageRef}>
            <button 
              className="lang-dropdown-btn"
              onClick={toggleLanguage}
              title="Select Language"
              aria-label={`Current language: ${language === 'en' ? 'English' : 'Español'}`}
              aria-expanded={isLanguageOpen}
            >
              {language === 'en' ? (
                <>
                  <Flag country="GB" size={16} aria-hidden="true" />
                  <span>EN</span>
                </>
              ) : (
                <>
                  <Flag country="ES" size={16} aria-hidden="true" />
                  <span>ES</span>
                </>
              )}
              <span className="dropdown-arrow" aria-hidden="true">▼</span>
            </button>
            <div 
              className={`language-dropdown-menu ${isLanguageOpen ? 'active' : ''}`}
              role="menu"
              aria-label="Language options"
            >
              <button 
                className={`lang-option ${language === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
                role="menuitem"
                aria-label="Switch to English"
              >
                <Flag country="GB" size={16} aria-hidden="true" />
                <span>English</span>
              </button>
              <button 
                className={`lang-option ${language === 'es' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('es')}
                role="menuitem"
                aria-label="Switch to Spanish"
              >
                <Flag country="ES" size={16} aria-hidden="true" />
                <span>Español</span>
              </button>
            </div>
          </div>
        </div>

        <button 
          className="navbar-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
        >
          <span className="bar" aria-hidden="true"></span>
          <span className="bar" aria-hidden="true"></span>
          <span className="bar" aria-hidden="true"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 