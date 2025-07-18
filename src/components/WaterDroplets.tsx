import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Droplet {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface WaterDropletsProps {
  isDarkTheme?: boolean;
}

const WaterDroplets: React.FC<WaterDropletsProps> = ({ isDarkTheme = true }) => {
  const [droplets, setDroplets] = useState<Droplet[]>([]);

  useEffect(() => {
    const generateDroplets = () => {
      const newDroplets: Droplet[] = [];
      for (let i = 0; i < 15; i++) {
        newDroplets.push({
          id: i,
          x: Math.random() * 100,
          y: -10,
          size: Math.random() * 8 + 4,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 5
        });
      }
      setDroplets(newDroplets);
    };

    generateDroplets();
    const interval = setInterval(generateDroplets, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="water-droplets-container">
      {droplets.map((droplet) => (
        <motion.div
          key={droplet.id}
          className="water-droplet"
          initial={{
            x: `${droplet.x}vw`,
            y: '-10vh',
            scale: 0,
            opacity: 0
          }}
          animate={{
            y: '110vh',
            scale: [0, 1, 1, 0],
            opacity: [0, 0.8, 0.8, 0]
          }}
          transition={{
            duration: droplet.duration,
            delay: droplet.delay,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'easeIn'
          }}
          style={{
            width: `${droplet.size}px`,
            height: `${droplet.size * 1.5}px`,
            position: 'fixed',
            background: 'var(--droplet-color)',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            boxShadow: `
              0 0 10px var(--droplet-secondary),
              inset 0 0 10px rgba(255, 255, 255, 0.3)
            `,
            filter: 'blur(0.5px)',
            zIndex: 1
          }}
        />
      ))}
      
      {/* Ripple effects */}
      {droplets.slice(0, 5).map((droplet) => (
        <motion.div
          key={`ripple-${droplet.id}`}
          className="water-ripple"
          initial={{
            x: `${droplet.x}vw`,
            y: '95vh',
            scale: 0,
            opacity: 0
          }}
          animate={{
            scale: [0, 1, 2],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 1.5,
            delay: droplet.delay + droplet.duration - 0.5,
            repeat: Infinity,
            repeatDelay: 3 + droplet.delay,
            ease: 'easeOut'
          }}
          style={{
            width: '40px',
            height: '40px',
            position: 'fixed',
            border: '2px solid var(--droplet-color)',
            borderRadius: '50%',
            zIndex: 1
          }}
        />
      ))}
    </div>
  );
};

export default WaterDroplets;