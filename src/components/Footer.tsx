import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Flag from 'react-flagkit';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.headquarters')}</h3>
            <div className="headquarters-list">
              <div className="headquarters-item">
                <span className="location-icon">
                  <Flag country="AR" size={20} />
                </span>
                <span>{t('footer.buenosAires')}</span>
              </div>
              <div className="headquarters-item">
                <span className="location-icon">
                  <Flag country="US" size={20} />
                </span>
                <span>{t('footer.newYork')}</span>
              </div>
              <div className="headquarters-item">
                <span className="location-icon">
                  <Flag country="HU" size={20} />
                </span>
                <span>{t('footer.budapest')}</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Connect With Us</h3>
            <p className="footer-description">
              Ready to transform your business? Let's start your most powerful chapter together.
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Mental & Business Consulting Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 