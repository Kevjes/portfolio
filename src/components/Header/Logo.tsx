import React from 'react';
import { motion } from 'framer-motion';
import { logoStyles, logoDotStyles } from './core/styles';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="logo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={logoStyles}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span style={{ fontFamily: '"Poppins", sans-serif' }}>KT</span>
      <motion.span 
        style={logoDotStyles}
        animate={{ 
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: 'easeInOut' 
        }}
      />
    </motion.div>
  );
};

export default Logo;