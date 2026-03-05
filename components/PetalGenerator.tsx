
import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: string;
  duration: string;
  delay: string;
  size: string;
  opacity: number;
  color: string;
  blur: string;
}

const PetalGenerator: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = [
      '#bfdbfe', // blue
      '#fdf2f8', // pink
      '#d4af37', // gold
      '#ffffff', // white
      '#e0f2fe'  // sky
    ];
    const newPetals: Petal[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 25}s`,
      delay: `${Math.random() * -20}s`, // Negative delay so they start at different positions immediately
      size: `${2 + Math.random() * 10}px`,
      opacity: 0.1 + Math.random() * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      blur: Math.random() > 0.5 ? 'blur(1px)' : 'none',
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal rounded-full shadow-sm"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            backgroundColor: petal.color,
            opacity: petal.opacity,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            filter: petal.blur,
            bottom: '-20px',
          }}
        />
      ))}
    </div>
  );
};

export default PetalGenerator;
