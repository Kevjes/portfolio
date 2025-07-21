import React from 'react';
import { motion } from 'framer-motion';
import { footerStyles, copyrightStyles } from './core/styles';

interface FooterProps {
  inView: boolean;
}

/**
 * Composant pour le pied de page de la section Contact
 */
const Footer: React.FC<FooterProps> = ({ inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 1 }}
      style={footerStyles}
    >
      <p className="glass-text" style={copyrightStyles}>
        © 2024 Kévin Tene. Développé avec ❤️ en React & TypeScript
      </p>
    </motion.div>
  );
};

export default Footer;