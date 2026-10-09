import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  BarChart2, 
  Database, 
  Table2, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Code2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';

const iconMap = {
  'Power BI': BarChart2,
  'MySQL': Database,
  'Microsoft Excel': Table2
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 -right-60 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-60 w-96 h-96 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex flex-col">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <FolderGit2 className="w-3.5 h-3.5" /> Curated Project Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Case Studies
            </h2>
          </div>
          <div className="heading-line hidden md:block" />
        </div>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-16 font-light">
          Deep-dive data analysis projects exploring relational SQL databases, Power BI reporting dashboards, and operational Excel workbooks. Built with genuine datasets and reproducible code.
        </p>

        {/* Project Cards Gallery */}
        <div className="space-y-16">
          {projects.map((project, idx) => {
            const Icon = iconMap[project.platform] || Database;
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Visual Preview (6 Cols) */}
                  <div className={`lg:col-span-6 relative rounded-xl overflow-hidden border border-white/10 bg-black/40 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    {project.image ? (
                      <div className="relative group/img overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 sm:h-80 object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />
                        
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                          <span className="flex items-center gap-1.5 text-cyan-300">
                            <Sparkles className="w-3 h-3" /> Click to view case study
                          </span>
                          <span className="text-slate-400">Verified Dashboard</span>
                        </div>
                      </div>
                    ) : (
                      /* Zepto SQL Visual Preview */
                      <div 
                        className="h-64 sm:h-80 p-5 bg-[#070b14] flex flex-col justify-between font-mono text-xs cursor-pointer group/sql"
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 text-[11px]">
                          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                            <Code2 className="w-3.5 h-3.5" /> Zepto_SQL_data_analysis.sql
                          </span>
                          <span>MySQL 8.0</span>
                        </div>

                        <div className="text-slate-300 space-y-1.5 my-auto text-[11px] leading-relaxed">
                          <div><span className="text-indigo-400">SELECT</span> category,</div>
                          <div className="pl-4">
                            <span className="text-emerald-400">SUM</span>(discountedSellingPrice * availableQuantity) <span className="text-indigo-400">AS</span> total_revenue
                          </div>
                          <div><span className="text-indigo-400">FROM</span> zepto</div>
                          <div><span className="text-indigo-400">GROUP BY</span> category</div>
                          <div><span className="text-indigo-400">ORDER BY</span> total_revenue <span className="text-indigo-400">DESC</span>;</div>
                        </div>

                        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                          <span className="text-cyan-400">8 Analytical Queries</span>
                          <span className="text-slate-500">Click to expand details</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Narrative & Details (6 Cols) */}
                  <div className={`lg:col-span-6 space-y-4 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    
                    {/* Category & Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 font-semibold">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-400 flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-cyan-400" />
                        {project.platform}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tools badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 hover:opacity-95 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
                      >
                        <span>View Project Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub Repository</span>
                      </a>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal for detailed deep dive */}
        <CaseStudyModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
