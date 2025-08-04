import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaUsers, FaChartLine, FaCogs, FaGraduationCap, FaChartBar } from 'react-icons/fa';
import './Services.css';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <FaUsers />,
      title: t('services.mentoring'),
      description: 'Expert guidance to unlock your potential and accelerate growth'
    },
    {
      icon: <FaChartLine />,
      title: t('services.strategy'),
      description: 'Strategic planning and execution to achieve your business objectives'
    },
    {
      icon: <FaCogs />,
      title: t('services.management'),
      description: 'Comprehensive management solutions for operational excellence'
    },
    {
      icon: <FaGraduationCap />,
      title: t('services.training'),
      description: 'Professional development and skill enhancement programs'
    },
    {
      icon: <FaChartBar />,
      title: t('services.profitability'),
      description: 'Optimize your business performance and maximize returns'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">{t('services.title')}</h2>
          <p className="services-subtitle">
            Comprehensive solutions to transform your business and drive sustainable growth
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 