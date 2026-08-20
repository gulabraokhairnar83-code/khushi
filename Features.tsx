'use client';

import { useTranslation } from '@/context/LanguageContext';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      key: 'feature1',
      icon: '🎙️',
      title: t('features.feature1'),
      description: t('features.feature1Desc'),
    },
    {
      key: 'feature2',
      icon: '📊',
      title: t('features.feature2'),
      description: t('features.feature2Desc'),
    },
    {
      key: 'feature3',
      icon: '🔐',
      title: t('features.feature3'),
      description: t('features.feature3Desc'),
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Discover the power of AI-driven voice analysis for health monitoring
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="glass rounded-2xl p-8 hover:border-white/40 transition group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition transform origin-left">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <button className="text-accent hover:text-accent/80 font-semibold text-sm transition">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-dark rounded-xl p-8 border-2 border-accent/30">
            <h4 className="text-lg font-bold text-accent mb-3">Accuracy First</h4>
            <p className="text-foreground/70">
              Our AI model is trained on thousands of voice samples with 95%+ accuracy in detecting early health anomalies.
            </p>
          </div>
          <div className="glass-dark rounded-xl p-8 border-2 border-primary/30">
            <h4 className="text-lg font-bold text-primary mb-3">Real-time Processing</h4>
            <p className="text-foreground/70">
              Get instant analysis results with detailed insights about your voice biomarkers and health trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
