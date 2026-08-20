'use client';

import { useTranslation } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Mic } from 'lucide-react';
import { useEffect, useState } from 'react';

type Language = 'en' | 'hi' | 'mr';

const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिंदी',
  mr: 'मराठी',
};

export default function Navbar() {
  const { language, setLanguage, t } = useTranslation();
  const [currentDate, setCurrentDate] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    updateDate();
    const interval = setInterval(updateDate, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const updateDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  };

  const handleStartRecording = () => {
    const heroSection = document.getElementById('hero');
    heroSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="glass sticky top-0 z-50 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-xl font-bold gradient-text">VoiceHealth</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-foreground/80 hover:text-foreground transition">
              {t('nav.home')}
            </a>
            <a href="#features" className="text-foreground/80 hover:text-foreground transition">
              {t('nav.features')}
            </a>
            <a href="#howitworks" className="text-foreground/80 hover:text-foreground transition">
              {t('nav.howItWorks')}
            </a>
            <a href="#dashboard" className="text-foreground/80 hover:text-foreground transition">
              {t('nav.dashboard')}
            </a>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              onClick={handleStartRecording}
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
            >
              <Mic className="mr-2 h-4 w-4" />
              {t('nav.startRecording')}
            </Button>

            {/* Date Display */}
            {isClient && (
              <div className="hidden sm:block text-sm text-foreground/60 font-mono">
                {currentDate}
              </div>
            )}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-white/20 hover:bg-white/10"
                >
                  {languageNames[language as Language]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-white/20">
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'bg-primary/20' : ''}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('hi')}
                  className={language === 'hi' ? 'bg-primary/20' : ''}
                >
                  हिंदी
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('mr')}
                  className={language === 'mr' ? 'bg-primary/20' : ''}
                >
                  मराठी
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
