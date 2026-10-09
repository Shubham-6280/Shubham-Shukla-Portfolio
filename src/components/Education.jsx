import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Database, 
  Binary, 
  Compass, 
  BookOpen 
} from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#04060d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" /> Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Education &amp; Foundations
            </h2>
          </div>
          <div className="heading-line hidden md:block" />
        </div>

        <p className="text-slate-400 text-sm max-w-2xl mb-14 font-light">
          Rooted in Computer Science foundations, database architecture, and algorithmic problem-solving to build structured analytical thinking.
        </p>

        {/* Timeline / Card layout */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden"
          >
            {/* Ambient accent stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 font-semibold">
                    Undergraduate Degree
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-cyan-400" /> {education.period}
                  </span>
                  {education.cgpa && (
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
                      CGPA: {education.cgpa}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {education.degree}
                </h3>
                
                <div className="text-sm font-semibold text-cyan-400 font-mono mt-1 flex items-center gap-2">
                  <span>{education.institution}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 font-normal flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" /> {education.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed font-light mb-8">
              {education.description}
            </p>

            {/* Relevant Coursework & Focus Areas */}
            <div className="space-y-3 pt-6 border-t border-white/5">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Relevant Coursework &amp; Academic Focus
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {education.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidate Honesty Footer */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Expected Graduation: 2027</span>
              <span className="text-slate-400">Pursuing Data Analyst Roles</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
