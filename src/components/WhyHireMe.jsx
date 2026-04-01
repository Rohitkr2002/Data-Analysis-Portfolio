import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, BarChart3, Database, Sparkles, CheckCircle, MoveRight, Linkedin } from 'lucide-react';

const services = [
  {
    id: 'frontend',
    icon: <Code2 size={32} />,
    title: 'Frontend Development',
    tagline: 'Pixel-perfect UIs that convert',
    color: 'sky',
    gradient: 'from-sky-400 to-blue-600',
    glowColor: 'shadow-sky-500/20',
    description: 'I build modern, responsive web applications using React.js, HTML5/CSS3, and JavaScript. Every component is crafted for performance, accessibility, and stunning visual impact.',
    deliverables: [
      'Responsive React.js Applications',
      'Interactive UI Components',
      'Cross-browser Compatibility',
      'Performance Optimization (30%+ faster)',
      'Mobile-first Design Approach',
      'Clean, maintainable code',
    ],
    tools: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Git'],
  },
  {
    id: 'data',
    icon: <BarChart3 size={32} />,
    title: 'Data Analysis & EDA',
    tagline: 'Raw data → Actionable insights',
    color: 'indigo',
    gradient: 'from-indigo-400 to-purple-600',
    glowColor: 'shadow-indigo-500/20',
    description: 'I clean, explore, and analyze complex datasets using Python (Pandas, NumPy) to uncover patterns, trends, and anomalies that drive better business decisions.',
    deliverables: [
      'Data Cleaning & Preprocessing',
      'Exploratory Data Analysis (EDA)',
      'Statistical Trend Identification',
      'Automated Python Pipelines',
      'Correlation & Pattern Discovery',
      'Insight Reports with Visualizations',
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
  },
  {
    id: 'sql',
    icon: <Database size={32} />,
    title: 'SQL & Database Querying',
    tagline: 'Extract meaning from any database',
    color: 'purple',
    gradient: 'from-purple-400 to-pink-600',
    glowColor: 'shadow-purple-500/20',
    description: 'I write optimized SQL queries — JOINs, CTEs, Window Functions, Subqueries — for real-time analytics on structured data, cutting query times by up to 45%.',
    deliverables: [
      'Complex Multi-table JOINs',
      'Window Functions & CTEs',
      'Query Performance Optimization',
      'Database Schema Design',
      'Data Transformation Pipelines',
      'Retail/HR/Sales Analytics',
    ],
    tools: ['MySQL', 'PostgreSQL', 'DBeaver', 'Power Query', 'BigQuery'],
  },
  {
    id: 'viz',
    icon: <Sparkles size={32} />,
    title: 'Data Visualization',
    tagline: 'Dashboards executives actually use',
    color: 'emerald',
    gradient: 'from-emerald-400 to-teal-600',
    glowColor: 'shadow-emerald-500/20',
    description: 'I build interactive Power BI and Excel dashboards that consolidate multi-source data into clear, decision-ready executive views — no more messy spreadsheet chaos.',
    deliverables: [
      'Power BI Interactive Dashboards',
      'Executive KPI Reports',
      'Advanced Excel + Power Query',
      'Multi-source Data Consolidation',
      'Dynamic Filters & Slicers',
      'Chart.js Web Dashboards',
    ],
    tools: ['Power BI', 'Excel', 'Power Query', 'DAX', 'Tableau', 'Chart.js'],
  },
];

const colorStyles = {
  sky:     { border: 'border-sky-500/30',     bg: 'bg-sky-500/10',     text: 'text-sky-400',     dot: 'bg-sky-400'     },
  indigo:  { border: 'border-indigo-500/30',  bg: 'bg-indigo-500/10',  text: 'text-indigo-400',  dot: 'bg-indigo-400'  },
  purple:  { border: 'border-purple-500/30',  bg: 'bg-purple-500/10',  text: 'text-purple-400',  dot: 'bg-purple-400'  },
  emerald: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', dot: 'bg-emerald-400' },
};

const WhyHireMe = () => {
  const [activeService, setActiveService] = useState('frontend');
  const active = services.find(s => s.id === activeService);
  const cs = colorStyles[active.color];

  return (
    <section className="section-padding relative overflow-hidden bg-dark">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-400 text-xs font-bold uppercase tracking-[0.3em] mb-4"
          >
          </motion.p>
          <h2 className="heading-xl text-white mb-5">
            Why <span className="text-transparent-gradient">Hire Me?</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
            Open to <span className="text-sky-400 font-semibold">Remote Internships</span> and <span className="text-indigo-400 font-semibold">Fresher Jobs</span> — here's exactly what I bring to the table.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((s) => {
            const c = colorStyles[s.color];
            return (
              <motion.button
                key={s.id}
                onClick={() => setActiveService(s.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 border ${
                  activeService === s.id
                    ? `${c.bg} ${c.border} ${c.text} shadow-lg`
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/8'
                }`}
              >
                <span className={activeService === s.id ? c.text : 'text-slate-500'}>
                  {React.cloneElement(s.icon, { size: 20 })}
                </span>
                <span className="inline">{s.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Service Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`glass-card overflow-hidden ${cs.border}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left: Description */}
              <div className={`lg:col-span-2 p-6 sm:p-10 bg-gradient-to-br ${cs.bg} to-transparent border-b lg:border-b-0 lg:border-r border-white/5`}>
                <div className={`inline-flex p-4 rounded-3xl ${cs.bg} border ${cs.border} mb-6 ${cs.text}`}>
                  {active.icon}
                </div>
                <h3 className="text-3xl font-display font-black text-white mb-2">{active.title}</h3>
                <p className={`text-sm font-bold mb-6 ${cs.text}`}>✦ {active.tagline}</p>
                <p className="text-slate-400 leading-relaxed text-sm mb-8">{active.description}</p>

                {/* Tool tags */}
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3">Tools Used</p>
                  <div className="flex flex-wrap gap-2">
                    {active.tools.map(t => (
                      <span key={t} className={`px-3 py-1.5 text-xs font-semibold rounded-xl ${cs.bg} ${cs.border} border ${cs.text}`}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Deliverables */}
              <div className="lg:col-span-3 p-6 sm:p-10 flex flex-col">
                <h4 className="text-xl font-display font-bold text-white mb-8 flex items-center gap-2">
                  <CheckCircle size={20} className="text-emerald-400" />
                  What You'll Get
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  {active.deliverables.map((d, i) => (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3 p-4 bg-white/3 rounded-2xl border border-white/5 hover:border-white/10 transition-all group"
                    >
                      <span className={`h-2 w-2 rounded-full mt-1.5 flex-shrink-0 ${cs.dot} group-hover:scale-150 transition-transform`} />
                      <p className="text-sm text-slate-300 font-medium">{d}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-white/5">
                  <a
                    href="https://www.linkedin.com/in/rohit-kumar-singh-25168a226/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white text-sm hover:scale-105 transition-transform"
                    style={{ background: `linear-gradient(135deg, #38bdf8, #6366f1)` }}
                  >
                    <Linkedin size={17} />
                    Hire Me for This
                    <MoveRight size={15} />
                  </a>
                  <a
                    href="#projects"
                    className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm border ${cs.border} ${cs.text} ${cs.bg} hover:opacity-80 transition-all`}
                  >
                    See Related Projects →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhyHireMe;
