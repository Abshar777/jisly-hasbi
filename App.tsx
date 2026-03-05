
import React, { useState, useEffect } from 'react';
import InvitationCard from './components/InvitationCard';
import OpeningScreen from './components/OpeningScreen';
import PetalGenerator from './components/PetalGenerator';

const App: React.FC = () => {
  const [isPreloading, setIsPreloading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [hideDoor, setHideDoor] = useState(false);

  useEffect(() => {
    // Stage 1: Initial Preloader (2 seconds)
    const preloadTimer = setTimeout(() => {
      setIsPreloading(false);
    }, 2000);

    return () => clearTimeout(preloadTimer);
  }, []);

  useEffect(() => {
    // Stage 2: Automatic Door Opening (2 seconds after preloading ends)
    if (!isPreloading && !isOpen) {
      const openTimer = setTimeout(() => {
        handleOpen();
      }, 2000);
      return () => clearTimeout(openTimer);
    }
  }, [isPreloading, isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    // Stage 3: Remove the door from DOM after the 1.5s CSS transition finishes
    setTimeout(() => {
      setHideDoor(true);
    }, 1500);
  };

  if (isPreloading) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0c0c0c] z-[100]">
        <div className="relative mb-8 flex flex-col items-center">
           <div className="w-16 h-16 border-2 border-yellow-900/30 border-t-[#d4af37] rounded-full animate-spin mb-4"></div>
           <span className="font-arabic text-4xl gold-text">﷽</span>
        </div>
        <h2 className="font-serif-elegant text-sm tracking-[0.5em] text-[#d4af37] animate-pulse uppercase">
          Invitation Loading
        </h2>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <PetalGenerator />
      
      {/* Background Content (The Invitation) */}
      <div className={`w-full max-w-4xl px-2 transition-opacity duration-1000 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <InvitationCard />
      </div>

      {/* The Door (Lifting Overlay) */}
      {!hideDoor && (
        <div className={`fixed inset-0 z-50 flex flex-col door-lift ${isOpen ? 'door-open' : ''}`}>
           <OpeningScreen onOpen={handleOpen} />
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default App;
