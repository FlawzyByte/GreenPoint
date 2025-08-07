import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Flag from 'react-flagkit';
import logoTransparent from '../assets/logo_transparent.png';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  const isHomePage = location.pathname === '/';

  const handleHomeClick = () => {
    if (!isHomePage) {
      navigate('/');
    } else {
      // If we're already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 50;
        setScrolled(isScrolled);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key to close menus
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
          <button 
            onClick={handleHomeClick}
            className="logo-link"
            aria-label="Go to home"
          >
            <img src={logoTransparent} alt="Green Point Logo" className="logo" loading="eager" />
          </button>
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
          {isHomePage ? (
            <>
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
                to="about" 
                smooth={true} 
                duration={500} 
                className="nav-link" 
                onClick={() => setIsMenuOpen(false)}
                aria-label={t('nav.about')}
              >
                {t('nav.about')}
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
            </>
          ) : (
            <>
              <button
                className="nav-link"
                onClick={handleHomeClick}
                aria-label={t('nav.home')}
              >
                {t('nav.home')}
              </button>
              <button
                className="nav-link"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/#services');
                }}
                aria-label={t('nav.services')}
              >
                {t('nav.services')}
              </button>
              <button
                className="nav-link"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/#about');
                }}
                aria-label={t('nav.about')}
              >
                {t('nav.about')}
              </button>
              <button
                className="nav-link"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/#contact');
                }}
                aria-label={t('nav.contact')}
              >
                {t('nav.contact')}
              </button>
            </>
          )}
          <button
            className="nav-link membership-nav-link"
            onClick={() => {
              setIsMenuOpen(false);
              navigate('/membership');
            }}
            aria-label={t('nav.membership')}
          >
            {t('nav.membership')}
          </button>
        </div>

        <div className="navbar-right">
          <div className="language-dropdown" ref={languageRef}>
            <button 
              className="lang-dropdown-btn" 
              onClick={toggleLanguage}
              title="Select Language"
              aria-label={`Current language: ${language === 'en' ? 'English' : 'Español'}`}
              aria-expanded={isLanguageOpen}
            >
              <Flag country={language === 'en' ? 'US' : 'ES'} size={20} />
              <span>{language === 'en' ? 'EN' : 'ES'}</span>
            </button>
            <div 
              className={`language-dropdown-menu ${isLanguageOpen ? 'active' : ''}`}
              role="menu"
              aria-label="Language options"
            >
              <button 
                className="language-option"
                onClick={() => handleLanguageChange('en')}
                role="menuitem"
                aria-label="Switch to English"
              >
                <Flag country="US" size={16} />
                <span>English</span>
              </button>
              <button 
                className="language-option"
                onClick={() => handleLanguageChange('es')}
                role="menuitem"
                aria-label="Switch to Spanish"
              >
                <Flag country="ES" size={16} />
                <span>Español</span>
              </button>
            </div>
          </div>
          <button
            className="login-nav-button"
            onClick={() => navigate('/login')}
            aria-label={t('auth.login')}
          >
            {t('auth.login')}
          </button>
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