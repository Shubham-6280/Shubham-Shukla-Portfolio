import React from 'react';
import { ArrowUp, Database, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#03050a] py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Database className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-bold text-white tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400">{personalInfo.title}</span>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-rose-400" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed for Data Analytics &amp; Business Intelligence</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
