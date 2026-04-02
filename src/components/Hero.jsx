import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { MousePointer2, MoveRight, Download, Linkedin, Github, MapPin, GraduationCap, Target, Award, Clock, ArrowDown, Database, Code2 } from 'lucide-react';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'Aspiring Data Analyst', 'Python Developer', 'Problem Solver'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const stats = [
    { label: 'Projects Built', value: '5+', icon: <Target size={18} className="text-sky-400" />, color: 'sky' },
    { label: 'Years Learning', value: '2+', icon: <Clock size={18} className="text-indigo-400" />, color: 'indigo' },
    { label: 'B.Tech CGPA', value: '7.33', icon: <Award size={18} className="text-purple-400" />, color: 'purple' },
    { label: 'Internships', value: 'Open', icon: <GraduationCap size={18} className="text-emerald-400" />, color: 'emerald' },
  ];

  const floatingIcons = [
    { icon: <Code2 size={24} />, x: '10%', y: '20%', delay: 0, color: 'text-sky-500' },
    { icon: <Database size={24} />, x: '85%', y: '15%', delay: 1, color: 'text-indigo-500' },
    { icon: '⚛️', x: '15%', y: '70%', delay: 2, color: 'text-sky-400' },
    { icon: '🐍', x: '80%', y: '65%', delay: 3, color: 'text-indigo-400' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-32 overflow-x-hidden mesh-grid">
      {/* Background Gradients */}
      <div className="absolute top-0 -left-10 w-full h-full bg-gradient-to-b from-sky-500/5 via-dark to-dark pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Floating Skill Orbit Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md z-0 animate-float-skill ${item.color}`}
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: item.delay, duration: 1 }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 xl:px-32 2xl:px-48 relative z-10">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-[10px] font-black uppercase tracking-[0.25em] mb-6 shadow-xl shadow-sky-500/5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
            </span>
            Exploring New Horizons • Available for Internships / Jobs
          </motion.div>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg mb-2 font-bold flex items-center gap-3"
          >
             <span className="h-px w-8 bg-sky-400/50" /> Hi, my name is
          </motion.p>

          {/* Name & Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter mb-4">
            <span className="text-white drop-shadow-2xl">Rohit Kumar</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 animate-gradient-x">Singh</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-slate-200">
            Professional <span className="text-transparent-gradient">{text}</span>
            <Cursor cursorStyle='|' cursorColor='#38bdf8' />
          </h2>

          {/* Personal Content: Location & College */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-6 text-slate-400 font-medium"
          >
            <div className="flex items-center gap-2">
               <MapPin size={18} className="text-sky-400" />
               <span>Bangalore, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/10 pl-8">
               <GraduationCap size={18} className="text-indigo-400" />
               <span>Haldia Institute of Technology (ECE '25)</span>
            </div>
          </motion.div>

          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="text-lg md:text-xl text-slate-400 mb-6 max-w-2xl leading-relaxed font-medium"
          >
             I transform complex data into actionable insights and build high-performance, design-centric frontends. Bridging the gap between <span className="text-white">Engineering</span> and <span className="text-white">Visual Analytics</span>.
          </motion.p>

          {/* Tech Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-6 text-xs font-black tracking-widest text-slate-500 uppercase"
          >
             <span>React.js</span> <span className="text-white/10"></span>
             <span>Python</span> <span className="text-white/10"></span>
             <span>SQL</span> <span className="text-white/10"></span>
             <span>Power BI</span>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.6 }}
             className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <a href="#projects" className="w-full sm:w-auto btn-gradient px-8 py-5 group text-lg flex justify-center items-center">
              Launch Portfolio
              <MoveRight className="ml-3 group-hover:translate-x-1 transition-transform" size={22} />
            </a>
            <a 
              href="#" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:bg-sky-500/10 text-white font-bold transition-all shadow-xl"
            >
              <Download size={20} className="text-sky-400" />
              Resume PDF
            </a>
          </motion.div>

          {/* Redesigned Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-5 border-white/5 hover:border-white/15 transition-all group cursor-default">
                 <div className={`p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                 </div>
                 <p className="text-3xl font-black text-white">{stat.value}</p>
                 <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1 opacity-60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Right Side Floating Cards (Restored for Laptops/Desktops) */}
      <div className="absolute top-[35%] right-4 xl:right-10 2xl:right-24 -translate-y-1/2 hidden xl:flex flex-col gap-8 pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card p-6 rotate-2 shadow-2xl min-w-[220px] border-sky-400/20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-sky-400/20 rounded-2xl text-sky-400">
               <MousePointer2 size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Engineering</p>
              <p className="font-bold text-sm">UI/UX Architect</p>
            </div>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
             <div className="h-full w-[95%] bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full" />
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="glass-card p-6 -rotate-2 shadow-2xl min-w-[220px] border-indigo-400/20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-400/20 rounded-2xl text-indigo-400">
               <Database size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Analytics</p>
              <p className="font-bold text-sm">Data Scientist</p>
            </div>
          </div>
          <div className="flex gap-1.5 h-10 items-end">
             <div className="w-3 h-4 bg-indigo-400/30 rounded-t-sm" />
             <div className="w-3 h-8 bg-indigo-400/50 rounded-t-sm" />
             <div className="w-3 h-10 bg-indigo-400 rounded-t-sm" />
             <div className="w-3 h-7 bg-indigo-400/70 rounded-t-sm" />
             <div className="w-3 h-9 bg-indigo-400/90 rounded-t-sm" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 pointer-events-none"
      >
        <div className="h-10 w-6 rounded-full border-2 border-slate-400 flex justify-center pt-2">
           <motion.div animate={{ height: [4, 12, 4] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1 bg-slate-400 rounded-full" />
        </div>
        <ArrowDown size={14} className="text-slate-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
