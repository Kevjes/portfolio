import React from 'react';
import { motion } from 'framer-motion';
import { styles } from './core/styles';

const BackgroundShapes: React.FC = () => {
  return (
    <>
      <motion.div
        className="morphing-shape"
        style={styles.morphingShape('15%', '8%', undefined, undefined, '4s')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="morphing-shape"
        style={styles.morphingShape(undefined, undefined, '12%', '20%', '7s')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
    </>
  );
};

export default BackgroundShapes;