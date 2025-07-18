import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

interface HeaderProps {
  activeSection: string;
  isDarkTheme?: boolean;
  toggleTheme?: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, isDarkTheme = true, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: FaHome },
    { id: 'about', label: 'À propos', icon: FaUser },
    { id: 'skills', label: 'Compétences', icon: FaCode },
    { id: 'experience', label: 'Expérience', icon: FaBriefcase },
    { id: 'projects', label: 'Projets', icon: FaProjectDiagram },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="glass-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          padding: isScrolled ? '0.5rem 1.5rem' : '0.75rem 1.5rem',
          background: isScrolled 
            ? 'var(--glass-bg)' 
            : 'rgba(255, 255, 255, 0.05)',
          backdropFilter: isScrolled ? 'blur(25px)' : 'blur(15px)',
          transition: 'all 0.3s ease',
          borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.15)' : 'none',
          borderRadius: isScrolled ? '0' : '0 0 20px 20px',
        }}
      >
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          {/* Logo */}
          <motion.div 
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              fontWeight: 'bold',
              fontSize: '1.8rem',
              background: 'var(--primary-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              position: 'relative',
              zIndex: 2
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={{ fontFamily: '"Poppins", sans-serif' }}>KT</span>
            <motion.span 
              style={{ 
                position: 'absolute', 
                width: '8px', 
                height: '8px', 
                background: 'var(--accent-gradient)', 
                borderRadius: '50%', 
                bottom: '2px', 
                right: '-8px' 
              }}
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: 'easeInOut' 
              }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="desktop-nav-container" style={{ 
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '0.25rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Animated background highlight */}
            <motion.div 
              className="nav-background-highlight"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                opacity: 0.5,
                zIndex: 0
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'linear'
              }}
            />
            <ul className="desktop-nav" style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              margin: 0, 
              padding: '0.25rem', 
              listStyle: 'none',
              position: 'relative',
              zIndex: 1
            }}>

              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <motion.a
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      textDecoration: 'none',
                      color: 'var(--text-primary)',
                      fontWeight: activeSection === item.id ? '600' : '400',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1rem',
                      borderRadius: '8px',
                      background: activeSection === item.id ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                      boxShadow: activeSection === item.id ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <item.icon size={16} style={{ 
                      opacity: activeSection === item.id ? 1 : 0.7,
                      color: activeSection === item.id ? 'var(--text-primary)' : 'var(--text-secondary)'
                    }} />
                    {item.label}
                    {activeSection === item.id && (
                      <>
                        <motion.div
                          layoutId="activeIndicator"
                          className="active-indicator"
                          style={{
                            position: 'absolute',
                            left: 0,
                            width: '3px',
                            height: '60%',
                            background: 'var(--accent-gradient)',
                            borderRadius: '0 4px 4px 0',
                          }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                        <motion.div
                          className="nav-item-glow"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                            zIndex: -1,
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </>
                    )}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle and Mobile Menu Button Container */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Theme Toggle Button */}
            {toggleTheme && (
              <motion.button
                className="theme-toggle-nav"
                onClick={toggleTheme}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  padding: 0,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                    zIndex: 0,
                  }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 0, 0.7]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: 'easeInOut' 
                  }}
                />
                <motion.div style={{ position: 'relative', zIndex: 1 }}>
                  {isDarkTheme ? <FaSun size={18} /> : <FaMoon size={18} />}
                </motion.div>
              </motion.button>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              className="mobile-menu-btn"
              style={{
                // display: 'none',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                padding: 0,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <IoClose size={24} />
              ) : (
                <motion.div
                  style={{
                    width: '20px',
                    height: '14px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <motion.span
                    style={{
                      width: '100%',
                      height: '2px',
                      background: 'var(--text-primary)',
                      borderRadius: '2px',
                      transformOrigin: 'left',
                    }}
                    animate={{
                      width: ['100%', '70%', '100%'],
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatType: 'mirror' 
                    }}
                  />
                  <motion.span
                    style={{
                      width: '70%',
                      height: '2px',
                      background: 'var(--text-primary)',
                      borderRadius: '2px',
                      alignSelf: 'flex-end',
                    }}
                    animate={{
                      width: ['70%', '100%', '70%'],
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatType: 'mirror' 
                    }}
                  />
                  <motion.span
                    style={{
                      width: '100%',
                      height: '2px',
                      background: 'var(--text-primary)',
                      borderRadius: '2px',
                      transformOrigin: 'left',
                    }}
                    animate={{
                      width: ['90%', '60%', '90%'],
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatType: 'mirror' 
                    }}
                  />
                </motion.div>
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ clipPath: 'circle(0% at calc(100% - 2.8rem) 2.8rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2.8rem) 2.8rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2.8rem) 2.8rem)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
              background: 'rgba(10, 10, 10, 0.9)',
              backdropFilter: 'blur(15px)',
              padding: '6rem 2rem 2rem 2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Decorative morphing shape 1 */}
            <motion.div
              style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '200px',
                height: '200px',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(20px)',
                zIndex: -1,
              }}
              animate={{
                borderRadius: [
                  '30% 70% 70% 30% / 30% 30% 70% 70%',
                  '70% 30% 30% 70% / 70% 70% 30% 30%',
                  '30% 70% 70% 30% / 30% 30% 70% 70%',
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            {/* Decorative morphing shape 2 */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '15%',
                left: '10%',
                width: '150px',
                height: '150px',
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              animate={{
                borderRadius: [
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                  '40% 60% 70% 30% / 40% 70% 30% 60%',
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Decorative elements */}
            <motion.div 
              className="morphing-shape" 
              style={{ 
                position: 'absolute', 
                top: '10%', 
                right: '10%', 
                width: '250px', 
                height: '250px', 
                borderRadius: '50%',
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                opacity: 0.3,
                zIndex: -1 
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            <motion.div 
              className="morphing-shape" 
              style={{ 
                position: 'absolute', 
                bottom: '10%', 
                left: '10%', 
                width: '200px', 
                height: '200px', 
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%)',
                opacity: 0.2,
                zIndex: -1 
              }}
              animate={{
                borderRadius: [
                  '30% 70% 70% 30% / 30% 30% 70% 70%',
                  '70% 30% 30% 70% / 70% 70% 30% 30%',
                  '30% 70% 70% 30% / 30% 30% 70% 70%'
                ],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            <ul style={{ 
              listStyle: 'none', 
              margin: 0, 
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              flex: 1
            }}>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <motion.a
                    href={`#${item.id}`}
                    className={`glass-text ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    whileHover={{ scale: 1.05, x: 8 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.2rem',
                      padding: '1.2rem 1.5rem',
                      borderRadius: '16px',
                      textDecoration: 'none',
                      color: 'var(--text-primary)',
                      fontWeight: activeSection === item.id ? '600' : '400',
                      fontSize: '1.2rem',
                      transition: 'all 0.3s ease',
                      background: activeSection === item.id 
                        ? 'rgba(255, 255, 255, 0.15)' 
                        : 'rgba(255, 255, 255, 0.05)',
                      boxShadow: activeSection === item.id 
                        ? '0 8px 20px rgba(0, 0, 0, 0.15)' 
                        : 'none',
                      border: activeSection === item.id 
                        ? '1px solid rgba(255, 255, 255, 0.2)' 
                        : '1px solid transparent',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div 
                      style={{
                        position: 'absolute',
                        top: '20%',
                        left: 0,
                        width: '5px',
                        height: '60%',
                        background: 'var(--accent-gradient)',
                        opacity: activeSection === item.id ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                        borderRadius: '0 4px 4px 0'
                      }}
                      animate={{
                        height: activeSection === item.id ? '60%' : '0%',
                        opacity: activeSection === item.id ? 1 : 0
                      }}
                    />
                    <item.icon size={22} style={{ 
                      opacity: activeSection === item.id ? 1 : 0.7,
                      color: activeSection === item.id ? 'var(--text-primary)' : 'var(--text-secondary)'
                    }} />
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'radial-gradient(circle at left center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                          zIndex: -1,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
            
            {/* Theme toggle in mobile menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginTop: '2rem',
                padding: '1.5rem 0',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {toggleTheme && (
                <motion.button
                  onClick={toggleTheme}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)' 
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-primary)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                      zIndex: 0,
                    }}
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: 'easeInOut' 
                    }}
                  />
                  <motion.div style={{ position: 'relative', zIndex: 1 }}>
                    {isDarkTheme ? <FaSun size={26} /> : <FaMoon size={26} />}
                  </motion.div>
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .glass-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .desktop-nav-container {
          transition: all 0.3s ease;
        }
        
        .desktop-nav-container:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }
        
        .desktop-nav a {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .desktop-nav a:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.1);
        }
        
        .theme-toggle-nav, .mobile-menu-btn {
          transition: all 0.3s ease;
        }
        
        .theme-toggle-nav:hover, .mobile-menu-btn:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }
        
        /* Animation for mobile menu items */
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-menu-overlay ul li {
          animation: slideIn 0.5s forwards;
        }
        
        .mobile-menu-overlay ul li:nth-child(1) { animation-delay: 0.1s; }
        .mobile-menu-overlay ul li:nth-child(2) { animation-delay: 0.2s; }
        .mobile-menu-overlay ul li:nth-child(3) { animation-delay: 0.3s; }
        .mobile-menu-overlay ul li:nth-child(4) { animation-delay: 0.4s; }
        .mobile-menu-overlay ul li:nth-child(5) { animation-delay: 0.5s; }
        .mobile-menu-overlay ul li:nth-child(6) { animation-delay: 0.6s; }
        
        @media (max-width: 768px) {
          .desktop-nav-container {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
          .glass-nav {
            left: 0 !important;
            right: 0 !important;
            padding: 0.5rem 1rem !important;
            justify-content: space-between !important;
          }
        }
        
        @media (max-width: 480px) {
          .glass-nav {
            padding: 0.5rem 0.75rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;