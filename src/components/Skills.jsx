import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  BarChart2, 
  Table2, 
  Code, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Filter
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

// Theme styling lookup
const themeConfig = {
  cyan: {
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    bgBadge: 'bg-cyan-950/40 text-cyan-300 border-cyan-800/40',
    accentText: 'text-cyan-400',
    dotBg: 'bg-cyan-400',
    icon: Database
  },
  emerald: {
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    bgBadge: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40',
    accentText: 'text-emerald-400',
    dotBg: 'bg-emerald-400',
    icon: BarChart2
  },
  indigo: {
    border: 'border-indigo-500/20 hover:border-indigo-500/50',
    bgBadge: 'bg-indigo-950/40 text-indigo-300 border-indigo-800/40',
    accentText: 'text-indigo-400',
    dotBg: 'bg-indigo-400',
    icon: Table2
  },
  amber: {
    border: 'border-amber-500/20 hover:border-amber-500/50',
    bgBadge: 'bg-amber-950/40 text-amber-300 border-amber-800/40',
    accentText: 'text-amber-400',
    dotBg: 'bg-amber-400',
    icon: Code
  }
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories = activeFilter === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.category.toLowerCase().includes(activeFilter));

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#04060c]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" /> Technical Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Skills &amp; Analytical Tools
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-3 font-light">
              Demonstrated through hands-on project work. Transparently classified without arbitrary percentages or fabricated expertise.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-black/40 p-1.5 rounded-xl border border-white/5">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'sql', label: 'SQL & DB' },
              { id: 'visualization', label: 'Power BI' },
              { id: 'spreadsheets', label: 'Excel' },
              { id: 'programming', label: 'Python' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                  activeFilter === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group, idx) => {
            const theme = themeConfig[group.theme] || themeConfig.cyan;
            const Icon = theme.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card p-6 sm:p-7 rounded-2xl border ${theme.border} relative group`}
              >
                {/* Card Title & Icon */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 ${theme.accentText}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {group.tagline}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${theme.bgBadge}`}>
                    {group.skills.length} competencies
                  </span>
                </div>

                {/* Competencies Listing */}
                <div className="space-y-3 mt-6">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors flex items-start justify-between gap-3"
                    >
                      <div className="space-y-0.5">
                        <div className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${theme.dotBg}`} />
                          {skill.name}
                        </div>
                        <div className="text-xs text-slate-400 font-light pl-3.5">
                          {skill.note}
                        </div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                    </div>
                  ))}
                </div>

                {/* Honest Transparency Note footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Authentic Project Experience</span>
                  <span className="text-slate-400">Zero Fabricated DAX / ML</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
