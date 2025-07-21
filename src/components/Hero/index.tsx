import React, { useState, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
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
  
  // const scrollToContact = () => scrollToSection('contact');
  const scrollToProjects = () => scrollToSection('projects');
  const scrollToAbout = () => scrollToSection('about');

  return (
    <section id="home" style={containerStyles}>
      {/* Background morphing shapes */}
      <BackgroundShapes mousePosition={mousePosition} />

      <div style={contentContainerStyles}>
        <div style={columnContainerStyles}>
          {/* Hero Main Content */}
          <div className="container mx-auto" style={rowContainerStyles}>
            {/* Left Column - Profile */}
            <ProfileSection 
              scrollToProjects={scrollToProjects} 
              scrollToAbout={scrollToAbout} 
            />
            
            {/* Right Column - Expertise Cards */}
            <ExpertiseCards expertiseControls={expertiseControls} />
          </div>
          
          {/* Enhanced scroll indicator */}
          <ScrollIndicator scrollToAbout={scrollToAbout} />
        </div>
      </div>
    </section>
  );
};

export default Hero;