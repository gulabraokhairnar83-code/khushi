'use client';

import { useTranslation } from '@/context/LanguageContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { date: '01/04', score: 72, risk: 'medium' },
  { date: '02/04', score: 75, risk: 'medium' },
  { date: '03/04', score: 78, risk: 'low' },
  { date: '04/04', score: 81, risk: 'low' },
  { date: '05/04', score: 79, risk: 'low' },
  { date: '06/04', score: 84, risk: 'low' },
  { date: '07/04', score: 82, risk: 'low' },
];

const mockRecordings = [
  { id: 1, date: '07/04/2025', time: '14:30', score: 82, duration: '45s' },
  { id: 2, date: '06/04/2025', time: '09:15', score: 84, duration: '40s' },
  { id: 3, date: '05/04/2025', time: '16:45', score: 79, duration: '38s' },
  { id: 4, date: '04/04/2025', time: '11:20', score: 81, duration: '42s' },
  { id: 5, date: '03/04/2025', time: '13:10', score: 78, duration: '39s' },
];

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t('dashboard.title')}</h2>
          <p className="text-foreground/60 text-lg">Track your health trends and improve over time</p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">{t('dashboard.trends')}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                <XAxis
                  dataKey="date"
                  stroke="rgba(255, 255, 255, 0.5)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  stroke="rgba(255, 255, 255, 0.5)"
                  style={{ fontSize: '12px' }}
                  domain={[60, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(18, 18, 24, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: 'rgba(255, 255, 255, 0.8)' }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="url(#colorScore)"
                  strokeWidth={3}
                  dot={{ fill: 'rgb(101, 163, 255)', r: 5 }}
                  activeDot={{ r: 7 }}
                />
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="100%" y2="0">
                    <stop offset="0%" stopColor="rgb(101, 163, 255)" />
                    <stop offset="100%" stopColor="rgb(168, 85, 247)" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Card */}
          <div className="glass rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6">Statistics</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Average Score</p>
                  <p className="text-3xl font-bold text-accent">80.3</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Trend</p>
                  <p className="text-2xl font-bold text-accent">↗ +8.3%</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Recordings</p>
                  <p className="text-2xl font-bold text-primary">24</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Recordings */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-6">{t('dashboard.recentRecordings')}</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/60">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/60">Time</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/60">Score</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/60">Duration</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/60">Action</th>
                </tr>
              </thead>
              <tbody>
                {mockRecordings.map((recording) => (
                  <tr
                    key={recording.id}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="py-4 px-4 text-sm text-foreground">{recording.date}</td>
                    <td className="py-4 px-4 text-sm text-foreground">{recording.time}</td>
                    <td className="py-4 px-4">
                      <div className="inline-flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">{recording.score}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-foreground">{recording.duration}</td>
                    <td className="py-4 px-4">
                      <button className="text-accent hover:text-accent/80 text-sm font-semibold transition">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
