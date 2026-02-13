import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Cpu } from 'lucide-react';

export const StepProcessing: React.FC = () => {
  return (
    <motion.div 
      key="step2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-full gap-10"
    >
      <div className="relative scale-125">
        {/* Outer Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-40 h-40 rounded-full border-[6px] border-t-neon-blue border-r-transparent border-b-neon-blue border-l-transparent"
        />
        
        {/* Inner Ring */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-24 h-24 rounded-full border-[6px] border-t-neon-green border-r-transparent border-b-neon-green border-l-transparent"
        />

        {/* Center Icon */}
        <div className="absolute inset-0 m-auto flex items-center justify-center text-neon-green">
           <RefreshCw size={40} />
        </div>
      </div>

      <div className="text-center space-y-4">
        <motion.h2 
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-3xl font-orbitron font-bold text-neon-blue tracking-widest"
        >
          PROCESANDO...
        </motion.h2>
        
        <div className="flex items-center justify-center gap-3 text-neon-green/90 text-base font-mono">
          <Cpu size={18} className="animate-pulse" />
          <span>OPTIMIZANDO RUTA</span>
        </div>
      </div>
    </motion.div>
  );
};