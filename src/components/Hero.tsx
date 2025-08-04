import React from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('hero.title')}
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="hero-cta">
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="cta-button"
            >
              {t('hero.cta')}
            </Link>
          </div>
        </div>

      </div>
      <div className="hero-background">
        <div className="gradient-overlay"></div>
      </div>
    </section>
  );
};

export default Hero; 