import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileDown, 
  CheckCircle2, 
  Binary, 
  Cpu, 
  Sparkles, 
  BarChart3, 
  GraduationCap, 
  Compass, 
  Info,
  ExternalLink,
  Code2
} from 'lucide-react';
import { personalInfo, aboutData } from '../data/portfolioData';

// Map icon string to Lucide component
const iconMap = {
  Binary: Binary,
  Cpu: Cpu,
  CheckCircle2: CheckCircle2,
  Sparkles: Sparkles,
  BarChart3: BarChart3
};

export default function About() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showResumeHelp, setShowResumeHelp] = useState(false);

  const handleResumeDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex flex-col">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" /> Professional Background
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {aboutData.heading}
            </h2>
          </div>
          <div className="heading-line hidden md:block" />
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Story (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {p}
                </p>
              ))}

              {/* Resume CTA & Explanation */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.resumePath}
                    download="Shubham_Shukla_Resume.pdf"
                    onClick={handleResumeDownload}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 hover:opacity-95 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download Official Resume</span>
                  </a>

                  <button
                    onClick={() => setShowResumeHelp(!showResumeHelp)}
                    className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-cyan-300 hover:bg-white/10 transition-colors"
                    title="View resume configuration info"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {downloadSuccess && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs font-mono text-emerald-400 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Resume PDF downloaded!
                  </motion.span>
                )}
              </div>

              {/* Resume config helper note for Shubham */}
              {showResumeHelp && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200/90 font-mono space-y-1"
                >
                  <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" /> Resume File Configuration
                  </div>
                  <div>
                    The download button serves your authentic resume PDF at <code className="text-white bg-black/40 px-1 py-0.5 rounded">public/resume.pdf</code>.
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    Your authentic resume PDF has been verified and placed directly in your project&apos;s <code className="text-slate-300">public/</code> directory.
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Candidate Profile Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-xl border border-white/5">
                <div className="text-[11px] font-mono text-cyan-400 mb-1 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" /> Education
                </div>
                <div className="text-sm font-bold text-white">B.Tech in CSE</div>
                <div className="text-xs text-slate-400">RIMT University (2023–2027)</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-white/5">
                <div className="text-[11px] font-mono text-emerald-400 mb-1 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" /> Core Toolkit
                </div>
                <div className="text-sm font-bold text-white">SQL & Power BI</div>
                <div className="text-xs text-slate-400">Plus Excel & Python basics</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-white/5">
                <div className="text-[11px] font-mono text-indigo-400 mb-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" /> Opportunity Status
                </div>
                <div className="text-sm font-bold text-white">Open to Roles</div>
                <div className="text-xs text-slate-400">Internship & Entry-Level</div>
              </div>
            </div>
          </div>

          {/* 5 Core Qualities Column (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
              // Core Analytical Strengths
            </div>

            {aboutData.qualities.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || BarChart3;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-card p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
