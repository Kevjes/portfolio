import React from 'react';
import { motion } from 'framer-motion';
import {
  sectionTitleContainerStyles,
  sectionTitleStyles,
  titleSeparatorStyles,
  titleDescriptionStyles
} from './core/styles';

interface SectionTitleProps {
  inView: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      style={sectionTitleContainerStyles}
    >
      <motion.h2
        className="glass-title"
        style={sectionTitleStyles}
      >
        Mon Parcours Professionnel
      </motion.h2>
      <motion.div
        style={titleSeparatorStyles}
        initial={{ width: 0 }}
        animate={inView ? { width: '100px' } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.p
        className="glass-text"
        style={titleDescriptionStyles}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.8 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Découvrez mon parcours professionnel, mes formations et mes réalisations dans le domaine du développement web et mobile.
      </motion.p>
    </motion.div>
  );
};

export default SectionTitle;