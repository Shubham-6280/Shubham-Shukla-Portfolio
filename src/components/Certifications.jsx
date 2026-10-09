import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  BookOpen 
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" /> Learning Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Certifications &amp; Courses
            </h2>
          </div>
          <div className="heading-line hidden md:block" />
        </div>

        <p className="text-slate-400 text-sm max-w-2xl mb-14 font-light">
          Practical job simulations and credentials verified from authentic candidate records, focusing on data analytics and enterprise problem solving.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all relative flex flex-col justify-between group"
            >
              <div>
                {/* Issuer Badge & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 font-medium">
                    {cert.badge}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Completion
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuing Organization */}
                <div className="text-xs font-mono text-slate-400 mt-1 mb-4 flex items-center gap-1.5">
                  <span className="text-slate-500">Issued by:</span>
                  <span className="text-slate-200 font-semibold">{cert.organization}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {cert.description}
                </p>

                {/* Skills Learned Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Verified Simulation
                </span>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    View Credential <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-slate-500">
                    Listed in Candidate Resume
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
