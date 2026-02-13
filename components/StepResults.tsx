import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WasteItem, WasteGroup } from '../types';
import { BIN_COLORS, TRIVIA_FACTS } from '../constants';
import { Recycle, ArrowRight, RotateCcw, Lightbulb } from 'lucide-react';

interface StepResultsProps {
  selectedItems: WasteItem[];
  onReset: () => void;
}

export const StepResults: React.FC<StepResultsProps> = ({ selectedItems, onReset }) => {
  const [trivia, setTrivia] = useState('');

  useEffect(() => {
    setTrivia(TRIVIA_FACTS[Math.floor(Math.random() * TRIVIA_FACTS.length)]);
  }, []);

  const groupedItems = useMemo(() => {
    const groups: Record<string, WasteGroup> = {};
    
    selectedItems.forEach(item => {
      if (!groups[item.bin]) {
        groups[item.bin] = {
          bin: item.bin,
          items: [],
          hexColor: BIN_COLORS[item.bin]
        };
      }
      groups[item.bin].items.push(item);
    });

    return Object.values(groups);
  }, [selectedItems]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      key="step3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col h-full w-full"
    >
      <div className="text-center mb-6 shrink-0">
        <div className="flex items-center justify-center gap-3 mb-3">
           <Recycle className="text-neon-green w-10 h-10" />
           <h3 className="text-3xl font-bold font-orbitron text-neon-green">RUTA LISTA</h3>
        </div>
        <div className="h-1 w-32 bg-neon-green mx-auto shadow-[0_0_15px_#39FF14]" />
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pr-2 custom-scrollbar space-y-5">
        {groupedItems.map((group, i) => (
          <motion.div
            key={group.bin}
            variants={cardVariants}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 border-l-[8px] rounded-r-2xl p-5 flex items-center justify-between backdrop-blur-sm"
            style={{ borderLeftColor: group.hexColor }}
          >
            <div className="flex-1 min-w-0">
               <div className="flex flex-col gap-1">
                 {group.items.map((item, idx) => (
                   <span key={idx} className="text-lg font-medium text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                      {item.name}
                   </span>
                 ))}
               </div>
            </div>

            <ArrowRight className="text-neon-blue mx-4 shrink-0 w-8 h-8" />

            <div 
              className="px-4 py-2 rounded-xl text-sm font-bold font-orbitron uppercase tracking-wider shrink-0 whitespace-nowrap text-center"
              style={{ 
                backgroundColor: `${group.hexColor}20`, 
                color: group.hexColor,
                boxShadow: `0 0 10px ${group.hexColor}20`,
                border: `1px solid ${group.hexColor}40`
              }}
            >
              TACHO<br/><span className="text-lg">{group.bin}</span>
            </div>
          </motion.div>
        ))}

        <motion.div 
          variants={cardVariants}
          transition={{ delay: 0.3 }}
          className="mt-6 p-5 rounded-2xl border border-neon-blue/30 bg-neon-blue/5 relative overflow-hidden"
        >
          <div className="flex items-start gap-4 relative z-10">
            <Lightbulb className="text-neon-blue shrink-0 mt-1 w-8 h-8" />
            <div>
              <h4 className="font-orbitron text-neon-blue text-base font-bold mb-2 uppercase tracking-wider">Eco-Dato</h4>
              <p className="text-gray-100 text-base leading-relaxed">
                "{trivia}"
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pt-6 shrink-0">
        <button
          onClick={onReset}
          className="w-full py-5 rounded-2xl border-2 border-neon-blue text-neon-blue font-orbitron font-bold tracking-widest uppercase hover:bg-neon-blue/10 transition-all active:scale-[0.98] shadow-neon-blue/20 flex items-center justify-center gap-3 text-lg"
        >
          <RotateCcw size={24} />
          REINICIAR
        </button>
      </div>
    </motion.div>
  );
};