'use client';

export default function TechStack() {
  const technologies = [
    { name: 'Next.js', category: 'Framework', logo: '▲' },
    { name: 'React', category: 'UI Library', logo: '⚛️' },
    { name: 'TypeScript', category: 'Language', logo: 'TS' },
    { name: 'Tailwind CSS', category: 'Styling', logo: '🎨' },
    { name: 'shadcn/ui', category: 'Components', logo: '◆' },
    { name: 'Recharts', category: 'Charting', logo: '📊' },
    { name: 'Web Audio API', category: 'Recording', logo: '🎤' },
    { name: 'TensorFlow.js', category: 'ML (Future)', logo: '🤖' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Built with Modern Tech</h2>
          <p className="text-foreground/60 text-lg">
            Leveraging cutting-edge technologies for the best experience
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="glass rounded-xl p-6 hover:border-white/40 transition group text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition transform origin-center">
                {tech.logo}
              </div>
              <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
              <p className="text-xs text-foreground/50">{tech.category}</p>
            </div>
          ))}
        </div>

        {/* Infrastructure Info */}
        <div className="mt-16 glass rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold mb-8">Infrastructure & Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg text-accent mb-3">Performance</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>• Optimized for speed and efficiency</li>
                <li>• Real-time voice processing</li>
                <li>• Instant analysis results</li>
                <li>• Low latency audio streaming</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-primary mb-3">Security</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>• End-to-end encryption</li>
                <li>• Secure data storage</li>
                <li>• Privacy-first design</li>
                <li>• HIPAA compliant ready</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-secondary mb-3">Accessibility</h4>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>• Multi-language support</li>
                <li>• Mobile-responsive design</li>
                <li>• Voice navigation</li>
                <li>• WCAG compliant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
