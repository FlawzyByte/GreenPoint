import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const firstLineRef = useRef<HTMLDivElement>(null);
  const secondLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove cursor from first line after 2 seconds
    const timer1 = setTimeout(() => {
      if (firstLineRef.current) {
        firstLineRef.current.classList.add('animate-complete');
      }
    }, 2000);

    // Remove cursor from second line after 4 seconds
    const timer2 = setTimeout(() => {
      if (secondLineRef.current) {
        secondLineRef.current.classList.add('animate-complete');
      }
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section id="home" className="hero">
      {/* Gold Sparkles */}
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <div ref={firstLineRef}>We are a laboratory</div>
            <div ref={secondLineRef}>of mentoring.</div>
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