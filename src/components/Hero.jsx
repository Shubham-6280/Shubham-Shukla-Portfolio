import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  FileDown, 
  TrendingUp, 
  Database, 
  BarChart3, 
  Table, 
  Sparkles,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

// Interactive Sample Data for Hero Analytics Preview (Clearly labeled as Sample Data)
const sampleKpis = [
  { label: 'Sample Q3 Revenue', value: '₹18.4L', change: '+14.2%', trend: 'up' },
  { label: 'Sample Profit Margin', value: '23.8%', change: '+3.1%', trend: 'up' },
  { label: 'Sample Order Volume', value: '1,420', change: '+8.6%', trend: 'up' },
  { label: 'Avg Ticket Size', value: '₹1,295', change: '-1.4%', trend: 'neutral' },
];

const sampleCategoryBars = [
  { name: 'Dairy & Breakfast', percent: 84, color: '#06b6d4', revenue: '₹4.8L' },
  { name: 'Snacks & Beverages', percent: 68, color: '#10b981', revenue: '₹3.9L' },
  { name: 'Household & Staples', percent: 52, color: '#6366f1', revenue: '₹3.1L' },
  { name: 'Personal Care', percent: 40, color: '#f59e0b', revenue: '₹2.4L' },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'sql' | 'tools'
  const [selectedMetric, setSelectedMetric] = useState(0);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Ambient background glow & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Strategic Positioning & Headlines */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>{personalInfo.label}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5"
            >
              Turning Data Into <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent glow-cyan">
                Decisions.
              </span>
            </motion.h1>

            {/* Supporting Intro Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              {personalInfo.subheadline}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 hover:opacity-95 transition-all shadow-lg shadow-cyan-500/25 active:scale-98 group"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all active:scale-98"
              >
                <span>Let's Connect</span>
              </a>

              <a
                href={personalInfo.resumePath}
                download="Shubham_Shukla_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-800/40 hover:bg-cyan-900/30 transition-all"
                title="Download verified resume PDF"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Resume PDF</span>
              </a>
            </motion.div>

            {/* Social Links & Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5 pt-6 border-t border-white/10 w-full text-slate-400 text-xs font-mono"
            >
              <span className="text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-rose-400" />
                <span>{personalInfo.email}</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Analytics-Inspired Interactive Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient card aura */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur-xl opacity-75 -z-10" />

            <div className="glass-panel rounded-2xl p-5 border border-white/10 shadow-2xl overflow-hidden relative">
              
              {/* Header Bar with Tab Switches */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 ml-2">
                    analytics_workspace.preview
                  </span>
                </div>

                {/* Sub-Tabs */}
                <div className="flex items-center bg-black/40 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`px-2.5 py-1 text-[10px] font-mono rounded transition-colors ${
                      activeTab === 'dashboard'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => setActiveTab('sql')}
                    className={`px-2.5 py-1 text-[10px] font-mono rounded transition-colors ${
                      activeTab === 'sql'
                        ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    SQL Query
                  </button>
                  <button
                    onClick={() => setActiveTab('tools')}
                    className={`px-2.5 py-1 text-[10px] font-mono rounded transition-colors ${
                      activeTab === 'tools'
                        ? 'bg-indigo-500/20 text-indigo-300 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Stack
                  </button>
                </div>
              </div>

              {/* Sample Data Disclaimer Badge */}
              <div className="flex items-center justify-between text-[10px] font-mono px-3 py-1.5 rounded-md bg-white/[0.02] border border-white/5 text-slate-400 mb-4">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Activity className="w-3 h-3" /> Live Visual Engine
                </span>
                <span className="text-slate-500">
                  Sample Data Demo
                </span>
              </div>

              {/* Tab 1: Live Interactive Mini Sales Dashboard */}
              {activeTab === 'dashboard' && (
                <div className="space-y-4">
                  {/* KPI Cards Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {sampleKpis.map((kpi, idx) => (
                      <div
                        key={kpi.label}
                        onClick={() => setSelectedMetric(idx)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          selectedMetric === idx
                            ? 'bg-cyan-950/30 border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                            : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                        }`}
                      >
                        <div className="text-[10px] text-slate-400 font-medium truncate mb-1">
                          {kpi.label}
                        </div>
                        <div className="flex items-baseline justify-between">
                          <span className="text-lg font-bold font-mono text-white">
                            {kpi.value}
                          </span>
                          <span className={`text-[10px] font-mono flex items-center gap-0.5 ${
                            kpi.trend === 'up' ? 'text-emerald-400' : 'text-slate-400'
                          }`}>
                            <TrendingUp className="w-2.5 h-2.5" />
                            {kpi.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Category Performance Breakdown Bar Visualization */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-3">
                      <span>Category Distribution</span>
                      <span className="text-[10px] font-mono text-slate-500">Sorted by Volume</span>
                    </div>

                    <div className="space-y-2.5">
                      {sampleCategoryBars.map((item) => (
                        <div key={item.name} className="space-y-1">
                          <div className="flex justify-between text-[11px] font-mono">
                            <span className="text-slate-300 truncate max-w-[170px]">{item.name}</span>
                            <span className="text-slate-400">{item.revenue}</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.percent}%` }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sparkline Trend Preview */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400 font-mono">Simulated Monthly Run-Rate</div>
                      <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-3 h-3" /> Consistent Upward Trajectory
                      </div>
                    </div>
                    {/* SVG Sparkline */}
                    <svg className="w-28 h-8 text-cyan-400" viewBox="0 0 100 30" fill="none">
                      <path
                        d="M0 25 Q 15 22, 25 18 T 50 14 T 75 8 T 100 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 25 Q 15 22, 25 18 T 50 14 T 75 8 T 100 4 L 100 30 L 0 30 Z"
                        fill="url(#sparkline-gradient)"
                        opacity="0.2"
                      />
                      <defs>
                        <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              )}

              {/* Tab 2: SQL Query Preview */}
              {activeTab === 'sql' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-slate-300 space-y-2">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">// Zepto SQL Query Snippet</div>
                    <pre className="text-[11px] leading-relaxed overflow-x-auto text-cyan-300">
                      <code>
                        <span className="text-indigo-400">SELECT</span> category,<br />
                        {'  '}<span className="text-emerald-400">SUM</span>(discountedSellingPrice * availableQuantity) <span className="text-indigo-400">AS</span> total_revenue<br />
                        <span className="text-indigo-400">FROM</span> zepto<br />
                        <span className="text-indigo-400">GROUP BY</span> category<br />
                        <span className="text-indigo-400">ORDER BY</span> total_revenue <span className="text-indigo-400">DESC</span>;
                      </code>
                    </pre>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="text-[10px] text-slate-400 font-semibold">Query Execution Snapshot</div>
                    <div className="text-[11px] text-slate-300 grid grid-cols-2 gap-2">
                      <div className="p-2 rounded bg-white/5">
                        <div className="text-[9px] text-slate-500">Aggregated Rows</div>
                        <div className="font-bold text-white">10 Categories</div>
                      </div>
                      <div className="p-2 rounded bg-white/5">
                        <div className="text-[9px] text-slate-500">Query Status</div>
                        <div className="font-bold text-emerald-400">Executed OK (0.014s)</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Core Tool Stack Overview */}
              {activeTab === 'tools' && (
                <div className="grid grid-cols-2 gap-3 py-1">
                  <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-800/30">
                    <BarChart3 className="w-5 h-5 text-cyan-400 mb-2" />
                    <div className="text-xs font-bold text-white">Power BI</div>
                    <div className="text-[10px] text-slate-400 mt-1">Interactive reports, KPI cards, slicers & Power Query</div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/30">
                    <Database className="w-5 h-5 text-emerald-400 mb-2" />
                    <div className="text-xs font-bold text-white">MySQL & SQL</div>
                    <div className="text-[10px] text-slate-400 mt-1">Data cleaning, GROUP BY, aggregations & CASE logic</div>
                  </div>

                  <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-800/30">
                    <Table className="w-5 h-5 text-indigo-400 mb-2" />
                    <div className="text-xs font-bold text-white">Microsoft Excel</div>
                    <div className="text-[10px] text-slate-400 mt-1">Pivot tables, pivot charts, slicers & reporting</div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-800/30">
                    <Terminal className="w-5 h-5 text-amber-400 mb-2" />
                    <div className="text-xs font-bold text-white">Python Core</div>
                    <div className="text-[10px] text-slate-400 mt-1">Scripting foundations & logical problem solving</div>
                  </div>
                </div>
              )}

              {/* Footer Note */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>Verified Candidate Artifacts</span>
                <span className="text-cyan-400">RIMT CSE 2023–2027</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
