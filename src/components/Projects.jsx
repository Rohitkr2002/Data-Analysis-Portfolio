import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, BarChart3, Database, Code2, Sparkles, MoveRight, Layers, TrendingUp, Award, Eye } from 'lucide-react';

const Projects = () => {
  const featured = {
    title: 'Naukri Job AI Agent',
    type: 'AI & Full Automation',
    desc: 'Built an end-to-end intelligent job search automation system that scrapes Naukri.com for 0–1 yr positions, scores them using Gemini AI against my resume, and dispatches a curated daily email report with top matches and cold email drafts — completely hands-free.',
    tools: ['Python', 'BeautifulSoup', 'Gemini AI', 'SMTP', 'Pandas', 'JSON'],
    metrics: [
      { label: 'Time Saved / Week', value: '10+ hrs' },
      { label: 'Jobs Scanned Daily', value: '200+' },
      { label: 'Match Accuracy', value: '85%' },
    ],
    icon: <Sparkles size={28} className="text-indigo-300" />,
    github: 'https://github.com/Rohitkr2002',
    gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    border: 'border-indigo-500/30',
  };

  const projects = [
    {
      title: 'Sales Data Analysis & EDA',
      type: 'Data Analysis',
      desc: 'Cleaned and analyzed 50,000+ rows of retail sales data using Python. Applied advanced EDA to uncover seasonal trends, top-performing SKUs, and customer churn patterns.',
      tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      insights: '+30% insight speed via automated cleaning pipelines.',
      icon: <BarChart3 size={22} className="text-sky-400" />,
      color: 'sky',
      github: 'https://github.com/Rohitkr2002',
    },
    {
      title: 'HR Executive Power BI Dashboard',
      type: 'Visualization',
      desc: 'Designed an interactive Power BI dashboard consolidating KPIs across revenue, sales, and employee productivity from 10+ disparate Excel sources.',
      tools: ['Power BI', 'Excel', 'Power Query', 'DAX'],
      insights: 'Consolidated 10+ messy sheets into 3 executive views.',
      icon: <Layers size={22} className="text-purple-400" />,
      color: 'purple',
      github: 'https://github.com/Rohitkr2002',
    },
    {
      title: 'SQL Retail Analytics Engine',
      type: 'Backend & Data',
      desc: 'Wrote complex SQL queries using JOINs, CTEs, Window Functions, and index optimization to process real-time retail transaction data with millisecond latency.',
      tools: ['MySQL', 'PostgreSQL', 'DBeaver', 'Window Functions'],
      insights: 'Query runtime cut by 45% using smart indexing strategy.',
      icon: <Database size={22} className="text-emerald-400" />,
      color: 'emerald',
      github: 'https://github.com/Rohitkr2002',
    },
    {
      title: 'Blood Bank Management System',
      type: 'Full Stack Web App',
      desc: 'A CRUD-based web application with real-time blood group inventory search, interactive Chart.js dashboards, dark mode, and a glassmorphism UI built from scratch.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'LocalStorage'],
      insights: 'Deployed on GitHub Pages — live recruiter-ready demo.',
      icon: <Code2 size={22} className="text-red-400" />,
      color: 'red',
      github: 'https://github.com/Rohitkr2002',
    },
  ];

  const colorMap = {
    sky:     { bg: 'bg-sky-500/10',     border: 'border-sky-500/20',     text: 'text-sky-400'     },
    purple:  { bg: 'bg-purple-500/10',  border: 'border-purple-500/20',  text: 'text-purple-400'  },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
    red:     { bg: 'bg-red-500/10',     border: 'border-red-500/20',     text: 'text-red-400'     },
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-dark">
      {/* BG glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-sky-400 text-xs font-bold uppercase tracking-[0.3em] mb-4"
            >
            </motion.p>
            <h2 className="heading-xl text-white">
              Master <span className="text-transparent-gradient">Projects</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-slate-400 max-w-sm text-sm leading-relaxed"
          >
            Real-world solutions at the intersection of <span className="text-sky-400 font-semibold">Frontend Engineering</span> and <span className="text-indigo-400 font-semibold">Data Analytics</span>.
          </motion.p>
        </div>

        {/* ── FEATURED PROJECT ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`glass-card mb-8 overflow-hidden ${featured.border}`}
        >
          <div className={`bg-gradient-to-br ${featured.gradient} p-6 sm:p-10 md:p-12`}>
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">{featured.icon}</div>
                  <div>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] block">{featured.type}</span>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-[0.2em]">★ FEATURED PROJECT</span>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-4">{featured.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-8 text-base max-w-2xl">{featured.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tools.map(t => (
                    <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold text-slate-300">{t}</span>
                  ))}
                </div>
                <a href={featured.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-bold hover:bg-indigo-500/30 transition-all group"
                >
                  <Github size={18} /> View Code <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:min-w-[200px]">
                {featured.metrics.map((m) => (
                  <div key={m.label} className="glass-card p-5 text-center border-white/5">
                    <p className="text-3xl font-black text-white mb-1">{m.value}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── PROJECT GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((p, i) => {
            const c = colorMap[p.color];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card group overflow-hidden ${c.border}`}
              >
                <div className={`bento-inner bg-gradient-to-br ${c.bg}/20 to-transparent`}>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 ${c.bg} ${c.border} border rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {p.icon}
                    </div>
                    <div className="flex gap-3">
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        className="p-2 text-slate-500 hover:text-white transition-colors hover:bg-white/5 rounded-lg">
                        <Github size={18} />
                      </a>
                      <a href="#" className="p-2 text-slate-500 hover:text-white transition-colors hover:bg-white/5 rounded-lg">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 ${c.text}`}>{p.type}</p>
                  <h3 className={`text-xl font-display font-bold text-white mb-3 group-hover:${c.text} transition-colors`}>{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tools.map(t => (
                      <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-400">{t}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-start gap-2">
                      <TrendingUp size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-slate-400"><span className="text-emerald-400 font-bold">Result: </span>{p.insights}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 glass-card border-sky-500/10"
        >
          <div>
            <p className="font-display font-black text-white text-xl">More projects on GitHub →</p>
            <p className="text-slate-400 text-sm mt-1">Open source contributions, mini-projects, and experiments.</p>
          </div>
          <a
            href="https://github.com/Rohitkr2002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-dark font-black hover:scale-105 transition-transform shadow-lg"
          >
            <Github size={20} /> GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
