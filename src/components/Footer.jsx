import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowUpRight, Heart, Code, BarChart3, Download, MousePointer2 } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { label: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/rohit-kumar-singh-25168a226/', color: 'text-sky-400' },
    { label: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/Rohitkr2002', color: 'text-white' },
    { label: 'Email', icon: <Mail size={20} />, href: 'mailto:rajputrohitsingh998@gmail.com', color: 'text-indigo-400' },
  ];

  return (
    <footer className="relative bg-dark pt-32 pb-12 overflow-hidden">
      {/* Background Glows (Matching Hero) */}
      <div className="absolute top-0 -left-10 w-96 h-96 bg-sky-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 -right-10 w-96 h-96 bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ── CENTRAL SIGNATURE PANEL ── */}
        <div className="relative mb-24 flex justify-center">
          
          {/* Floating Python Card (Left) */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-16 left-0 hidden lg:block -rotate-6"
          >
            <div className="glass-card p-5 shadow-2xl min-w-[180px] border-indigo-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-indigo-400/20 rounded-xl">
                   <span className="text-lg">🐍</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Data Analysis</p>
                  <p className="font-bold text-xs">Python & SQL</p>
                </div>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full w-[85%] bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Floating UI Card (Right) */}
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-10 right-0 hidden lg:block rotate-6"
          >
            <div className="glass-card p-5 shadow-2xl min-w-[180px] border-sky-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-sky-400/20 rounded-xl">
                   <MousePointer2 className="text-sky-400" size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Frontend</p>
                  <p className="font-bold text-xs">React.js Expert</p>
                </div>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full w-[92%] bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Main Focused Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-10 md:p-14 max-w-4xl w-full border-white/10 hover:border-sky-500/20 transition-colors shadow-2xl shadow-sky-500/5 sm:rotate-1"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                   <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-ping" />
                   Open for Internships
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-6">
                  Ready to start a <br />
                  <span className="text-transparent-gradient">new project?</span>
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
                  I'm currently seeking opportunities to apply my skills in <span className="text-white">React.js</span> and <span className="text-white">Data Analytics</span>. Let's make it happen.
                </p>
                
                {/* Hero-Matched Action Buttons */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a href="https://www.linkedin.com/in/rohit-kumar-singh-25168a226/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto btn-gradient px-8 py-4 flex justify-center items-center">
                    Get in Touch
                    <ArrowUpRight className="ml-2" size={18} />
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-bold transition-colors">
                    <Download size={18} />
                    Download Resume
                  </a>
                </div>
              </div>

              {/* Social Stack */}
              <div className="flex flex-col gap-3 w-full md:w-auto">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/50 hover:bg-sky-500/10 text-slate-300 hover:text-white transition-all group"
                  >
                    <span className={`${link.color} group-hover:scale-110 transition-transform`}>{link.icon}</span>
                    <span className="text-sm font-bold">{link.label}</span>
                    <ArrowUpRight size={14} className="ml-auto opacity-0 group-hover:opacity-40 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM MINIMAL STRIP ── */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <h4 className="text-2xl font-display font-black tracking-tighter">
              <span className="text-white">ROHIT</span>
              <span className="text-transparent-gradient">_RAJPUT</span>
            </h4>
            <div className="hidden md:block h-4 w-px bg-white/10" />
            <p className="hidden md:block text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              Frontend · Data Analytics · Bangalore, India
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-4 text-slate-500 text-[10px] font-black tracking-widest uppercase">
              <span className="flex items-center gap-1.5"><Heart size={12} className="text-rose-500 fill-rose-500" /> Made for Impact</span>
              <span className="h-1 w-1 rounded-full bg-slate-800" />
              <div className="flex items-center gap-2">
                 <Code size={12} className="text-sky-400" />
                 <span>React 19</span>
              </div>
              <div className="flex items-center gap-2">
                 <BarChart3 size={12} className="text-indigo-400" />
                 <span>Vite 5</span>
              </div>
            </div>
            <p className="text-slate-600 text-[9px] font-bold tracking-tighter">© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
