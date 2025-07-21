import React from 'react';
import { motion } from 'framer-motion';
import { 
  sectionTitleStyles, 
  mainTitleStyles, 
  separatorStyles, 
  descriptionStyles 
} from './core/styles';

interface SectionTitleProps {
  inView: boolean;
}

/**
 * Composant pour le titre de la section Contact
 */
const SectionTitle: React.FC<SectionTitleProps> = ({ inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      style={sectionTitleStyles}
    >
      <motion.h2
        className="glass-title"
        style={mainTitleStyles}
      >
        Contactez-moi
      </motion.h2>
      <motion.div
        style={separatorStyles}
        initial={{ width: 0 }}
        animate={inView ? { width: '100px' } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.p
        className="glass-text"
        style={descriptionStyles}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.8 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos besoins en développement mobile et web.
      </motion.p>
    </motion.div>
  );
};

export default SectionTitle;