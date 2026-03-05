
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const RollingDigit: React.FC<{ digit: string }> = ({ digit }) => {
  const num = parseInt(digit);
  // Ensure we have a valid number, default to 0
  const displayNum = isNaN(num) ? 0 : num;
  
  return (
    <div className="digit-container w-6 md:w-8 border-x border-gray-200/50">
      <div 
        className="digit-strip" 
        style={{ transform: `translateY(-${displayNum * 2.5}rem)` }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <div key={n} className="digit-value text-xl md:text-2xl font-bold font-serif-elegant text-gray-800">
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  const digits = value.toString().padStart(2, '0').split('');
  
  return (
    <div className="flex flex-col items-center mx-1 md:mx-3">
      <div className="flex bg-white border-b-4 border-[#d4af37]/30 rounded-lg overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] ring-1 ring-black/5">
        {digits.map((d, i) => (
          <RollingDigit key={i} digit={d} />
        ))}
      </div>
      <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-[#b38728] mt-3 font-sans-clean font-bold">
        {label}
      </span>
    </div>
  );
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center py-2 scale-90 md:scale-100">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-gray-300 font-bold text-xl pb-6">:</div>
      <TimeUnit value={timeLeft.hours} label="Hrs" />
      <div className="text-gray-300 font-bold text-xl pb-6">:</div>
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <div className="text-gray-300 font-bold text-xl pb-6">:</div>
      <TimeUnit value={timeLeft.seconds} label="Sec" />
    </div>
  );
};

export default Countdown;
