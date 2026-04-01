import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Linkedin, Github, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredLink, setHoveredLink] = useState(null);

  // ── Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const navLinks = [
    { name: 'Home',       href: '#home',       id: 'home'       },
    { name: 'About',      href: '#about',      id: 'about'      },
    { name: 'Projects',   href: '#projects',   id: 'projects'   },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact',    href: '#contact',    id: 'contact'    },
  ];

  // ── Scroll listeners
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const scrollPos = window.scrollY + 130;
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ─────────────── SCROLL PROGRESS BAR ─────────────── */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500"
      />

      {/* ─────────────── MAIN NAVBAR ─────────────── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'mt-0 py-0'
            : 'mt-0 py-0'
        }`}
      >
        {/* Inner pill bar */}
        <div
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? 'max-w-5xl mt-4 rounded-2xl bg-dark/80 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/40 px-6 py-3'
              : 'max-w-full mt-0 rounded-none bg-transparent px-8 py-5'
          }`}
        >
          <div className="flex items-center justify-between">

            {/* ── LOGO ── */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 group"
            >
              {/* Gradient badge */}
              <div className="relative h-10 w-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-sky-400/30">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600" />
                {/* Shine sweep */}
                <motion.div
                  animate={{ x: ['-200%','200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
                <span className="relative z-10 text-white font-black text-sm">RK</span>
                {/* Online dot */}
                <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-emerald-400 rounded-full border-2 border-dark z-20 animate-pulse" />
              </div>

              {/* Text */}
              <div className="hidden sm:block">
                <p className="text-white font-display font-black text-base leading-none tracking-tight">
                  Rohit Kumar Singh
                </p>
                <div className="flex items-center gap-2 mt-1">
                  {/* <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-sky-400">Frontend</span>
                  <span className="text-slate-600">·</span> */}
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-indigo-400">Data Analyst</span>
                </div>
              </div>
            </motion.a>

            {/* ── DESKTOP LINKS ── */}
            <div className="hidden md:flex items-center gap-1 relative">
              {/* Sliding background pill */}
              {hoveredLink && (
                <motion.div
                  layoutId="hoverPill"
                  className="absolute inset-0 bg-white/8 rounded-xl pointer-events-none"
                  style={{ zIndex: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  onHoverStart={() => setHoveredLink(link.id)}
                  onHoverEnd={() => setHoveredLink(null)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 z-10 ${
                    activeSection === link.id
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Active underline */}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* ── RIGHT ACTIONS ── */}
            <div className="flex items-center gap-3">
              {/* Quick social icons - desktop */}
              <div className="hidden lg:flex items-center gap-2">
                <motion.a
                  href="https://www.linkedin.com/in/rohit-kumar-singh-25168a226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-sky-500/10 hover:border-sky-400/30 transition-colors"
                >
                  <Linkedin size={16} />
                </motion.a>
                <motion.a
                  href="https://github.com/Rohitkr2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  <Github size={16} />
                </motion.a>
              </div>

              {/* Divider */}
              <div className="hidden lg:block h-6 w-px bg-white/10" />

              {/* Hire Me CTA */}
              <motion.a
                href="https://www.linkedin.com/in/rohit-kumar-singh-25168a226/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold transition-all duration-300 relative overflow-hidden group"
                style={{ background: 'linear-gradient(135deg, #38bdf8, #6366f1, #a855f7)' }}
              >
                {/* Animated shine */}
                <motion.span
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                />
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                <span className="relative">Hire Me</span>
              </motion.a>

              {/* Hamburger — mobile */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
                className={`md:hidden relative h-11 w-11 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'bg-sky-500/20 border-sky-400/50 text-sky-400'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.span key="close"
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.span>
                  ) : (
                    <motion.span key="open"
                      initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ─────────────── MOBILE DRAWER ─────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dim backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
            />

            {/* Slide-in panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 h-full w-80 z-50 bg-[#080d1a]/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl md:hidden flex flex-col overflow-hidden"
            >
              {/* Glow inside drawer */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />

              {/* Drawer Header */}
              <div className="relative flex items-center justify-between px-6 py-5 border-b border-white/8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center shadow-lg relative">
                    <span className="text-white font-black text-sm">RK</span>
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-emerald-400 rounded-full border-2 border-[#080d1a] animate-pulse" />
                  </div>
                  <div>
                    <p className="text-white font-display font-black text-sm leading-none">Rohit Kumar Singh</p>
                    <p className="text-sky-400 text-[10px] uppercase tracking-widest mt-0.5 font-bold">Dev · Analyst</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="relative flex-1 flex flex-col justify-center px-6 gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, type: 'spring', stiffness: 250 }}
                    className={`group flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold text-base transition-all duration-300 ${
                      activeSection === link.id
                        ? 'bg-gradient-to-r from-sky-500/20 to-indigo-500/10 border border-sky-400/30 text-white shadow-lg shadow-sky-500/10'
                        : 'border border-transparent text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/10'
                    }`}
                  >
                    {/* indicator dot */}
                    <motion.span
                      animate={{ scale: activeSection === link.id ? [1,1.3,1] : 1 }}
                      transition={{ duration: 1, repeat: activeSection === link.id ? Infinity : 0 }}
                      className={`h-2 w-2 rounded-full flex-shrink-0 ${activeSection === link.id ? 'bg-sky-400' : 'bg-slate-700 group-hover:bg-slate-500'}`}
                    />
                    {link.name}
                    {activeSection === link.id && (
                      <span className="ml-auto text-[10px] text-sky-400 font-bold bg-sky-400/10 px-2 py-0.5 rounded-lg">Active</span>
                    )}
                  </motion.a>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="relative px-6 py-6 border-t border-white/8 space-y-3">
                <motion.a
                  href="https://www.linkedin.com/in/rohit-kumar-singh-25168a226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white font-bold text-sm relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #38bdf8, #6366f1)' }}
                >
                  <Linkedin size={18} />
                  Hire Me on LinkedIn
                </motion.a>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Rohitkr2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 font-semibold text-sm transition-all"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href="mailto:rajputrohitsingh998@gmail.com"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 font-semibold text-sm transition-all"
                  >
                    <Mail size={16} /> Email
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
