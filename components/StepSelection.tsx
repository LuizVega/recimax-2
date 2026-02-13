import React from 'react';
import { motion } from 'framer-motion';
import { WASTE_ITEMS } from '../constants';
import { WasteItem } from '../types';

interface StepSelectionProps {
  selectedItems: WasteItem[];
  onToggleItem: (item: WasteItem) => void;
  onNext: () => void;
}

export const StepSelection: React.FC<StepSelectionProps> = ({ selectedItems, onToggleItem, onNext }) => {
  const isSelected = (id: string) => selectedItems.some(i => i.id === id);

  // Simplified animation for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <motion.div 
      key="step1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col h-full w-full"
    >
      <div className="text-center mb-6 shrink-0">
        <h3 className="text-2xl font-bold font-orbitron text-white tracking-wide">ESCÁNER</h3>
        <p className="text-neon-blue text-base mt-2 font-orbitron">
          SELECCIONA HASTA 5 ({selectedItems.length}/5)
        </p>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pr-1 custom-scrollbar">
        {/* Increased grid gap and button sizes */}
        <div className="grid grid-cols-2 gap-4 pb-4">
          {WASTE_ITEMS.map((item) => {
            const active = isSelected(item.id);
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => onToggleItem(item)}
                className={`
                  relative p-6 rounded-2xl border flex flex-col items-center justify-center gap-3 transition-all duration-200
                  overflow-hidden touch-manipulation
                  ${active 
                    ? 'bg-neon-green/20 border-neon-green shadow-[0_0_15px_rgba(57,255,20,0.3)] text-white scale-[1.02]' 
                    : 'bg-white/5 border-neon-green/30 text-gray-300 hover:border-neon-green/70 active:scale-95'
                  }
                `}
              >
                <div className={`
                   p-3.5 rounded-full transition-colors duration-200
                   ${active ? 'bg-neon-green text-black' : 'bg-white/10 text-current'}
                `}>
                  {/* Significantly larger icons */}
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                {/* Larger text for better readability */}
                <span className="text-sm md:text-base font-orbitron font-bold uppercase tracking-wider text-center leading-tight">
                  {item.name}
                </span>
                
                {active && (
                  <div className="absolute inset-0 bg-neon-green/5 z-0 pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-5 shrink-0">
        <button
          disabled={selectedItems.length === 0}
          onClick={onNext}
          className={`
            w-full py-5 rounded-2xl border-2 font-orbitron font-bold tracking-widest uppercase transition-all
            flex items-center justify-center gap-3 text-lg touch-manipulation active:scale-[0.98]
            ${selectedItems.length > 0
              ? 'border-neon-blue text-black bg-neon-blue shadow-[0_0_20px_rgba(0,243,255,0.4)]'
              : 'border-gray-800 text-gray-600 cursor-not-allowed bg-black/20'
            }
          `}
        >
          PROCESAR <span className="text-2xl leading-none">➔</span>
        </button>
      </div>
    </motion.div>
  );
};