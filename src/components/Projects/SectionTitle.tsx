import React from 'react';
import { motion } from 'framer-motion';
import { styles } from './core/styles';

interface SectionTitleProps {
  inView: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      style={styles.titleContainer}
    >
      <motion.h2
        className="glass-title"
        style={styles.title}
      >
        Mes Projets
      </motion.h2>
      <motion.div
        style={styles.titleUnderline}
        initial={{ width: 0 }}
        animate={inView ? { width: '100px' } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default SectionTitle;