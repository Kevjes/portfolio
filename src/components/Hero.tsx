import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaCode, FaMobile, FaServer, FaChevronDown } from 'react-icons/fa';
import { SiFlutter, SiReact, SiTypescript, SiDart, SiJavascript, SiNodedotjs, SiExpress, SiNestjs } from 'react-icons/si';

const Hero: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const profileControls = useAnimation();
  const expertiseControls = useAnimation();
  
  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      const offsetFactor = 15; // Lower value for more subtle movement
      
      setMousePosition({ 
        x: moveX / offsetFactor, 
        y: moveY / offsetFactor 
      });
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
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/kevin-tene/',
      label: 'LinkedIn',
      color: '#0077B5'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/kevintene',
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:contact@kevintene.com',
      label: 'Email',
      color: '#EA4335'
    }
  ];

  const expertiseCards = [
    { 
      id: 1,
      icon: FaMobile, 
      title: 'Mobile', 
      description: 'Développement d\'applications mobiles cross-platform performantes et intuitives.',
      technologies: [{ icon: SiFlutter, name: 'Flutter', color: '#54C5F8' }, { icon: SiDart, name: 'Dart', color: '#0175C2' }],
      gradient: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
      gradientFrom: '#6A11CB',
      gradientTo: '#2575FC'
    },
    { 
      id: 2,
      icon: FaCode, 
      title: 'Web', 
      description: 'Création d\'interfaces web modernes, réactives et accessibles.',
      technologies: [{ icon: SiReact, name: 'React', color: '#61DAFB' }, { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' }, { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' }],
      gradient: 'linear-gradient(135deg, #FF4E50 0%, #F9D423 100%)',
      gradientFrom: '#FF4E50',
      gradientTo: '#F9D423'
    },
    { 
      id: 3,
      icon: FaServer, 
      title: 'Backend', 
      description: 'Développement d\'APIs robustes et évolutives pour vos applications.',
      technologies: [{ icon: SiNodedotjs, name: 'Node.js', color: '#339933' }, { icon: SiExpress, name: 'Express', color: '#000000' }, { icon: SiNestjs, name: 'NestJS', color: '#E0234E' }],
      gradient: 'linear-gradient(135deg, #11998E 0%, #38EF7D 100%)',
      gradientFrom: '#11998E',
      gradientTo: '#38EF7D'
    }
  ];

  // Create a floating animation for the background shapes
  const floatY = useMotionValue(0);
  const floatAnimation = useTransform(floatY, [-10, 10], [-10, 10]);
  
  useEffect(() => {
    const animateFloat = () => {
      floatY.set(Math.sin(Date.now() / 1000) * 10);
      requestAnimationFrame(animateFloat);
    };
    
    const animationId = requestAnimationFrame(animateFloat);
    return () => cancelAnimationFrame(animationId);
  }, [floatY]);

  return (
    <section id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background morphing shapes with enhanced animations */}
      <motion.div
        className="morphing-shape"
        animate={{
          borderRadius: [
            "60% 40% 30% 70%/60% 30% 70% 40%",
            "30% 60% 70% 40%/50% 60% 30% 60%",
            "60% 40% 30% 70%/60% 30% 70% 40%"
          ],
          rotate: [0, 180, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          scale: {
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }
        }}
        style={{
          width: '300px',
          height: '300px',
          position: 'absolute',
          top: '10%',
          left: '5%',
          opacity: 0.15,
          filter: 'blur(40px)',
          background: 'var(--primary-gradient)',
          x: mousePosition.x * -0.2,
          y: mousePosition.y * -0.2,
        }}
      />
      <motion.div
        className="morphing-shape"
        animate={{
          borderRadius: [
            "50% 50% 50% 70%/50% 50% 70% 60%",
            "80% 30% 50% 50%/50% 40% 60% 50%",
            "50% 50% 50% 70%/50% 50% 70% 60%"
          ],
          rotate: [180, 0, 180],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
          scale: {
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }
        }}
        style={{
          width: '200px',
          height: '200px',
          position: 'absolute',
          top: '60%',
          right: '10%',
          opacity: 0.15,
          filter: 'blur(40px)',
          background: 'linear-gradient(135deg, #FF4E50 0%, #F9D423 100%)',
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
        }}
      />
      <motion.div
        className="morphing-shape"
        animate={{
          borderRadius: [
            "40% 60% 60% 40%/60% 30% 70% 40%",
            "60% 40% 40% 60%/30% 60% 40% 70%",
            "40% 60% 60% 40%/60% 30% 70% 40%"
          ],
          rotate: [0, 180, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          scale: {
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
          }
        }}
        style={{
          width: '150px',
          height: '150px',
          position: 'absolute',
          top: '20%',
          right: '20%',
          opacity: 0.15,
          filter: 'blur(40px)',
          background: 'linear-gradient(135deg, #11998E 0%, #38EF7D 100%)',
          x: mousePosition.x * 0.15,
          y: mousePosition.y * 0.15,
        }}
      />

      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Hero Main Content */}
          <div className="container mx-auto" style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: '2rem',
            flexWrap: 'wrap',
            zIndex: 10
          }}>
            {/* Left Column - Profile */}
            <motion.div
              className="glass-container"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ 
                boxShadow: '0 15px 30px -10px rgba(0,0,0,0.3)',
                y: -5
              }}
              style={{
                flex: '1',
                minWidth: '300px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px'
              }}
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
            
            {/* Right Column - Expertise Cards with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, ...expertiseControls }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{
                flex: '1',
                minWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
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
          </div>
          
          {/* Enhanced scroll indicator with animations */}
          <motion.div 
            style={{ 
              alignSelf: 'center',
              marginTop: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              opacity: 0.8,
              cursor: 'pointer'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            onClick={scrollToAbout}
            whileHover={{ scale: 1.1, y: -3 }}
          >
            <motion.div 
              style={{ 
                width: '32px', 
                height: '52px', 
                border: '2px solid rgba(255, 255, 255, 0.4)', 
                borderRadius: '18px',
                display: 'flex',
                justifyContent: 'center',
                padding: '0.5rem 0',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}
              whileHover={{ 
                boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(255, 255, 255, 0.6)'
              }}
            >
              <motion.div 
                style={{ 
                  width: '6px', 
                  height: '10px', 
                  backgroundColor: 'white', 
                  borderRadius: '6px',
                  marginTop: '5px',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                }}
                animate={{ 
                  y: [0, 18, 0],
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    '0 0 5px rgba(255, 255, 255, 0.3)',
                    '0 0 15px rgba(255, 255, 255, 0.7)',
                    '0 0 5px rgba(255, 255, 255, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 1.8, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
              />
            </motion.div>
            <motion.div
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.9rem',
                fontWeight: '500',
                color: 'rgba(255, 255, 255, 0.8)',
                letterSpacing: '0.05em'
              }}
              animate={{ 
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
            >
              <span>SCROLL</span>
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: 'easeInOut',
                  delay: 0.2
                }}
              >
                <FaChevronDown size={12} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;