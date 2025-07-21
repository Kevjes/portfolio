import React, { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface BackgroundShapesProps {
  mousePosition: { x: number; y: number };
}

const BackgroundShapes: React.FC<BackgroundShapesProps> = ({ mousePosition }) => {
  // Create a floating animation for the background shapes
  const floatY = useMotionValue(0);
  
  useEffect(() => {
    const animateFloat = () => {
      floatY.set(Math.sin(Date.now() / 1000) * 10);
      requestAnimationFrame(animateFloat);
    };
    
    const animationId = requestAnimationFrame(animateFloat);
    return () => cancelAnimationFrame(animationId);
  }, [floatY]);

  return (
    <>
      {/* Background morphing shapes with enhanced animations */}
      <motion.div
        className="morphing-shape"
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
          width: '300px',
          height: '300px',
          position: 'absolute',
          top: '10%',
          left: '5%',
          opacity: 0.15,
          filter: 'blur(40px)',
          background: 'var(--primary-gradient)',
          x: mousePosition.x * -0.2,
          y: mousePosition.y * -0.2,
        }}
      />
      <motion.div
        className="morphing-shape"
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
          width: '200px',
          height: '200px',
          position: 'absolute',
          top: '60%',
          right: '10%',
          opacity: 0.15,
          filter: 'blur(40px)',
          background: 'linear-gradient(135deg, #FF4E50 0%, #F9D423 100%)',
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
        }}
      />
      <motion.div
        className="morphing-shape"
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
          width: '150px',
          height: '150px',
          position: 'absolute',
          top: '20%',
          right: '20%',
          opacity: 0.15,
          filter: 'blur(40px)',
          background: 'linear-gradient(135deg, #11998E 0%, #38EF7D 100%)',
          x: mousePosition.x * 0.15,
          y: mousePosition.y * 0.15,
        }}
      />
    </>
  );
};

export default BackgroundShapes;