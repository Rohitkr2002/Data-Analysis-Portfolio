import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, GraduationCap, Briefcase, MapPin, Download, Award, Star, CheckCircle, Code2, BarChart3, Database, Globe, X, Eye, ZoomIn } from 'lucide-react';

import googleCert from '../assets/certifications/google_data.png';
import pythonCert from '../assets/certifications/python_data.png';
import sqlCert from '../assets/certifications/sql_data.png';
import reactCert from '../assets/certifications/react_data.png';
import powerbiCert from '../assets/certifications/power_bi_data.png';
import excelCert from '../assets/certifications/excel_data.png';

const SkillsExperience = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const skills = [
    { name: 'React.js / JavaScript', level: 90, color: 'from-sky-400 to-blue-500',    icon: '⚛️' },
    { name: 'Python (Pandas, NumPy)', level: 85, color: 'from-indigo-400 to-indigo-600', icon: '🐍' },
    { name: 'SQL & Databases',         level: 80, color: 'from-purple-400 to-purple-600', icon: '🗄️' },
    { name: 'Power BI / Tableau',      level: 88, color: 'from-emerald-400 to-teal-500',  icon: '📊' },
    { name: 'Excel + Power Query',     level: 95, color: 'from-orange-400 to-amber-500',  icon: '📋' },
    { name: 'HTML5 / CSS3',            level: 95, color: 'from-rose-400 to-red-500',       icon: '🎨' },
  ];

  const certifications = [
    { name: 'Google Data Analytics',          org: 'Google / Coursera',      icon: '🎓', color: 'text-sky-400',     image: googleCert },
    { name: 'Python for Data Science',        org: 'IBM / Coursera',         icon: '🐍', color: 'text-indigo-400',  image: pythonCert },
    { name: 'SQL for Data Analysis',          org: 'Mode Analytics',         icon: '🗄️', color: 'text-purple-400',  image: sqlCert    },
    { name: 'React — The Complete Guide',     org: 'Udemy / Maximilian S.',   icon: '⚛️', color: 'text-emerald-400', image: reactCert   },
    { name: 'Power BI Data Visualization',    org: 'Microsoft / Coursera',   icon: '📊', color: 'text-yellow-400',  image: powerbiCert },
    { name: 'Advanced Excel Analytics',       org: 'PwC / Coursera',         icon: '📋', color: 'text-emerald-400', image: excelCert   },
  ];

  const experience = [
    {
      title: 'Web Development Intern',
      company: 'Rinex Technology',
      period: 'July 2022 – Aug 2022',
      type: 'Internship',
      desc: [
        'Developed 5+ fully responsive web pages from scratch using HTML, CSS, and JavaScript',
        'Improved page load times by 30% through image optimization and code minification',
        'Collaborated with senior developer in an Agile sprint-based workflow',
      ],
      icon: <Briefcase size={20} className="text-sky-400" />,
      iconBg: 'bg-sky-500/10 border-sky-500/20',
      tag: '⭐ Agile Team Player',
    },
    {
      title: 'Self-Directed Learning',
      company: 'Online Platforms (Coursera, Udemy, YouTube)',
      period: '2022 – Present',
      type: 'Continuous Learning',
      desc: [
        'Completed 4+ industry certifications in Data Analytics and Frontend Development',
        'Built 5+ portfolio projects applying real-world datasets and modern React patterns',
        'Active on GitHub — regularly pushing projects and open-source contributions',
      ],
      icon: <Star size={20} className="text-indigo-400" />,
      iconBg: 'bg-indigo-500/10 border-indigo-500/20',
      tag: '🚀 Self-Starter',
    },
    {
      title: 'B.Tech — Electronics & Communication Engineering',
      company: 'Haldia Institute of Technology, W.B.',
      period: '2021 – 2025',
      type: 'Education',
      desc: [
        'Pursuing B.Tech ECE with a CGPA of 7.33 / 10',
        'Core subjects: Signals & Systems, Microprocessors, Digital Logic — built strong problem-solving mindset',
        'Applied analytical thinking from engineering to data science and software development',
      ],
      icon: <GraduationCap size={20} className="text-purple-400" />,
      iconBg: 'bg-purple-500/10 border-purple-500/20',
      tag: '🎓 Engineer Mindset',
    },
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-dark">
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 xl:px-32 2xl:px-48 relative z-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-sky-400 text-xs font-bold uppercase tracking-[0.3em] mb-4"
        >
        </motion.p>
        <h2 className="heading-xl text-white mb-16">
          Technical <span className="text-transparent-gradient">Proficiency</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* ── LEFT: Skills + Certs ── */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <Code2 className="text-sky-400" size={22} /> Core Skill Levels
            </h3>
            <div className="space-y-7 mb-16">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-200 flex items-center gap-2">
                      <span>{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-sm font-black text-sky-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden group">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-[0_0_12px_-2px_rgba(56,189,248,0.6)]`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <Award className="text-indigo-400" size={22} /> Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => setSelectedCert(cert)}
                  className="glass-card p-5 border-white/5 hover:border-sky-500/30 transition-all group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={14} className="text-sky-400" />
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{cert.icon}</span>
                    <div>
                      <p className={`text-sm font-bold ${cert.color} mb-1`}>{cert.name}</p>
                      <p className="text-xs text-slate-500">{cert.org}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 border-sky-500/10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-sky-400" size={20} />
                <h3 className="font-bold text-white">Contact Details</h3>
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <p>📍Bangalore, Karnataka, India</p>
                <a href="mailto:rajputrohitsingh998@gmail.com" className="block hover:text-sky-400 transition-colors">
                  📧 rajputrohitsingh998@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/rohit-kumar-singh-25168a226/" target="_blank" rel="noopener noreferrer" className="block hover:text-sky-400 transition-colors">
                  🔗 LinkedIn Profile
                </a>
                <a href="https://github.com/Rohitkr2002" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                  💻 GitHub: Rohitkr2002
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Experience Timeline ── */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <BarChart3 className="text-indigo-400" size={22} /> Career Journey
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/50 via-indigo-400/30 to-transparent" />

              <div className="space-y-10">
                {experience.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="relative flex gap-4 sm:gap-6 group"
                  >
                    {/* Icon node */}
                    <div className={`relative z-10 flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 border-2 ${item.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 glass-card p-5 sm:p-6 border-white/5 hover:border-white/15 transition-all">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-black text-sky-400 tracking-[0.2em] uppercase">{item.period}</span>
                        <span className="text-xs bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-slate-400">{item.type}</span>
                      </div>
                      <h4 className="text-lg font-display font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-indigo-400 text-sm font-semibold mb-4">{item.company}</p>
                      <ul className="space-y-2">
                        {item.desc.map((point, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                            <CheckCircle size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resume CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mt-12 p-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 rounded-3xl"
            >
              <div className="bg-dark rounded-[22px] p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div>
                  <p className="text-xs text-sky-400 font-bold uppercase tracking-widest mb-2">Download CV</p>
                  <h4 className="text-xl font-display font-black text-white">Full Resume PDF</h4>
                  <p className="text-slate-400 text-sm mt-1">All projects, experience & skills in one place.</p>
                </div>
                <a href="#" className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-white text-dark font-black rounded-2xl hover:scale-105 transition-transform shadow-lg">
                  <Download size={18} /> GET PDF
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Certification Modal ── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 bg-dark/90 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full glass-card border-white/10 p-2 sm:p-4 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-dark/50 hover:bg-red-500/20 text-white rounded-full transition-colors border border-white/10"
              >
                <X size={20} />
              </button>

              {/* Certificate Header */}
              <div className="p-4 border-b border-white/5 mb-4">
                <h4 className="text-xl font-display font-bold text-white">{selectedCert.name}</h4>
                <p className="text-slate-400 text-sm">{selectedCert.org}</p>
              </div>

              {/* Image Container */}
              <div className="relative group rounded-xl overflow-hidden bg-white/5">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
              </div>

              {/* Footer / Tip */}
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-500 italic">Click outside or press X to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SkillsExperience;
