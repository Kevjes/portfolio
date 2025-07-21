import React from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { mobileMenuButtonStyles, hamburgerContainerStyles, hamburgerLineStyles } from './core/styles';

interface MobileMenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, toggleMenu }) => {
  return (
    <motion.button
      className="mobile-menu-btn"
      style={mobileMenuButtonStyles}
      onClick={toggleMenu}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isOpen ? (
        <IoClose size={24} />
      ) : (
        <motion.div style={hamburgerContainerStyles}>
          <motion.span
            style={hamburgerLineStyles('100%')}
            animate={{
              width: ['100%', '70%', '100%'],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: 'mirror' 
            }}
          />
          <motion.span
            style={{...hamburgerLineStyles('70%'), alignSelf: 'flex-end'}}
            animate={{
              width: ['70%', '100%', '70%'],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: 'mirror' 
            }}
          />
          <motion.span
            style={hamburgerLineStyles('90%')}
            animate={{
              width: ['90%', '60%', '90%'],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: 'mirror' 
            }}
          />
        </motion.div>
      )}
    </motion.button>
  );
};

export default MobileMenuButton;