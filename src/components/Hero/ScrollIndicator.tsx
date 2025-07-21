import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { scrollIndicatorStyles } from './core/styles';

interface ScrollIndicatorProps {
  scrollToAbout: () => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ scrollToAbout }) => {
  return (
    <motion.div 
      style={scrollIndicatorStyles}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      onClick={scrollToAbout}
      whileHover={{ scale: 1.1, y: -3 }}
    >
      <motion.div 
        style={{ 
          width: '32px', 
          height: '52px', 
          border: '2px solid rgba(255, 255, 255, 0.4)', 
          borderRadius: '18px',
          display: 'flex',
          justifyContent: 'center',
          padding: '0.5rem 0',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(5px)',
          background: 'rgba(255, 255, 255, 0.05)'
        }}
        whileHover={{ 
          boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)',
          border: '2px solid rgba(255, 255, 255, 0.6)'
        }}
      >
        <motion.div 
          style={{ 
            width: '6px', 
            height: '10px', 
            backgroundColor: 'white', 
            borderRadius: '6px',
            marginTop: '5px',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
          }}
          animate={{ 
            y: [0, 18, 0],
            opacity: [0.5, 1, 0.5],
            boxShadow: [
              '0 0 5px rgba(255, 255, 255, 0.3)',
              '0 0 15px rgba(255, 255, 255, 0.7)',
              '0 0 5px rgba(255, 255, 255, 0.3)'
            ]
          }}
          transition={{ 
            duration: 1.8, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        />
      </motion.div>
      <motion.div
        style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          fontSize: '0.9rem',
          fontWeight: '500',
          color: 'rgba(255, 255, 255, 0.8)',
          letterSpacing: '0.05em'
        }}
        animate={{ 
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      >
        <span>SCROLL</span>
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 0.2
          }}
        >
          <FaChevronDown size={12} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;