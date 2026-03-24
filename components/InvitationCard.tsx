
import React from 'react';
import Countdown from './Countdown';

const InvitationCard: React.FC = () => {
  const weddingDate = new Date('2026-04-08T11:00:00');

  return (
    <div className="relative w-full mx-auto p-1 md:p-4 my-8">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-yellow-500/5 blur-3xl rounded-full"></div>
      
      <div className="bg-[#FAF9F6] shadow-[0_30px_70px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden relative flex flex-col border-[1px] border-[#d4af37]/30">
        
        {/* Subtle Watermark Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none islamic-pattern"></div>

        {/* Golden Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#d4af37]/40 rounded-tl-xl m-2"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#d4af37]/40 rounded-tr-xl m-2"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#d4af37]/40 rounded-bl-xl m-2"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#d4af37]/40 rounded-br-xl m-2"></div>

        {/* Content Area */}
        <div className="relative z-10 px-4 py-12 md:px-12 md:py-16 text-center flex flex-col items-center">
          
          {/* Header Calligraphy - Gold Text Applied */}
          <div className="mb-8 w-full">
            <h2 style={{height:"3rem"}} className="font-arabic   text-4xl md:text-6xl gold-text font-bold mb-4">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
          </div>

          {/* Inviter Info */}
          <div className="mb-10 space-y-2 text-gray-700 font-sans-clean text-xs md:text-sm tracking-wide px-2">
            <p className="font-bold text-gray-900 text-lg md:text-2xl font-serif-elegant uppercase tracking-wider leading-snug">
              Mrs. Sulaikha Ismail 
            </p>
            <p className="italic text-gray-500">W/o Ismail APM (Late)</p>
            <p className="uppercase tracking-[0.1em] text-[10px] md:text-xs opacity-60">Multhazham, K.K Junction, Ponnani.</p>
          </div>

          {/* The Invite Message */}
          <div className="mb-12 max-w-lg px-2">
            <p className="font-serif-elegant italic text-sm md:text-lg text-gray-800 leading-relaxed uppercase tracking-widest break-words">
              We request the honour of your presence at the wedding ceremony of my beloved daughter
            </p>
          </div>

          {/* Names Section - Responsive Flex and No-Break names */}
          <div className="mb-14 w-full px-2">
            <h1 className="font-cursive text-5xl md:text-8xl text-[#222] mb-1 leading-tight whitespace-nowrap  text-ellipsis md:whitespace-normal">
              Jisly Shareefa
            </h1>
            <p className="text-gray-400 font-serif-elegant text-[9px] md:text-xs uppercase tracking-[0.4em] mb-6">
              Daughter of APM Ismail (Late)
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-8 md:w-24 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
                <div className="font-arabic text-3xl gold-text">و</div>
                <div className="h-[1px] w-8 md:w-24 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
            </div>
            
            <h1 className="font-cursive text-5xl md:text-8xl text-[#222] mb-1 leading-tight whitespace-nowrap  text-ellipsis md:whitespace-normal">
            Mohammed Hasbie 
            </h1>
            <p className="text-gray-400 font-serif-elegant text-center text-[9px] md:text-xs uppercase tracking-[0.4em]">
              Son of A V Ashraf & Zeenath Ashraf 
              <br />
              Ambalath Veetil House
            </p>
          </div>

          {/* Date & Time Grid - Mobile Stack Friendly */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center mb-14 border-y border-gray-200 py-10 gap-8 md:gap-4 bg-[#fdfdfd]/50">
            <div className="flex flex-col items-center">
              <p className="font-serif-elegant text-gray-900 font-bold tracking-[0.2em] text-base md:text-lg">WEDNESDAY</p>
              <p className="font-sans-clean gold-text mt-1 font-bold text-sm">April 08, 2026</p>
              <p className="font-arabic text-gray-400 mt-1 text-xs">Shawwal 20, 1447</p>
            </div>
            
            <div className="flex flex-col items-center md:border-x border-gray-100 px-4">
              <span className="font-serif-elegant text-[10px] text-gray-400 tracking-[0.3em] mb-2 uppercase">Nikah Ceremony</span>
              <span className="text-5xl md:text-6xl font-playfair font-black text-[#111] leading-none">11:00</span>
              <span className="text-xs font-sans-clean gold-text font-bold mt-2 tracking-widest uppercase">Morning AM</span>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-serif-elegant text-gray-900 font-bold tracking-[0.2em] text-base md:text-lg">VENUE</p>
              <p className="font-sans-clean text-gray-700 mt-1 text-sm font-semibold">Akbar Auditorium</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Ponnani, Malappuram</p>
            </div>
          </div>

          {/* Countdown Section */}
          <div className="mb-14 w-full px-2">
            <h4 className="font-serif-elegant text-gray-400 mb-8 uppercase tracking-[0.3em] text-[10px] font-bold">The Celebration Begins In</h4>
            <Countdown targetDate={weddingDate} />
          </div>

          {/* Footer Calligraphy */}
          <div className="space-y-10 w-full px-2">
             <div className="font-arabic text-3xl md:text-5xl gold-text py-4 leading-relaxed tracking-wide drop-shadow-sm">
               بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
             </div>
             
             <div className="space-y-6 pt-6 border-t border-gray-100">
               <p className="font-serif-elegant text-lg md:text-2xl text-gray-800 tracking-[0.1em]">Expecting Your Presence & Dua</p>
               
               <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 pt-6">
                  <div className="flex items-center gap-4 bg-white p-2 rounded-lg shadow-sm border border-gray-50">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://maps.google.com/?q=Akbar+Auditorium+Ponnani" 
                      alt="Location QR" 
                      className="w-20 h-20 opacity-80"
                    />
                    <div className="text-left">
                       <p className="text-[10px] font-bold text-gray-800 uppercase tracking-widest mb-1">Location Map</p>
                       <p className="text-[9px] text-gray-400 uppercase tracking-tighter max-w-[120px]">Scan for direction to Akbar Auditorium</p>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-right space-y-1">
                    <p className="text-[10px] text-gray-400 font-sans-clean uppercase tracking-[0.3em]">Warm Regards:</p>
                    <p className="font-serif-elegant text-[#111] font-bold text-lg">Kith & Kins</p>
                  </div>
               </div>
             </div>
          </div>

        </div>
      </div>

      <div className="mt-8 text-center px-4">
         <p className="text-gray-500 font-sans-clean text-[10px] uppercase tracking-[0.5em] animate-pulse">
            Insha'Allah • A Lifetime of Happiness
         </p>
      </div>
    </div>
  );
};

export default InvitationCard;
