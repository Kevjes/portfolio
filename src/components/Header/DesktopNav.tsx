import React from 'react';
import { motion } from 'framer-motion';
import { NavItem } from './core/types';
import { 
  desktopNavContainerStyles, 
  navBackgroundHighlightStyles, 
  desktopNavStyles,
  navLinkStyles,
  activeIndicatorStyles,
  navItemGlowStyles,
  navIconStyles
} from './core/styles';

interface DesktopNavProps {
  navItems: NavItem[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems, activeSection, scrollToSection }) => {
  return (
    <div className="desktop-nav-container" style={desktopNavContainerStyles}>
      {/* Animated background highlight */}
      <motion.div 
        className="nav-background-highlight"
        style={navBackgroundHighlightStyles}
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
      <ul className="desktop-nav" style={desktopNavStyles}>
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
              style={navLinkStyles(activeSection === item.id)}
            >
              <item.icon size={16} style={navIconStyles(activeSection === item.id)} />
              {item.label}
              {activeSection === item.id && (
                <>
                  <motion.div
                    layoutId="activeIndicator"
                    className="active-indicator"
                    style={activeIndicatorStyles}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                  <motion.div
                    className="nav-item-glow"
                    style={navItemGlowStyles}
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
  );
};

export default DesktopNav;