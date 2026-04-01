import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Target, Clock, Users, TrendingUp, Award } from 'lucide-react';

const AnimCounter = ({ end, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const stats = [
  { label: 'Projects Completed', value: 5,  suffix: '+',  icon: <Target  size={24} className="text-sky-400"     />, color: 'sky'     },
  { label: 'Hours of Learning',  value: 500, suffix: '+',  icon: <Clock   size={24} className="text-indigo-400"  />, color: 'indigo'  },
  { label: 'Certifications',     value: 4,  suffix: '',   icon: <Award   size={24} className="text-purple-400"  />, color: 'purple'  },
  { label: 'Job Applications',   value: 50, suffix: '+',  icon: <Users   size={24} className="text-emerald-400" />, color: 'emerald' },
  { label: 'Data Rows Analyzed', value: 50, suffix: 'K+', icon: <TrendingUp size={24} className="text-orange-400" />, color: 'orange' },
  { label: 'GitHub Commits',     value: 80, suffix: '+',  icon: <Zap     size={24} className="text-rose-400"    />, color: 'rose'    },
];

const colorMap = {
  sky:     'bg-sky-500/10 border-sky-500/20 text-sky-400',
  indigo:  'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
  purple:  'bg-purple-500/10 border-purple-500/20 text-purple-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  orange:  'bg-orange-500/10 border-orange-500/20 text-orange-400',
  rose:    'bg-rose-500/10 border-rose-500/20 text-rose-400',
};

const StatsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden border-y border-white/5 bg-gradient-to-b from-dark via-[#080c18] to-dark">
      {/* Scrolling ticker background text */}
      <div className="absolute inset-0 flex items-center overflow-hidden opacity-[0.03] pointer-events-none select-none">
        <div className="flex gap-20 whitespace-nowrap animate-marquee text-[120px] font-black uppercase tracking-tighter">
          ROHIT DATA FRONTEND REACT PYTHON SQL POWER-BI &nbsp;
          ROHIT DATA FRONTEND REACT PYTHON SQL POWER-BI &nbsp;
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-xl text-white">
            By the <span className="text-transparent-gradient">Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className={`glass-card p-6 text-center border ${colorMap[s.color]} cursor-default group`}
            >
              <div className={`inline-flex p-3 rounded-2xl mb-4 border ${colorMap[s.color]}`}>
                {s.icon}
              </div>
              <p className="text-3xl font-black text-white mb-1">
                <AnimCounter end={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider leading-tight">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
