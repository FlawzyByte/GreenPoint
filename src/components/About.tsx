import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaLightbulb, FaCogs, FaChartLine } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const { t } = useLanguage();

  const phases = [
    {
      icon: <FaLightbulb />,
      title: t('phase1.title'),
      description: t('phase1.desc'),
      color: '#3b82f6'
    },
    {
      icon: <FaCogs />,
      title: t('phase2.title'),
      description: t('phase2.desc'),
      color: '#10b981'
    },
    {
      icon: <FaChartLine />,
      title: t('phase3.title'),
      description: t('phase3.desc'),
      color: '#f59e0b'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">{t('about.title')}</h2>
            
            <div className="about-questions">
              <p className="about-question">{t('about.question')}</p>
              <p className="about-knowledge">{t('about.knowledge')}</p>
              <p className="about-interested">{t('about.interested')}</p>
            </div>
            
            <div className="about-description">
              <p>{t('about.approach')}</p>
              <p>{t('about.expertise')}</p>
              <p>{t('about.ai')}</p>
              <p className="highlight">{t('about.enhance')}</p>
            </div>
          </div>
        </div>

        <div className="phases-section">
          <h3 className="phases-title">{t('phases.title')}</h3>
          <div className="phases-grid">
            {phases.map((phase, index) => (
              <div key={index} className="phase-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="phase-icon" style={{ backgroundColor: phase.color }}>
                  {phase.icon}
                </div>
                <h4 className="phase-title">{phase.title}</h4>
                <p className="phase-description">{phase.description}</p>
                <div className="phase-number">{index + 1}</div>
              </div>
            ))}
          </div>
          <p className="phases-note">{t('phases.graphics')}</p>
        </div>
      </div>
    </section>
  );
};

export default About; 