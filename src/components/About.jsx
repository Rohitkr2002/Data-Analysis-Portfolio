import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BarChart3, Database, Globe, Cpu, Sparkles, MapPin, GraduationCap, ChevronRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About = () => {
  const capabilities = [
    {
      title: 'Frontend Architecture',
      desc: 'Building high-performance UIs using React.js & modern CSS. Focusing on pixel-perfection and interactive user journeys.',
      icon: <Code2 className="text-sky-400" size={20} />,
      tags: ['React', 'Tailwind', 'Framer Motion'],
      gradient: 'from-sky-500/10 to-indigo-500/10',
    },
    {
      title: 'Data Intelligence',
      desc: 'Expertise in Python, SQL, and EDA. Transforming raw datasets into structured, actionable business intelligence.',
      icon: <Database className="text-indigo-400" size={20} />,
      tags: ['Python', 'SQL', 'Pandas'],
      gradient: 'from-indigo-500/10 to-purple-500/10',
    },
    {
      title: 'Decision Analytics',
      desc: 'Creating visual dashboards in Power BI and Tableau for executive-level data storytelling and trend discovery.',
      icon: <BarChart3 className="text-purple-400" size={20} />,
      tags: ['Power BI', 'Tableau', 'Excel'],
      gradient: 'from-purple-500/10 to-pink-500/10',
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-dark">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sky-500/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-500/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 xl:px-32 2xl:px-48 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Identity & Mission (4 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
               <h2 className="heading-xl text-white mb-6">
                 About <span className="text-transparent-gradient">Me</span>
               </h2>
            </div>

            {/* Profile Large Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 border-white/5 bg-white/[0.02]"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <img src={profileImg} alt="Rohit" className="relative h-20 w-20 rounded-xl object-cover border border-white/20" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-black text-white leading-none">Rohit Kumar Singh</h3>
                  <p className="text-sky-400 text-sm font-semibold mt-2">Frontend Dev // Data Analyst</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                   <MapPin size={16} className="text-slate-500" />
                   <span>Bangalore, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                   <GraduationCap size={16} className="text-slate-500" />
                   <span>Haldia Institute of Tech (B.Tech '25)</span>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed font-medium italic border-l-2 border-sky-500/30 pl-4 py-1">
                "I am on a mission to build software that doesn't just work, but speaks through data and beautiful interfaces."
              </p>
            </motion.div>

            {/* Mission Text Block */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-4"
            >
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Capabilities & Skills (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Split Header for Capabilities */}
            <div className="flex items-center justify-between mb-2">
               <h4 className="text-xs font-black tracking-[0.3em] text-slate-500 uppercase">Core Capabilities</h4>
               <div className="h-px flex-1 mx-6 bg-white/5" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
              {capabilities.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card hover:bg-white/[0.04] group border-white/5 overflow-hidden"
                >
                  <div className={`bento-inner flex flex-col sm:flex-row sm:items-center gap-6 bg-gradient-to-br ${item.gradient} p-6 sm:p-8`}>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300 shrink-0 h-fit">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-display font-bold text-white mb-2">{item.title}</h5>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-lg">
                          {item.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 group-hover:text-sky-400 group-hover:border-sky-500/30 transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-sky-400 hidden lg:block" size={20} />
                   </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
