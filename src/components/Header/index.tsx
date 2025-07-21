import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeaderProps } from './core/types';
import { navItems } from './core/data';
import { headerStyles, navStyles, buttonContainerStyles, globalStyles } from './core/styles';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import ThemeToggle from './ThemeToggle';
import MobileMenuButton from './MobileMenuButton';
import MobileNav from './MobileNav';

const Header: React.FC<HeaderProps> = ({ activeSection, isDarkTheme = true, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        className="glass-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={headerStyles(isScrolled)}
      >
        <nav style={navStyles}>
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav 
            navItems={navItems} 
            activeSection={activeSection} 
            scrollToSection={scrollToSection} 
          />

          {/* Theme Toggle and Mobile Menu Button Container */}
          <div style={buttonContainerStyles}>
            {/* Theme Toggle Button */}
            {toggleTheme && (
              <ThemeToggle 
                isDarkTheme={isDarkTheme} 
                toggleTheme={toggleTheme} 
                size="small" 
              />
            )}

            {/* Mobile Menu Button */}
            <MobileMenuButton 
              isOpen={isMobileMenuOpen} 
              toggleMenu={toggleMobileMenu} 
            />
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {toggleTheme && (
        <MobileNav 
          isOpen={isMobileMenuOpen}
          navItems={navItems}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          isDarkTheme={isDarkTheme}
          toggleTheme={toggleTheme}
        />
      )}

      <style>{globalStyles}</style>
    </>
  );
};

export default Header;