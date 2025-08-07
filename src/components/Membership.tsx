import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Membership.css';

const Membership: React.FC = () => {
  const { t } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      icon: '⭐',
      price: '$0',
      period: '/month',
      features: [
        'Basic consultation access',
        'Email support',
        'Monthly newsletter',
        'Community forum access'
      ],
      notIncluded: [
        'Priority support',
        'Advanced analytics',
        'Custom strategies',
        '1-on-1 sessions'
      ],
      color: '#6b7280',
      gradient: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)'
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: '🚀',
      price: '$49',
      period: '/month',
      features: [
        'Everything in Free',
        'Priority support',
        'Advanced analytics',
        'Custom strategies',
        'Monthly 1-on-1 session',
        'Exclusive workshops'
      ],
      notIncluded: [
        'Unlimited sessions',
        'Personal mentor',
        'Custom integrations'
      ],
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
      popular: true
    },
    {
      id: 'vip',
      name: 'VIP',
      icon: '👑',
      price: '$199',
      period: '/month',
      features: [
        'Everything in Premium',
        'Unlimited 1-on-1 sessions',
        'Personal mentor',
        'Custom integrations',
        'Priority scheduling',
        'Exclusive events',
        'Dedicated support team'
      ],
      notIncluded: [],
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    console.log(`Selected plan: ${planId}`);
  };

  return (
    <section id="membership" className="membership">
      <div className="membership-container">
        <div className="membership-header">
          <h2 className="membership-title">{t('membership.title')}</h2>
          <p className="membership-subtitle">{t('membership.subtitle')}</p>
        </div>

        <div className="plans-container">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${plan.popular ? 'popular' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <span>💎</span>
                  <span>{t('membership.mostPopular')}</span>
                </div>
              )}
              
              <div className="plan-header">
                <div className="plan-icon-container" style={{ background: plan.gradient }}>
                  <span className="plan-icon-emoji">{plan.icon}</span>
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>

              <div className="plan-features">
                <h4 className="features-title">{t('membership.included')}</h4>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon check">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.notIncluded.length > 0 && (
                  <>
                    <h4 className="features-title not-included">{t('membership.notIncluded')}</h4>
                    <ul className="features-list">
                      {plan.notIncluded.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span className="feature-icon times">✗</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <button 
                className="plan-button"
                style={{ background: plan.gradient }}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlanSelect(plan.id);
                }}
              >
                {t('membership.selectPlan')}
              </button>
            </div>
          ))}
        </div>

        <div className="membership-footer">
          <div className="security-badge">
            <span>🛡️</span>
            <span>{t('membership.securePayment')}</span>
          </div>
          <p className="membership-note">{t('membership.note')}</p>
        </div>
      </div>
    </section>
  );
};

export default Membership; 