import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Auth.css';

const Auth: React.FC = () => {
  const { t } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('This is a prototype - no actual authentication is performed.');
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    });
  };

  return (
    <section id="auth" className="auth">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2 className="auth-title">
              {isLogin ? t('auth.login') : t('auth.signup')}
            </h2>
            <p className="auth-subtitle">
              {isLogin ? t('auth.loginSubtitle') : t('auth.signupSubtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <div className="input-container">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('auth.name')}
                    required={!isLogin}
                    className="auth-input"
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('auth.email')}
                  required
                  className="auth-input"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder={t('auth.password')}
                  required
                  className="auth-input"
                />
              </div>
            </div>

            {!isLogin && (
              <div className="form-group">
                <div className="input-container">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder={t('auth.confirmPassword')}
                    required={!isLogin}
                    className="auth-input"
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="form-options">
                <label className="checkbox-container">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkmark"></span>
                  {t('auth.rememberMe')}
                </label>
                <a href="#forgot-password" className="forgot-password">
                  {t('auth.forgotPassword')}
                </a>
              </div>
            )}

            <button
              type="submit"
              className="auth-button"
            >
              {isLogin ? t('auth.loginButton') : t('auth.signupButton')}
            </button>
          </form>

          <div className="social-login">
            <div className="divider">
              <span>{t('auth.orContinueWith')}</span>
            </div>
            
            <div className="social-buttons">
              <button
                type="button"
                className="social-button google"
                onClick={() => console.log('Google login clicked')}
              >
                <span>Google</span>
              </button>
              
              <button
                type="button"
                className="social-button facebook"
                onClick={() => console.log('Facebook login clicked')}
              >
                <span>Facebook</span>
              </button>
              
              <button
                type="button"
                className="social-button twitter"
                onClick={() => console.log('Twitter login clicked')}
              >
                <span>Twitter</span>
              </button>
            </div>
          </div>

          <div className="auth-footer">
            <p>
              {isLogin ? t('auth.noAccount') : t('auth.haveAccount')}
              <button
                type="button"
                className="mode-toggle"
                onClick={toggleMode}
              >
                {isLogin ? t('auth.signup') : t('auth.login')}
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth; 