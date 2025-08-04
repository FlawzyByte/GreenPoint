import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>]/g, '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: sanitizedValue
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('success');
    setFormData({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">{t('contact.title')}</h2>
          <p className="contact-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <h3 className="form-title">{t('contact.form.title')}</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.name')}
                  required
                  maxLength={100}
                  pattern="[A-Za-z\s]+"
                  title="Please enter a valid name (letters and spaces only)"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.email')}
                  required
                  maxLength={100}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.company')}
                  maxLength={100}
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.message')}
                  required
                  rows={5}
                  maxLength={1000}
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                {t('contact.form.send')}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  {t('contact.form.success')}
                </div>
              )}
            </form>
          </div>

          <div className="contact-info-section">
            <h3 className="info-title">{t('contact.info.title')}</h3>
            
            <div className="payment-section">
              <h4 className="payment-title">{t('contact.payment.title')}</h4>
              <div className="payment-buttons">
                <button type="button" className="payment-btn paypal">
                  PayPal
                </button>
                <button type="button" className="payment-btn stripe">
                  Credit Card
                </button>
              </div>
            </div>

            <div className="social-section">
              <h4 className="social-title">{t('contact.social.title')}</h4>
              <div className="social-buttons">
                <button 
                  type="button" 
                  className="social-btn whatsapp"
                  onClick={() => window.open('https://wa.me/your-number', '_blank', 'noopener,noreferrer')}
                  aria-label="Contact us on WhatsApp"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </button>
                
                <button 
                  type="button" 
                  className="social-btn telegram"
                  onClick={() => window.open('https://t.me/your-username', '_blank', 'noopener,noreferrer')}
                  aria-label="Contact us on Telegram"
                >
                  <FaTelegram />
                  <span>Telegram</span>
                </button>
                
                <button 
                  type="button" 
                  className="social-btn instagram"
                  onClick={() => window.open('https://instagram.com/your-username', '_blank', 'noopener,noreferrer')}
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </button>
              </div>
              
              <div className="tree-quote">
                <p>🍃 Each client... We planted a tree together with a foundation... or collaborate with doctors without borders...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 