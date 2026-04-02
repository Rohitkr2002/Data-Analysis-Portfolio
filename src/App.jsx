import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import About from './components/About';
import Projects from './components/Projects';
import WhyHireMe from './components/WhyHireMe';
import Leadership from './components/Leadership';
import SkillsExperience from './components/SkillsExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

// Scroll-to-top button
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-white shadow-2xl shadow-sky-400/30"
          aria-label="Scroll to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Mouse Glow Component
const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="mouse-glow hidden lg:block"
      style={{ 
        left: `${mousePos.x}px`, 
        top: `${mousePos.y}px` 
      }}
    />
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-dark min-h-screen text-slate-200 selection:bg-sky-500/30 overflow-x-hidden">
      <MouseGlow />

      {/* Global Social Sidebar (Fixed to Viewport) */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed left-6 2xl:left-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-50 py-6 px-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full"
      >
        <a href="https://www.linkedin.com/in/rohit-kumar-singh-25168a226/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors p-2 hover:bg-sky-400/10 rounded-full">
           <Linkedin size={20} />
        </a>
        <a href="https://github.com/Rohitkr2002" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
           <Github size={20} />
        </a>
        <div className="h-20 w-px bg-gradient-to-b from-sky-400/50 to-transparent mx-auto" />
      </motion.div>
      
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <StatsSection />
          <About />
          <Projects />
          <WhyHireMe />
          <Leadership />
          <SkillsExperience />
          <Contact />
        </main>
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;
