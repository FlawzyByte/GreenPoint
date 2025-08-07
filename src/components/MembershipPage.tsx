import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from './Navbar';
import './MembershipPage.css';

const MembershipPage: React.FC = () => {
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
        'membership.features.basicConsultation',
        'membership.features.emailSupport',
        'membership.features.newsletter',
        'membership.features.communityForum'
      ],
      notIncluded: [
        'membership.features.prioritySupport',
        'membership.features.advancedAnalytics',
        'membership.features.customStrategies',
        'membership.features.oneOnOneSessions'
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
        'membership.features.everythingInFree',
        'membership.features.prioritySupport',
        'membership.features.advancedAnalytics',
        'membership.features.customStrategies',
        'membership.features.monthlySession',
        'membership.features.exclusiveWorkshops'
      ],
      notIncluded: [
        'membership.features.unlimitedSessions',
        'membership.features.personalMentor',
        'membership.features.customIntegrations'
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
        'membership.features.everythingInPremium',
        'membership.features.unlimitedSessions',
        'membership.features.personalMentor',
        'membership.features.customIntegrations',
        'membership.features.priorityScheduling',
        'membership.features.exclusiveEvents',
        'membership.features.dedicatedSupport'
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
    <>
      <Navbar />
      <div className="membership-page">
        <div className="membership-page-container">
          <div className="membership-page-header">
            <h1 className="membership-page-title">{t('membership.title')}</h1>
            <p className="membership-page-subtitle">{t('membership.subtitle')}</p>
          </div>

          <div className="plans-container-horizontal">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`plan-card-horizontal ${plan.popular ? 'popular' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
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
                    {plan.features.map((featureKey, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-icon check">✓</span>
                        <span>{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="features-title not-included">{t('membership.notIncluded')}</h4>
                      <ul className="features-list">
                        {plan.notIncluded.map((featureKey, index) => (
                          <li key={index} className="feature-item">
                            <span className="feature-icon times">✗</span>
                            <span>{t(featureKey)}</span>
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

          <div className="membership-page-footer">
            <div className="security-badge">
              <span>🛡️</span>
              <span>{t('membership.securePayment')}</span>
            </div>
            <p className="membership-note">{t('membership.note')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipPage; 