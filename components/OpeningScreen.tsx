
import React from 'react';

interface OpeningScreenProps {
  onOpen: () => void;
}

const OpeningScreen: React.FC<OpeningScreenProps> = () => {
  return (
    <div className="h-full w-full bg-[#111] flex items-center justify-center p-6 relative shadow-[0_50px_100px_rgba(0,0,0,1)]">
      {/* Texture and Pattern */}
      <div className="absolute inset-0 opacity-10 islamic-pattern"></div>
      
      {/* Gold Frame for the "Door" */}
      <div className="absolute inset-4 border border-[#d4af37]/30 pointer-events-none"></div>
      <div className="absolute inset-8 border-2 border-[#d4af37]/10 pointer-events-none"></div>

      <div className="text-center z-10 max-w-lg w-full">
        <div className="mb-8 scale-110">
          <span className="font-arabic md:text-6xl text-5xl gold-text drop-shadow-lg">﷽</span>
        </div>
        
        <div className="space-y-6 mb-16">
          <h2 className="font-serif-elegant text-sm md:text-base text-[#d4af37] tracking-[0.4em] uppercase opacity-80 animate-pulse">
            Welcome to Our Celebration
          </h2>
          
          <div className="relative py-8">
            <h1 className="font-cursive text-5xl md:text-8xl gold-text drop-shadow-2xl">
              Jisly & Hasbie
            </h1>
            <p className="font-playfair italic text-white/60 text-lg md:text-xl mt-4 tracking-widest">
              08 . 04 . 2026
            </p>
          </div>
        </div>

        {/* Removed button, using decorative element instead */}
        <div className="mt-8 flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-b from-[#d4af37] to-transparent mb-4"></div>
          <p className="font-serif-elegant tracking-[0.2em] text-[#d4af37] text-[10px] uppercase opacity-60">
            Revealing the invitation...
          </p>
        </div>

        <div className="mt-16 opacity-40">
           <div className="w-12 h-px bg-[#d4af37] mx-auto mb-4"></div>
           <p className="font-arabic text-xl gold-text">
              بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا
           </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningScreen;
