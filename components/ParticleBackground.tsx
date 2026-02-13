import React from 'react';
import { motion } from 'framer-motion';

export const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-neon-dark">
      {/* Static Gradient Base - Cheapest performance */}
      <div className="absolute inset-0 bg-radial-gradient from-[#1a3a1a] via-[#050a05] to-black" />
      
      {/* Animated Orbs - Reduced blur radius for performance */}
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          transform: ["translate(0px, 0px) scale(1)", "translate(50px, -30px) scale(1.1)", "translate(0px, 0px) scale(1)"]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/20 blur-[60px] rounded-full will-change-transform"
      />
      
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          transform: ["translate(0px, 0px) scale(1)", "translate(-40px, 40px) scale(1.2)", "translate(0px, 0px) scale(1)"]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-blue/20 blur-[80px] rounded-full will-change-transform"
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};