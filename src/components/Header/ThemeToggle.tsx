import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { themeToggleStyles, themeToggleGlowStyles } from './core/styles';

interface ThemeToggleProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  size?: 'small' | 'large';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkTheme, toggleTheme, size = 'small' }) => {
  const buttonSize = size === 'small' ? { width: '40px', height: '40px' } : { width: '60px', height: '60px' };
  const iconSize = size === 'small' ? 18 : 26;
  const borderRadius = size === 'small' ? '12px' : '16px';
  const boxShadow = size === 'small' 
    ? '0 4px 15px rgba(0, 0, 0, 0.1)' 
    : '0 8px 25px rgba(0, 0, 0, 0.2)';
  
  return (
    <motion.button
      className={`theme-toggle-${size === 'small' ? 'nav' : 'mobile'}`}
      onClick={toggleTheme}
      whileHover={{ 
        scale: 1.05,
        boxShadow: size === 'small' 
          ? '0 8px 20px rgba(0, 0, 0, 0.15)' 
          : '0 12px 30px rgba(0, 0, 0, 0.25)' 
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        ...themeToggleStyles,
        ...buttonSize,
        borderRadius,
        boxShadow
      }}
    >
      <motion.div 
        style={themeToggleGlowStyles}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: 'easeInOut' 
        }}
      />
      <motion.div style={{ position: 'relative', zIndex: 1 }}>
        {isDarkTheme ? <FaSun size={iconSize} /> : <FaMoon size={iconSize} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;