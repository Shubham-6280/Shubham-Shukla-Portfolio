import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Terminal, 
  Database, 
  BarChart2, 
  Table2, 
  BookOpen, 
  Target, 
  Layers, 
  Sparkles,
  FileCode,
  Download
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container */}
        <div className="min-h-full flex items-center justify-center p-3 sm:p-6 my-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 25 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="w-full max-w-4xl bg-[#090d1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative z-10 text-slate-200"
          >
            {/* Modal Top Navigation Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between gap-4 bg-white/[0.02]">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400">
                    {project.platform}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
                  {project.tagline}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Scrollable Content */}
            <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
              
              {/* Actual Project Screenshot or SQL Banner */}
              {project.image ? (
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 group relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[420px] object-contain mx-auto"
                  />
                  <div className="p-2.5 bg-black/60 text-[11px] font-mono text-slate-400 border-t border-white/10 flex items-center justify-between">
                    <span>Verified Project Screenshot</span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      Inspect in GitHub <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-xl bg-emerald-950/20 border border-emerald-800/30 flex flex-col items-center justify-center text-center space-y-3">
                  <Database className="w-10 h-10 text-emerald-400" />
                  <div className="text-base font-bold text-white">Relational Database &amp; SQL Query Suite</div>
                  <p className="text-xs text-slate-400 max-w-md">
                    Analysis executed directly via structured MySQL scripts, data cleaning queries, and commercial aggregations.
                  </p>
                  {project.sqlFileUrl && (
                    <a
                      href={project.sqlFileUrl}
                      download="Zepto_SQL_data_analysis.sql"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" /> Download Zepto_SQL_data_analysis.sql
                    </a>
                  )}
                </div>
              )}

              {/* 1. Analytical Objective & Problem Statement */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider font-mono text-cyan-400">
                  <Target className="w-4 h-4" /> Analytical Objective
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-light p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  {caseStudy.objective}
                </p>
              </div>

              {/* 2. Dataset Description & Tools */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" /> Dataset Description
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {caseStudy.dataset}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Tools &amp; Methods Used
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Analysis Workflow */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider font-mono text-cyan-400">
                  <BookOpen className="w-4 h-4" /> Analysis Workflow
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.toolsWorkflow.map((step) => (
                    <div
                      key={step.step}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5"
                    >
                      <div className="text-xs font-semibold text-cyan-300">
                        {step.step}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Important SQL Queries (Zepto) or Key Features */}
              {caseStudy.sampleQueries ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider font-mono text-emerald-400">
                    <FileCode className="w-4 h-4" /> Authentic Project SQL Queries
                  </div>
                  <div className="space-y-3">
                    {caseStudy.sampleQueries.map((q) => (
                      <div key={q.title} className="rounded-xl overflow-hidden border border-white/10 bg-black/60">
                        <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center justify-between text-xs font-mono">
                          <span className="font-semibold text-emerald-300">{q.title}</span>
                          <span className="text-slate-500 text-[10px]">MySQL Query</span>
                        </div>
                        <pre className="p-4 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed">
                          <code>{q.query}</code>
                        </pre>
                        <div className="px-4 py-2 bg-black/40 border-t border-white/5 text-[11px] text-slate-400">
                          <span className="text-slate-300 font-medium">Analytical Purpose:</span> {q.explanation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider font-mono text-cyan-400">
                    <Sparkles className="w-4 h-4" /> Key Dashboard Features
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {caseStudy.keyFeatures.map((feat) => (
                      <div
                        key={feat}
                        className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-300 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Findings & Observations */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider font-mono text-cyan-400">
                  <CheckCircle2 className="w-4 h-4" /> Findings &amp; Observations Supported By Project
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <ul className="space-y-2">
                    {caseStudy.findings.map((finding, idx) => (
                      <li key={idx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                        <span className="text-cyan-400 font-mono mt-0.5">▸</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-[10px] text-slate-500 font-mono pt-2 border-t border-white/5">
                    * Metrics and observations represent factual project results without simulated inflation.
                  </div>
                </div>
              </div>

              {/* 6. What I Learned */}
              <div className="space-y-2 p-4 rounded-xl bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-800/30">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> What I Learned Through This Project
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {caseStudy.learnings}
                </p>
              </div>

            </div>

            {/* Modal Bottom CTA Bar */}
            <div className="p-5 sm:p-6 border-t border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Verified GitHub Repository: <span className="text-slate-200">Shubham-6280</span>
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 hover:opacity-95 transition-all shadow-md shadow-cyan-500/20"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Source on GitHub</span>
                </a>

                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
