import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { socialLinks } from './core/data';
import { profileContainerStyles } from './core/styles';

interface ProfileSectionProps {
  scrollToProjects: () => void;
  scrollToAbout: () => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ scrollToProjects }) => {
  // Motion values for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform values for light reflection effect
  const reflectionX = useTransform(mouseX, [-300, 300], [10, -10]);
  const reflectionY = useTransform(mouseY, [-300, 300], [10, -10]);
  
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
      className="glass-container enhanced"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      whileHover={{ 
        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)',
        y: -5
      }}
      style={{
        ...profileContainerStyles,
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2), inset 0 1px 0 0 rgba(255,255,255,0.3)',
        position: 'relative',
        overflow: 'hidden',
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
          transform: `translateX(${reflectionX}px) translateY(${reflectionY}px)`
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
          background: 'linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
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
      
      {/* Enhanced decorative elements */}
      <motion.div 
        className="decorative-orb"
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '200px',
          height: '200px',
          background: 'var(--primary-gradient)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.4,
          zIndex: 0,
          mixBlendMode: 'screen'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <motion.div 
        className="decorative-orb secondary"
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '150px',
          height: '150px',
          background: 'var(--secondary-gradient)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          opacity: 0.3,
          zIndex: 0,
          mixBlendMode: 'screen'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />
      
      {/* Profile Content with enhanced styling */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Profile Image and Name with enhanced styling */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.8rem', marginBottom: '2rem' }}>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.7,
              type: 'spring',
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.5)'
            }}
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: 'var(--primary-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.2rem',
              color: 'white',
              fontWeight: 'bold',
              border: '3px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Avatar reflection effect */}
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
                rotate: [0, 360],
              }}
              transition={{
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }
              }}
            />
            <span style={{ position: 'relative', zIndex: 1 }}>KT</span>
          </motion.div>
          
          <div>
            <motion.h1
              className="glass-title enhanced"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                marginBottom: '0.3rem',
                letterSpacing: '1.5px',
                fontWeight: '800',
                textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              KÉVIN TENE
            </motion.h1>
            <motion.h2
              className="glass-text enhanced"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                fontWeight: '500',
                opacity: 0.9,
                letterSpacing: '0.5px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}
            >
              Développeur Flutter & Web
            </motion.h2>
          </div>
        </div>
        
        {/* Bio with enhanced animated highlight */}
        <motion.p
          className="glass-text enhanced"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            lineHeight: '1.7',
            marginBottom: '2.5rem',
            maxWidth: '520px',
            position: 'relative',
            paddingLeft: '18px',
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '0 1px 3px rgba(0,0,0,0.15)'
          }}
        >
          <motion.span 
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              width: '4px',
              height: '100%',
              background: 'linear-gradient(180deg, var(--primary-color), transparent)',
              borderRadius: '4px',
              boxShadow: '0 0 8px rgba(123, 97, 255, 0.5)'
            }}
            animate={{ 
              height: ['0%', '100%'],
              opacity: [0, 1],
              boxShadow: [
                '0 0 5px rgba(123, 97, 255, 0.3)',
                '0 0 12px rgba(123, 97, 255, 0.6)',
                '0 0 5px rgba(123, 97, 255, 0.3)'
              ]
            }}
            transition={{ 
              delay: 1.2, 
              duration: 0.8,
              ease: 'easeOut',
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
          />
          Spécialisé dans le développement d'applications mobiles et web avec plus de 2 ans d'expérience. 
          Passionné par les technologies modernes et l'innovation.
        </motion.p>
        
        {/* Action Buttons with enhanced glass effect and animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          style={{
            display: 'flex',
            gap: '1.2rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap'
          }}
        >
          <motion.button
            className="glass-btn primary enhanced"
            onClick={scrollToProjects}
            whileHover={{ 
              scale: 1.05, 
              x: 5, 
              boxShadow: '0 10px 25px rgba(123, 97, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2)' 
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.9rem 1.8rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: 'var(--primary-gradient)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '50px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              textShadow: '0 1px 3px rgba(0,0,0,0.2)',
              letterSpacing: '0.5px',
              color: 'white'
            }}
          >
            {/* Enhanced reflection effect */}
            <motion.span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                transform: 'translateX(-100%)',
                zIndex: 0
              }}
              animate={{
                x: ['0%', '200%'],
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
            <span style={{ position: 'relative', zIndex: 1 }}>Voir mes projets</span>
            <FaArrowRight size={16} style={{ position: 'relative', zIndex: 1 }} />
          </motion.button>
          
          <motion.a
            href="/cv-kevin-tene.pdf"
            download
            className="glass-btn secondary enhanced"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25), inset 0 0 10px rgba(255, 255, 255, 0.2)' 
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.9rem 1.8rem',
              fontSize: '1rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '50px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              textShadow: '0 1px 3px rgba(0,0,0,0.2)',
              letterSpacing: '0.5px',
              color: 'white'
            }}
          >
            {/* Enhanced reflection effect */}
            <motion.span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                transform: 'translateX(-100%)',
                zIndex: 0
              }}
              animate={{
                x: ['0%', '200%'],
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 4,
                delay: 1
              }}
            />
            <FaDownload size={16} style={{ position: 'relative', zIndex: 1 }} />
            <span style={{ position: 'relative', zIndex: 1 }}>Télécharger CV</span>
          </motion.a>
        </motion.div>
        
        {/* Social Links with enhanced glass effect and animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          style={{
            display: 'flex',
            gap: '1.2rem'
          }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn social enhanced"
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.6 + index * 0.1,
                type: 'spring',
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: `0 10px 25px rgba(0, 0, 0, 0.25), inset 0 0 10px rgba(255, 255, 255, 0.3)`,
                backgroundColor: social.color || 'rgba(255, 255, 255, 0.15)'
              }}
              whileTap={{ scale: 0.9, rotate: 5 }}
              style={{
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                color: 'white'
              }}
            >
              {/* Enhanced reflection effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `radial-gradient(circle at 30% 30%, ${social.color}66 0%, transparent 70%)`,
                  opacity: 0.6,
                  zIndex: 0
                }}
                animate={{
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.5
                }}
              />
              <social.icon size={22} style={{ position: 'relative', zIndex: 1 }} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileSection;