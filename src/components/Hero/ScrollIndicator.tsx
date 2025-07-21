import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { scrollIndicatorStyles } from './core/styles';

interface ScrollIndicatorProps {
  scrollToAbout: () => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ scrollToAbout }) => {
  // Motion values for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform values for light reflection effect
  const reflectionX = useTransform(mouseX, [-100, 100], [5, -5]);
  const reflectionY = useTransform(mouseY, [-100, 100], [5, -5]);
  
  // Handle mouse move for interactive light effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <motion.div
      className="glass-container enhanced scroll-indicator"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.8 }}
      onClick={scrollToAbout}
      whileHover={{ 
        y: 5,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25), inset 0 0 15px rgba(255, 255, 255, 0.3)'
      }}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMouseMove}
      style={{
        ...scrollIndicatorStyles,
        cursor: 'pointer',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '50px',
        padding: '0.8rem 1.5rem'
      }}
    >
      {/* Enhanced glass reflection effect */}
      <motion.div 
        className="glass-reflection" 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 100%)',
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: 'none',
          x: reflectionX,
          y: reflectionY,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Animated content */}
      <motion.div
        animate={{ 
          y: [0, 5, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.6rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <motion.span
          style={{
            fontSize: '0.85rem',
            fontWeight: '600',
            letterSpacing: '2.5px',
            opacity: 0.9,
            color: 'rgba(255, 255, 255, 0.95)',
            textShadow: '0 1px 3px rgba(0,0,0,0.15)'
          }}
        >
          SCROLL
        </motion.span>
        
        {/* Enhanced chevron animation */}
        <motion.div
          animate={{
            y: [0, 5, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          <FaChevronDown size={14} style={{ color: 'rgba(255, 255, 255, 0.95)' }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;