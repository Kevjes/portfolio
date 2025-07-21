import React, { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface BackgroundShapesProps {
  mousePosition: { x: number; y: number };
}

const BackgroundShapes: React.FC<BackgroundShapesProps> = ({ mousePosition }) => {
  // Create a floating animation for the background shapes
  const floatY = useMotionValue(0);
  const floatX = useMotionValue(0);
  
  // Transform values for more dynamic animations - we'll use these in our animations
  
  useEffect(() => {
    const animateFloat = () => {
      const time = Date.now() / 1000;
      floatY.set(Math.sin(time) * 10);
      floatX.set(Math.cos(time * 0.8) * 10);
      requestAnimationFrame(animateFloat);
    };
    
    const animationId = requestAnimationFrame(animateFloat);
    return () => cancelAnimationFrame(animationId);
  }, [floatY, floatX]);

  return (
    <>
      {/* Ambient light effect */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      
      {/* Enhanced glass reflections */}
      <motion.div
        className="glass-reflection"
        style={{
          position: 'absolute',
          top: '5%',
          left: '10%',
          width: '40%',
          height: '20%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 100%)',
          borderRadius: '100% 60% 60% 20% / 60% 30% 70% 40%',
          filter: 'blur(20px)',
          opacity: 0.5,
          zIndex: 0,
          x: mousePosition.x * -0.05,
          y: mousePosition.y * -0.05,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      {/* Primary large morphing shape with enhanced reflections */}
      <motion.div
        className="morphing-shape primary"
        animate={{
          borderRadius: [
            "60% 40% 30% 70%/60% 30% 70% 40%",
            "30% 60% 70% 40%/50% 60% 30% 60%",
            "60% 40% 30% 70%/60% 30% 70% 40%"
          ],
          rotate: [0, 180, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          scale: {
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }
        }}
        style={{
          width: '350px',
          height: '350px',
          position: 'absolute',
          top: '5%',
          left: '0%',
          opacity: 0.2,
          filter: 'blur(60px)',
          background: 'var(--primary-gradient)',
          x: mousePosition.x * -0.2,
          y: mousePosition.y * -0.2,
          zIndex: 0,
          boxShadow: 'inset 5px 5px 15px rgba(255,255,255,0.3), inset -5px -5px 15px rgba(0,0,0,0.3)'
        }}
      />
      
      {/* Reflection overlay for primary shape */}
      <motion.div
        className="shape-reflection"
        style={{
          width: '150px',
          height: '150px',
          position: 'absolute',
          top: '10%',
          left: '5%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 70%)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          filter: 'blur(15px)',
          opacity: 0.6,
          zIndex: 1,
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
          transform: 'rotate(-30deg)'
        }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      {/* Secondary morphing shape with enhanced colors */}
      <motion.div
        className="morphing-shape secondary"
        animate={{
          borderRadius: [
            "50% 50% 50% 70%/50% 50% 70% 60%",
            "80% 30% 50% 50%/50% 40% 60% 50%",
            "50% 50% 50% 70%/50% 50% 70% 60%"
          ],
          rotate: [180, 0, 180],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
          scale: {
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }
        }}
        style={{
          width: '250px',
          height: '250px',
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          opacity: 0.2,
          filter: 'blur(50px)',
          background: 'linear-gradient(135deg, #FF4E50 0%, #F9D423 100%)',
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
          zIndex: 0,
          boxShadow: 'inset 5px 5px 15px rgba(255,255,255,0.3), inset -5px -5px 15px rgba(0,0,0,0.3)'
        }}
      />
      
      {/* Accent morphing shape with enhanced colors */}
      <motion.div
        className="morphing-shape accent"
        animate={{
          borderRadius: [
            "40% 60% 60% 40%/60% 30% 70% 40%",
            "60% 40% 40% 60%/30% 60% 40% 70%",
            "40% 60% 60% 40%/60% 30% 70% 40%"
          ],
          rotate: [0, 180, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          scale: {
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
          }
        }}
        style={{
          width: '200px',
          height: '200px',
          position: 'absolute',
          top: '15%',
          right: '15%',
          opacity: 0.2,
          filter: 'blur(50px)',
          background: 'linear-gradient(135deg, #11998E 0%, #38EF7D 100%)',
          x: mousePosition.x * 0.15,
          y: mousePosition.y * 0.15,
          zIndex: 0,
          boxShadow: 'inset 5px 5px 15px rgba(255,255,255,0.3), inset -5px -5px 15px rgba(0,0,0,0.3)'
        }}
      />
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-particle"
          style={{
            position: 'absolute',
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.6)',
            filter: 'blur(1px)',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 1,
            opacity: 0.6
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10 + i * 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}
      
      {/* Glass lens flare effect */}
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
          filter: 'blur(20px)',
          top: '40%',
          left: '30%',
          opacity: 0.5,
          zIndex: 0,
          x: mousePosition.x * 0.2,
          y: mousePosition.y * 0.2,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </>
  );
};

export default BackgroundShapes;