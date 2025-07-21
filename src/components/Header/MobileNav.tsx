import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from './core/types';
import ThemeToggle from './ThemeToggle';
import { 
  mobileMenuOverlayStyles, 
  decorativeShapeStyles, 
  mobileNavListStyles,
  mobileNavLinkStyles,
  mobileActiveIndicatorStyles,
  mobileActiveGlowStyles,
  navIconStyles,
  mobileThemeToggleContainerStyles
} from './core/styles';

interface MobileNavProps {
  isOpen: boolean;
  navItems: NavItem[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ 
  isOpen, 
  navItems, 
  activeSection, 
  scrollToSection,
  isDarkTheme,
  toggleTheme
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu-overlay"
          initial={{ clipPath: 'circle(0% at calc(100% - 2.8rem) 2.8rem)' }}
          animate={{ clipPath: 'circle(150% at calc(100% - 2.8rem) 2.8rem)' }}
          exit={{ clipPath: 'circle(0% at calc(100% - 2.8rem) 2.8rem)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={mobileMenuOverlayStyles}
        >
          {/* Decorative morphing shape 1 */}
          <motion.div
            style={decorativeShapeStyles('20%', '10%', '200px', '200px', '30% 70% 70% 30% / 30% 30% 70% 70%')}
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
              ...decorativeShapeStyles('auto', 'auto', '150px', '150px', '60% 40% 30% 70% / 60% 30% 70% 40%'),
              bottom: '15%',
              left: '10%',
              background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
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

          {/* Additional decorative elements */}
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
          
          <ul style={mobileNavListStyles}>
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
                  style={mobileNavLinkStyles(activeSection === item.id)}
                >
                  <motion.div 
                    style={{
                      ...mobileActiveIndicatorStyles,
                      opacity: activeSection === item.id ? 1 : 0,
                    }}
                    animate={{
                      height: activeSection === item.id ? '60%' : '0%',
                      opacity: activeSection === item.id ? 1 : 0
                    }}
                  />
                  <item.icon size={22} style={navIconStyles(activeSection === item.id)} />
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      style={mobileActiveGlowStyles}
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
            style={mobileThemeToggleContainerStyles}
          >
            <ThemeToggle 
              isDarkTheme={isDarkTheme} 
              toggleTheme={toggleTheme} 
              size="large" 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;