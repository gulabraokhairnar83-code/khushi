'use client';

import { useTranslation } from '@/context/LanguageContext';
import VoiceRecorder, { AnalysisResult } from './VoiceRecorder';
import { useState } from 'react';
import AIResults from './AIResults';

export default function Hero() {
  const { t } = useTranslation();
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleAnalysis = (result: AnalysisResult) => {
    setAnalysisResult(result);
  };

  if (analysisResult) {
    return <AIResults result={analysisResult} onReset={() => setAnalysisResult(null)} />;
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <div className="mb-8 space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            <span className="gradient-text">{t('hero.title')}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 text-balance max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Voice Recorder */}
        <div className="mt-16 glass rounded-2xl p-8 sm:p-12">
          <VoiceRecorder onAnalyze={handleAnalysis} />
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="glass-dark rounded-lg p-6">
            <div className="text-3xl font-bold text-accent mb-2">AI</div>
            <p className="text-sm text-foreground/70">Advanced Machine Learning</p>
          </div>
          <div className="glass-dark rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">🔒</div>
            <p className="text-sm text-foreground/70">Secure & Private</p>
          </div>
          <div className="glass-dark rounded-lg p-6">
            <div className="text-3xl font-bold text-secondary mb-2">⚡</div>
            <p className="text-sm text-foreground/70">Instant Results</p>
          </div>
        </div>
      </div>
    </section>
  );
}
