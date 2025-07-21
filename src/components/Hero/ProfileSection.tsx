import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { socialLinks } from './core/data';
import { profileContainerStyles } from './core/styles';

interface ProfileSectionProps {
  scrollToProjects: () => void;
  scrollToAbout: () => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ scrollToProjects }) => {
  // Using socialLinks from data.ts

  return (
    <motion.div
      className="glass-container"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      whileHover={{ 
        boxShadow: '0 15px 30px -10px rgba(0,0,0,0.3)',
        y: -5
      }}
      style={profileContainerStyles}
    >
      {/* Decorative gradient bar */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1.5" 
        style={{ 
          background: 'linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
          opacity: 0.8,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '1.5px'
        }}
        animate={{
          opacity: [0.6, 0.9, 0.6],
          width: ['100%', '95%', '100%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      {/* Decorative element */}
      <div 
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '150px',
          height: '150px',
          background: 'var(--primary-gradient)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          opacity: 0.3,
          zIndex: 0
        }}
      />
      
      {/* Profile Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Profile Image and Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'var(--primary-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: 'white',
              fontWeight: 'bold',
              border: '3px solid var(--glass-border)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
            }}
          >
            KT
          </motion.div>
          
          <div>
            <motion.h1
              className="glass-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                marginBottom: '0.25rem',
                letterSpacing: '1px'
              }}
            >
              KÉVIN TENE
            </motion.h1>
            <motion.h2
              className="glass-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: '400',
                opacity: 0.9
              }}
            >
              Développeur Flutter & Web
            </motion.h2>
          </div>
        </div>
        
        {/* Bio with animated highlight */}
        <motion.p
          className="glass-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            lineHeight: '1.6',
            marginBottom: '2rem',
            maxWidth: '500px',
            position: 'relative',
            paddingLeft: '15px'
          }}
        >
          <motion.span 
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              width: '3px',
              height: '100%',
              background: 'linear-gradient(180deg, var(--primary-color), transparent)',
              borderRadius: '4px'
            }}
            animate={{ 
              height: ['0%', '100%'],
              opacity: [0, 1]
            }}
            transition={{ 
              delay: 1.2, 
              duration: 0.8,
              ease: 'easeOut'
            }}
          />
          Spécialisé dans le développement d'applications mobiles et web avec plus de 2 ans d'expérience. 
          Passionné par les technologies modernes et l'innovation.
        </motion.p>
        
        {/* Action Buttons with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}
        >
          <motion.button
            className="glass-btn primary"
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, x: 5, boxShadow: '0 8px 20px rgba(123, 97, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.8rem 1.5rem',
              fontSize: '0.95rem',
              fontWeight: '500',
              background: 'var(--primary-gradient)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <motion.span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)',
                opacity: 0
              }}
              whileHover={{
                opacity: 1,
                scale: 1.5,
                transition: { duration: 0.4 }
              }}
            />
            Voir mes projets
            <FaArrowRight size={14} />
          </motion.button>
          
          <motion.a
            href="/cv-kevin-tene.pdf"
            download
            className="glass-btn secondary"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.8rem 1.5rem',
              fontSize: '0.95rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <motion.span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
                opacity: 0
              }}
              whileHover={{
                opacity: 1,
                scale: 1.5,
                transition: { duration: 0.4 }
              }}
            />
            <FaDownload size={14} />
            Télécharger CV
          </motion.a>
        </motion.div>
        
        {/* Social Links with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          style={{
            display: 'flex',
            gap: '1rem'
          }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn"
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
                boxShadow: `0 8px 20px rgba(0, 0, 0, 0.2)`,
                backgroundColor: social.color || 'var(--glass-bg)'
              }}
              whileTap={{ scale: 0.9, rotate: 5 }}
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.span
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `radial-gradient(circle at center, ${social.color}33 0%, transparent 70%)`,
                  opacity: 0
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.5,
                  transition: { duration: 0.4 }
                }}
              />
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileSection;