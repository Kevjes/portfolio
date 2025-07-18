import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
      }}
    >
      {/* Morphing liquid shapes */}
      <div
        className="morphing-shape"
        style={{
          width: '200px',
          height: '200px',
          top: '20%',
          left: '10%',
          animationDelay: '0s',
        }}
      />
      <div
        className="morphing-shape"
        style={{
          width: '150px',
          height: '150px',
          top: '60%',
          right: '15%',
          animationDelay: '2s',
        }}
      />
      <div
        className="morphing-shape"
        style={{
          width: '100px',
          height: '100px',
          top: '10%',
          right: '30%',
          animationDelay: '4s',
        }}
      />

      {/* Glass container with loading content */}
      <motion.div
        className="glass-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          padding: '3rem',
          textAlign: 'center',
          maxWidth: '400px',
        }}
      >
        <motion.h1
          className="glass-title"
          style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            letterSpacing: '2px',
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          KÉVIN TENE
        </motion.h1>
        
        <motion.p
          className="glass-text"
          style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.8,
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Développeur Flutter & Web
        </motion.p>

        {/* Animated loading dots */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '1rem',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.7)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          className="glass-text"
          style={{
            fontSize: '0.9rem',
            opacity: 0.6,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Chargement du portfolio...
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.3)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default LoadingScreen;