import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExpertiseCard } from './core/types';
import { expertiseCards as expertiseCardsData } from './core/data';
import { expertiseContainerStyles } from './core/styles';

interface ExpertiseCardsProps {
  expertiseControls: any; // Animation controls
}

const ExpertiseCards: React.FC<ExpertiseCardsProps> = ({ expertiseControls }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Using expertiseCards from data.ts
  const expertiseCards: ExpertiseCard[] = expertiseCardsData;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0, ...expertiseControls }}
      transition={{ duration: 0.8, delay: 0.7 }}
      style={expertiseContainerStyles}
    >
      {expertiseCards.map((card, index) => (
        <motion.div
          key={card.id}
          className="glass-container"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.9 + index * 0.2,
            type: 'spring',
            stiffness: 120,
            damping: 15
          }}
          whileHover={{ scale: 1.05, y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.15)' }}
          whileTap={{ scale: 0.98 }}
          onHoverStart={() => setActiveCard(card.id)}
          onHoverEnd={() => setActiveCard(null)}
          style={{
            padding: '1.75rem',
            borderRadius: '18px',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            border: activeCard === card.id ? '1px solid var(--glass-border)' : '1px solid transparent',
            transition: 'all 0.3s ease'
          }}
        >
          {/* Background gradient with animation */}
          <motion.div 
            animate={{
              top: activeCard === card.id ? '-30px' : '-100px',
              right: activeCard === card.id ? '-30px' : '-100px',
              opacity: activeCard === card.id ? 0.4 : 0.1,
              scale: activeCard === card.id ? [1, 1.1, 1] : 1
            }}
            transition={{
              duration: 0.5,
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
            style={{
              position: 'absolute',
              width: '180px',
              height: '180px',
              background: card.gradient,
              borderRadius: '50%',
              filter: 'blur(40px)',
              zIndex: 0
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
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: card.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                }}
                whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <card.icon size={22} color="white" />
              </motion.div>
              <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: '600' }}>{card.title}</h3>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 + index * 0.2 }}
              style={{ 
                fontSize: '0.95rem', 
                lineHeight: '1.6', 
                marginBottom: '1.25rem',
                opacity: 0.9
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
                    transition={{ delay: 1.3 + index * 0.2 + techIndex * 0.05 }}
                    whileHover={{ y: -3, scale: 1.1, boxShadow: `0 5px 15px ${tech.color}30` }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '20px',
                      background: activeCard === card.id ? 'rgba(255,255,255,0.1)' : 'var(--glass-bg)',
                      border: '1px solid var(--glass-border)'
                    }}
                  >
                    <tech.icon size={14} style={{ color: tech.color }} />
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