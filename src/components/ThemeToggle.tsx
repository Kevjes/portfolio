import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

interface ThemeToggleProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkTheme, toggleTheme }) => {

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.div
        className="theme-toggle-slider"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      >
        {isDarkTheme ? (
          <FaMoon size={12} />
        ) : (
          <FaSun size={12} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;