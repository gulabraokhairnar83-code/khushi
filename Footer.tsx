'use client';

import { useTranslation } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-transparent via-black/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="py-20">
          <div className="glass rounded-2xl p-12 sm:p-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Ready to Monitor Your Health?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-balance">
              Join thousands of users who trust VoiceHealth for early disease detection and health tracking.
            </p>
            <Button className="btn-neon">
              Start Recording Now
            </Button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-12 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold gradient-text mb-4">VoiceHealth</h3>
              <p className="text-sm text-foreground/60">
                AI-powered voice analysis for early health detection and disease tracking.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#features" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#howitworks" className="hover:text-foreground transition">How It Works</a></li>
                <li><a href="#dashboard" className="hover:text-foreground transition">Dashboard</a></li>
                <li><a href="#" className="hover:text-foreground transition">Pricing</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition">Careers</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition">{t('footer.privacy')}</a></li>
                <li><a href="#" className="hover:text-foreground transition">{t('footer.terms')}</a></li>
                <li><a href="#" className="hover:text-foreground transition">Cookies</a></li>
                <li><a href="#" className="hover:text-foreground transition">Security</a></li>
              </ul>
            </div>
          </div>

          {/* Social & Bottom */}
          <div className="py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60 text-center sm:text-left">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-foreground/60 hover:text-foreground transition">Twitter</a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition">GitHub</a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
