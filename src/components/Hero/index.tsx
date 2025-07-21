import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import BackgroundShapes from './BackgroundShapes';
import ProfileSection from './ProfileSection';
import ExpertiseCards from './ExpertiseCards';
import ScrollIndicator from './ScrollIndicator';
import { containerStyles, contentContainerStyles, columnContainerStyles, rowContainerStyles } from './core/styles';
import { scrollToSection, calculateMousePosition } from './core/utils';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const profileControls = useAnimation();
  const expertiseControls = useAnimation();
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Scroll-based animations
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  
  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition(calculateMousePosition(e.clientX, e.clientY));
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Apply parallax effect to profile and expertise sections
  useEffect(() => {
    profileControls.start({ 
      x: -mousePosition.x * 0.5, // Move in opposite direction of mouse (subtle)
      y: -mousePosition.y * 0.5,
      transition: { type: 'spring', stiffness: 75, damping: 30, mass: 0.5 }
    });
    
    expertiseControls.start({ 
      x: mousePosition.x * 0.3, // Move with mouse (subtle)
      y: mousePosition.y * 0.3,
      transition: { type: 'spring', stiffness: 75, damping: 30, mass: 0.5 }
    });
  }, [mousePosition, profileControls, expertiseControls]);
  
  const scrollToProjects = () => scrollToSection('projects');
  const scrollToAbout = () => scrollToSection('about');

  return (
    <motion.section 
      id="home" 
      ref={heroRef}
      style={{
        ...containerStyles,
        opacity,
        y,
        scale,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background morphing shapes */}
      <BackgroundShapes mousePosition={mousePosition} />
      
      {/* Ambient light effect */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          background: 'radial-gradient(circle, rgba(123, 97, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.6,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <motion.div 
        style={contentContainerStyles}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div style={columnContainerStyles}>
          {/* Hero Main Content */}
          <div className="container mx-auto" style={rowContainerStyles}>
            {/* Left Column - Profile */}
            <motion.div
              style={{
                transform: `translateX(${mousePosition.x * -0.02}px) translateY(${mousePosition.y * -0.02}px)`,
              }}
            >
              <ProfileSection 
                scrollToProjects={scrollToProjects} 
                scrollToAbout={scrollToAbout} 
              />
            </motion.div>
            
            {/* Right Column - Expertise Cards */}
            <motion.div
              style={{
                transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`,
                flex: 1,
              }}
            >
              <ExpertiseCards expertiseControls={expertiseControls} />
            </motion.div>
          </div>
          
          {/* Enhanced scroll indicator */}
          <ScrollIndicator scrollToAbout={scrollToAbout} />
        </div>
      </motion.div>
      
      {/* Glass lens flare effect */}
      <motion.div
        style={{
          position: 'absolute',
          top: `calc(50% + ${mousePosition.y * 0.1}px)`,
          left: `calc(50% + ${mousePosition.x * 0.1}px)`,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: 0.5,
          zIndex: 5,
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.section>
  );
}

export default Hero;