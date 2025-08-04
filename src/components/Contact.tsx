import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaWhatsapp, FaTelegram, FaInstagram, FaLeaf } from 'react-icons/fa';
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

  // Input sanitization function
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
    // TODO: Implement secure form submission to backend
    // For now, just prevent default and show success message
    setSubmitStatus('success');
    setFormData({ name: '', email: '', company: '', message: '' });
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">{t('contact.title')}</h2>
          <p className="contact-subtitle">{t('contact.question')}</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  maxLength={100}
                  pattern="[A-Za-z\s]+"
                  title="Please enter only letters and spaces"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  maxLength={254}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  maxLength={100}
                  pattern="[A-Za-z0-9\s\-\.]+"
                  title="Please enter only letters, numbers, spaces, hyphens, and dots"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your business challenge..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  maxLength={1000}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
              {submitStatus === 'success' && (
                <div className="success-message" style={{
                  color: '#10b981',
                  textAlign: 'center',
                  marginTop: '1rem',
                  padding: '0.5rem',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '5px'
                }}>
                  Thank you for your message. We will get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <div className="payment-section">
              <h3>Payment Options</h3>
              <p>{t('contact.payments')}</p>
              <div className="payment-buttons">
                <button type="button" className="payment-btn pesos">Pesos</button>
                <button type="button" className="payment-btn dollars">Dollars</button>
                <button type="button" className="payment-btn crypto">Crypto</button>
              </div>
            </div>

            <div className="social-section">
              <h3>Share & Connect</h3>
              <p>{t('contact.share')}</p>
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
            </div>

            <div className="tree-section">
              <div className="tree-icon">
                <FaLeaf />
              </div>
              <p>{t('contact.tree')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 