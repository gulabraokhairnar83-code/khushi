'use client';

import { useTranslation } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { AnalysisResult } from './VoiceRecorder';
import { useEffect, useState } from 'react';

interface AIResultsProps {
  result: AnalysisResult;
  onReset: () => void;
}

export default function AIResults({ result, onReset }: AIResultsProps) {
  const { t } = useTranslation();
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    // Animate score from 0 to result.score
    let current = 0;
    const increment = result.score / 30;
    const timer = setInterval(() => {
      current += increment;
      if (current >= result.score) {
        setDisplayScore(result.score);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [result.score]);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'text-accent';
      case 'medium':
        return 'text-yellow-400';
      case 'high':
        return 'text-red-400';
      default:
        return 'text-foreground';
    }
  };

  const getRiskBg = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'bg-accent/10 border-accent/30';
      case 'medium':
        return 'bg-yellow-500/10 border-yellow-500/30';
      case 'high':
        return 'bg-red-500/10 border-red-500/30';
      default:
        return 'bg-primary/10 border-primary/30';
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-12 px-4">
      <div className="relative max-w-4xl w-full z-10">
        {/* Back button */}
        <button
          onClick={onReset}
          className="mb-8 text-foreground/60 hover:text-foreground transition"
        >
          ← {t('hero.title')}
        </button>

        <div className="space-y-8">
          {/* Main Results Card */}
          <div className="glass rounded-2xl p-8 sm:p-12 space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              {t('results.title')}
            </h2>

            {/* Score Circle */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 200 200"
                >
                  {/* Background circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="rgb(255, 255, 255, 0.1)"
                    strokeWidth="8"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="url(#scoreGradient)"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 90}`}
                    strokeDashoffset={`${2 * Math.PI * 90 * (1 - displayScore / 100)}`}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.03s ease-out' }}
                  />
                  <defs>
                    <linearGradient
                      id="scoreGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="rgb(101, 163, 255)" />
                      <stop offset="100%" stopColor="rgb(168, 85, 247)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold text-primary">{displayScore}</div>
                  <div className="text-sm text-foreground/60 mt-1">{t('results.score')}</div>
                </div>
              </div>
            </div>

            {/* Risk Level Badge */}
            <div className="flex justify-center">
              <div className={`glass-dark rounded-lg px-6 py-4 border-2 ${getRiskBg(result.riskLevel)}`}>
                <div className={`text-sm font-semibold uppercase tracking-wide ${getRiskColor(result.riskLevel)}`}>
                  {t('results.risk')}: {result.riskLevel.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Recording Info */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div>
                <p className="text-sm text-foreground/60 mb-1">Duration</p>
                <p className="text-lg font-semibold text-foreground">
                  {Math.floor(result.duration / 60)}:{String(result.duration % 60).padStart(2, '0')}
                </p>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-1">Timestamp</p>
                <p className="text-lg font-semibold text-foreground">
                  {new Date(result.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="glass rounded-2xl p-8 space-y-4">
            <h3 className="text-xl font-bold">{t('results.recommendations')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">▸</span>
                <span className="text-foreground/80">{t('results.consult')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">▸</span>
                <span className="text-foreground/80">Maintain consistent sleep schedule and exercise regularly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">▸</span>
                <span className="text-foreground/80">Monitor voice changes and track patterns over time</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={onReset}
              className="btn-neon flex-1"
            >
              Record Again
            </Button>
            <Button
              variant="outline"
              className="border-accent/30 hover:bg-accent/10 flex-1"
            >
              View History
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
