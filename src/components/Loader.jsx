import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-dark flex items-center justify-center"
    >
      <div className="relative">
        <motion.div
           initial={{ scale: 0.5, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
           className="text-6xl font-display font-black tracking-tighter"
        >
           <span className="text-white">ROHIT</span>
           <span className="text-transparent-gradient">_SINGH</span>
        </motion.div>
        
        <motion.div
           initial={{ width: 0 }}
           animate={{ width: "100%" }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Loader;
