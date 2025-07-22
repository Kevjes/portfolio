import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ExpertiseCard } from './core/types';
import { expertiseCards as expertiseCardsData } from './core/data';
import { expertiseContainerStyles } from './core/styles';

interface ExpertiseCardsProps {
  expertiseControls: any; // Animation controls
}

const ExpertiseCards: React.FC<ExpertiseCardsProps> = ({ expertiseControls }) => {

  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  // Motion values for liquid glass effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform values for light reflection effect
  const reflectionX = useTransform(mouseX, [-300, 300], [15, -15]);
  const reflectionY = useTransform(mouseY, [-300, 300], [15, -15]);

  // Using expertiseCards from data.ts
  const expertiseCards: ExpertiseCard[] = expertiseCardsData;
  
  // Handle mouse move for interactive light effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <motion.div
      initial={{ opacity: 1, x: 50 }}
      animate={{ opacity: 1, x: 0, ...expertiseControls }}
      transition={{ duration: 0.8, delay: 0.7 }}
      style={{
        ...expertiseContainerStyles,
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced glass reflection effect */}
      <motion.div 
        className="glass-reflection" 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.1) 100%)',
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: 'none',
          x: reflectionX,
          y: reflectionY,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Decorative gradient bar with enhanced animation */}
      <motion.div 
        className="gradient-bar" 
        style={{ 
          background: 'linear-gradient(90deg, var(--secondary-color) 0%, var(--primary-color) 100%)',
          opacity: 0.8,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '2px',
          zIndex: 1,
        }}
        animate={{
          opacity: [0.6, 0.9, 0.6],
          boxShadow: [
            '0 0 10px rgba(123, 97, 255, 0.3)',
            '0 0 20px rgba(123, 97, 255, 0.5)',
            '0 0 10px rgba(123, 97, 255, 0.3)'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {expertiseCards.map((card, index) => (
        <motion.div
          key={card.id}
          className="glass-container enhanced"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.9 + index * 0.2,
            type: 'spring',
            stiffness: 120,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.05, 
            y: -8, 
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.2)'
          }}
          whileTap={{ scale: 0.98 }}
          onHoverStart={() => setActiveCard(card.id)}
          onHoverEnd={() => setActiveCard(null)}
          style={{
            padding: '1.75rem',
            borderRadius: '18px',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            border: activeCard === card.id ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.4s ease',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            marginBottom: '1.5rem'
          }}
        >
          {/* New gradient overlay */}
          <motion.div
            className="gradient-overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '18px',
              background: card.gradient,
              zIndex: 0,
              pointerEvents: 'none',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeCard === card.id ? 0.6 : 0 }}
            transition={{ duration: 0.3 }}
          />
          {/* Background gradient with enhanced animation */}
          <motion.div 
            animate={{
              top: activeCard === card.id ? '-30px' : '-100px',
              right: activeCard === card.id ? '-30px' : '-100px',
              opacity: activeCard === card.id ? 0.5 : 0.2,
              scale: activeCard === card.id ? [1, 1.2, 1.1] : [1, 1.05, 1]
            }}
            transition={{
              duration: 0.5,
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
            style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              background: card.gradient,
              borderRadius: '50%',
              filter: 'blur(60px)',
              zIndex: 0,
              mixBlendMode: 'screen'
            }}
          />
          
          {/* Enhanced reflection effect */}
          <motion.div 
            className="card-reflection" 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, ${card.gradient}22 0%, transparent 50%, ${card.gradient}11 100%)`,
              opacity: 0.3,
              zIndex: 0,
              pointerEvents: 'none',
            }}
            animate={{
              opacity: activeCard === card.id ? [0.3, 0.5, 0.3] : [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div 
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.2 }}
            >
              <motion.div 
                style={{
                  width: '55px',
                  height: '55px',
                  borderRadius: '14px',
                  background: card.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Icon reflection effect */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
                    opacity: 0.6,
                    zIndex: 0,
                  }}
                  animate={{
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <card.icon size={24} color="white" style={{ position: 'relative', zIndex: 1 }} />
              </motion.div>
              <h3 
                style={{ 
                  margin: 0, 
                  fontSize: '1.3rem', 
                  fontWeight: '700',
                  background: `linear-gradient(135deg, #ffffff 0%, ${card.gradient.split(',')[0]}99 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              >
                {card.title}
              </h3>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 + index * 0.2 }}
              style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.6', 
                marginBottom: '1.25rem',
                opacity: 0.9,
                color: 'rgba(255, 255, 255, 0.9)',
                textShadow: '0 1px 3px rgba(0,0,0,0.15)'
              }}
            >
              {card.description}
            </motion.p>
            
            {card.technologies.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
              >
                {card.technologies.map((tech, techIndex) => (
                  <motion.div 
                    key={tech.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      delay: 1.3 + index * 0.2 + techIndex * 0.05,
                      type: 'spring',
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.1, 
                      boxShadow: `0 8px 20px ${tech.color}40, inset 0 0 5px rgba(255, 255, 255, 0.3)`
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '20px',
                      background: activeCard === card.id ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(5px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      color: 'rgba(255, 255, 255, 0.95)',
                      textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                    }}
                  >
                    <tech.icon size={16} style={{ color: tech.color }} />
                    {tech.name}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ExpertiseCards;