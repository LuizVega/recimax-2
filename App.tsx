import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ParticleBackground } from './components/ParticleBackground';
import { StepSelection } from './components/StepSelection';
import { StepProcessing } from './components/StepProcessing';
import { StepResults } from './components/StepResults';
import { AppStep, WasteItem } from './types';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.SELECTION);
  const [selectedItems, setSelectedItems] = useState<WasteItem[]>([]);

  const toggleItem = (item: WasteItem) => {
    if (selectedItems.some(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      if (selectedItems.length < 5) {
        setSelectedItems([...selectedItems, item]);
      }
    }
  };

  const startProcessing = () => {
    setStep(AppStep.PROCESSING);
    setTimeout(() => {
      setStep(AppStep.RESULTS);
    }, 2000);
  };

  const resetApp = () => {
    setSelectedItems([]);
    setStep(AppStep.SELECTION);
  };

  return (
    <div className="relative h-[100dvh] w-full flex items-center justify-center bg-neon-dark text-white overflow-hidden font-sans">
      <ParticleBackground />

      {/* Main Container: Increased max-width to xl for better spacing */}
      <main className="relative z-10 w-full max-w-xl h-[100dvh] sm:h-[92vh] sm:max-h-[900px] bg-[#0A1A0A]/95 sm:border border-neon-green/30 sm:rounded-[30px] shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
        
        {/* Header */}
        <header className="py-6 text-center border-b border-neon-green/20 bg-black/30 shrink-0">
          <h1 className="text-4xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue drop-shadow-md tracking-widest">
            RECIMAX <span className="text-xl align-top text-neon-blue">2.0</span>
          </h1>
        </header>

        <div className="flex-1 p-6 relative overflow-hidden flex flex-col min-h-0">
          <AnimatePresence mode="wait">
            {step === AppStep.SELECTION && (
              <StepSelection 
                selectedItems={selectedItems}
                onToggleItem={toggleItem}
                onNext={startProcessing}
              />
            )}
            
            {step === AppStep.PROCESSING && (
              <StepProcessing />
            )}
            
            {step === AppStep.RESULTS && (
              <StepResults 
                selectedItems={selectedItems}
                onReset={resetApp}
              />
            )}
          </AnimatePresence>
        </div>
        
        {/* Decorative footer line */}
        <div className="h-2 w-full bg-gradient-to-r from-neon-green via-neon-blue to-neon-green opacity-70 shrink-0" />
      </main>
    </div>
  );
};

export default App;