'use client';

import { useTranslation } from '@/context/LanguageContext';

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      title: t('howItWorks.step1'),
      description: t('howItWorks.step1Desc'),
      icon: '🎤',
    },
    {
      number: '02',
      title: t('howItWorks.step2'),
      description: t('howItWorks.step2Desc'),
      icon: '⚙️',
    },
    {
      number: '03',
      title: t('howItWorks.step3'),
      description: t('howItWorks.step3Desc'),
      icon: '💡',
    },
  ];

  return (
    <section id="howitworks" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t('howItWorks.title')}</h2>
          <p className="text-foreground/60 text-lg">
            Simple steps to monitor your health with voice analysis
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden md:block absolute top-24 left-1/2 w-0.5 h-80 bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50 transform -translate-x-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector circle */}
                <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border-2 border-primary/50 items-center justify-center z-10">
                  <span className="text-xs font-bold text-foreground">{step.number}</span>
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-8 mt-8 hover:border-white/40 transition h-full">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">{step.description}</p>
                  <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                    <span>Step {step.number}</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Details */}
        <div className="mt-20 glass rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold mb-8">Behind the Technology</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-accent">Voice Analysis</h4>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Analyzes pitch, frequency, and tone variations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Detects subtle changes in voice patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Uses advanced neural networks for accuracy</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-primary">Health Insights</h4>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Generates personalized health scores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Provides actionable recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Tracks trends over extended periods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
