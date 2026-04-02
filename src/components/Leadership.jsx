import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Heart, Star, Wallet, BrainCircuit, CheckCircle2, TrendingUp, ShieldCheck, ChevronRight } from 'lucide-react';

const Leadership = () => {
  const qualities = [
    {
      title: 'CSI Treasurer',
      desc: 'Orchestrated structural financial strategy and auditing for CSI (HIT). Managed budgets with 100% accountability.',
      impact: ['Budgeting', 'Auditing'],
      icon: <Wallet className="text-sky-400" size={24} />,
      className: 'md:col-span-1',
      gradient: 'from-sky-500/15 via-indigo-500/5 to-transparent',
      borderColor: 'border-sky-500/20',
      badge: <ShieldCheck size={12} className="text-sky-400" />
    },
    {
      title: 'Data & Logic',
      desc: 'Applying analytical frameworks to solve SQL/Python bottlenecks and derive clear insights.',
      impact: ['Logic', 'Optimizing'],
      icon: <BrainCircuit className="text-emerald-400" size={24} />,
      className: 'md:col-span-1',
      gradient: 'from-emerald-500/15 via-teal-500/5 to-transparent',
      borderColor: 'border-emerald-500/20',
      badge: <TrendingUp size={12} className="text-emerald-400" />
    },
    {
      title: 'Coordinator',
      desc: 'Led diverse teams with a focus on collaborative technical excellence.',
      impact: ['Team Lead'],
      icon: <Users className="text-indigo-400" size={20} />,
      className: 'md:col-span-1',
      gradient: 'from-indigo-500/10 to-transparent',
      borderColor: 'border-indigo-500/10'
    },
    {
      title: 'Fast Learner',
      desc: 'Mastering high-demand stacks (React/Data) in record time frames.',
      impact: ['Agile'],
      icon: <Zap className="text-yellow-400" size={20} />,
      className: 'md:col-span-1',
      gradient: 'from-yellow-500/10 to-transparent',
      borderColor: 'border-yellow-500/10'
    },
    {
      title: 'Narrator',
      desc: 'Transforming complex data into clear, actionable executive stories.',
      impact: ['Insights'],
      icon: <Heart className="text-rose-400" size={20} />,
      className: 'md:col-span-1',
      gradient: 'from-rose-500/10 to-transparent',
      borderColor: 'border-rose-500/10'
    }
  ];

  return (
    <section id="leadership" className="section-padding relative overflow-hidden bg-dark">
      {/* Background Blurs */}
      <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-sky-500/5 blur-[120px] pointer-events-none rounded-full animate-aurora" />
      
      <div className="container mx-auto px-6 xl:px-32 2xl:px-48 relative z-10">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400 text-[9px] font-black uppercase tracking-[0.4em] mb-4"
          >
             <Star size={10} fill="currentColor" /> LEADERSHIP IDENTITY
          </motion.div>
          <h2 className="heading-xl text-white">
            Soft Skills & <span className="text-transparent-gradient">Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {qualities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className={`glass-card group relative overflow-hidden ${item.className} ${item.borderColor} hover:bg-white/[0.05] transition-all duration-300`}
            >
              <div className={`bento-inner h-full flex flex-col p-6 sm:p-7 bg-gradient-to-br ${item.gradient}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  {item.badge && (
                    <div className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 flex items-center gap-1.5 opacity-60">
                       {item.badge}
                       <span className="text-[8px] font-black tracking-widest text-white uppercase">Verified</span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-2 leading-tight">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-xs mb-6 font-medium">
                  {item.desc}
                </p>
                
                {/* Impact Tags */}
                <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/5">
                   {item.impact.map((tag) => (
                     <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 text-[8px] font-bold text-slate-300 uppercase tracking-tighter group-hover:text-sky-400 transition-colors">
                        <CheckCircle2 size={8} /> {tag}
                     </span>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
