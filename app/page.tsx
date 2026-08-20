import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Dashboard from '@/components/Dashboard';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works */}
      <HowItWorks />

      {/* Dashboard */}
      <Dashboard />

      {/* Tech Stack */}
      <TechStack />

      {/* Footer */}
      <Footer />
    </main>
  );
}
