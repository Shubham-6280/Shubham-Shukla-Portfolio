import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  FileDown 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/shubham-photo.jpg';

export default function Hero() {
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

          {/* Right Column: Professional Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            {/* Ambient card aura */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-indigo-500/20 blur-2xl opacity-75 -z-10" />

            {/* Clean rounded-rectangle frame with subtle border and soft shadow */}
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px] rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 glass-panel border border-white/10 shadow-2xl shadow-cyan-950/40">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/5 bg-slate-950">
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-auto block rounded-xl sm:rounded-2xl object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
