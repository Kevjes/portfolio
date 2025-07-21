import React from 'react';
import { motion } from 'framer-motion';
import { backgroundShapeStyles } from './core/styles';

interface BackgroundShapesProps {
  inView: boolean;
}

const BackgroundShapes: React.FC<BackgroundShapesProps> = ({ inView }) => {
  return (
    <>
      <motion.div
        className="morphing-shape"
        style={backgroundShapeStyles('10%', '5%', '250px', '2s')}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 0.05, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="morphing-shape"
        style={backgroundShapeStyles('60%', '85%', '200px', '4s')}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 0.05, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      <motion.div
        className="morphing-shape"
        style={backgroundShapeStyles('80%', '15%', '180px', '6s')}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 0.05, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.6 }}
      />
      <motion.div
        className="morphing-shape"
        style={backgroundShapeStyles('30%', '75%', '220px', '8s')}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 0.05, scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.9 }}
      />
    </>
  );
};

export default BackgroundShapes;