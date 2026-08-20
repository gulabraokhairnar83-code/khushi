'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/context/LanguageContext';

interface VoiceRecorderProps {
  onAnalyze: (result: AnalysisResult) => void;
}

export interface AnalysisResult {
  score: number;
  riskLevel: 'low' | 'medium' | 'high';
  timestamp: string;
  duration: number;
}

export default function VoiceRecorder({ onAnalyze }: VoiceRecorderProps) {
  const { t } = useTranslation();
  const [isRecording, setIsRecording] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRecording) {
      timerInterval.current = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
      }
    }
    return () => {
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
      }
    };
  }, [isRecording]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      chunks.current = [];

      mediaRecorder.current.ondataavailable = (e) => {
        chunks.current.push(e.data);
      };

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: 'audio/wav' });
        handleAudioData(blob);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.current.start();
      setIsRecording(true);
      setDuration(0);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Unable to access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  };

  const handleAudioData = async (blob: Blob) => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis - in production, send to backend
    setTimeout(() => {
      const mockResult: AnalysisResult = {
        score: Math.floor(Math.random() * 40 + 60), // 60-100
        riskLevel: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as 'low' | 'medium' | 'high',
        timestamp: new Date().toISOString(),
        duration,
      };
      
      onAnalyze(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Recording Visualization */}
      <div className="relative">
        <div className="w-48 h-48 rounded-full border-2 border-primary/30 flex items-center justify-center animate-glow-pulse">
          <div className="w-40 h-40 rounded-full border-2 border-primary/50 flex items-center justify-center">
            <div className="text-center">
              {isRecording && (
                <>
                  <div className="absolute inset-0 rounded-full animate-pulse" style={{
                    background: 'radial-gradient(circle, rgba(101, 163, 255, 0.1) 0%, transparent 70%)',
                  }} />
                  <div className="text-2xl font-mono font-bold text-primary">
                    {formatTime(duration)}
                  </div>
                </>
              )}
              {!isRecording && !isAnalyzing && (
                <div className="text-sm text-foreground/60">{t('recorder.ready')}</div>
              )}
              {isAnalyzing && (
                <div className="text-sm text-primary animate-pulse">{t('results.title')}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        {!isRecording ? (
          <Button
            onClick={startRecording}
            disabled={isAnalyzing}
            className="btn-neon"
          >
            {t('recorder.ready')}
          </Button>
        ) : (
          <Button
            onClick={stopRecording}
            className="btn-neon bg-destructive hover:bg-destructive/90"
          >
            {t('recorder.stop')}
          </Button>
        )}
        
        {duration > 0 && !isRecording && !isAnalyzing && (
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10"
            disabled
          >
            {t('recorder.analyze')}
          </Button>
        )}
      </div>

      {/* Duration info */}
      {duration > 0 && !isRecording && (
        <p className="text-sm text-foreground/60">
          Duration: {formatTime(duration)}
        </p>
      )}
    </div>
  );
}
