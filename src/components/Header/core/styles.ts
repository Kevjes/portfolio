import { CSSProperties } from 'react';

// Styles pour le header principal
export const headerStyles = (isScrolled: boolean): CSSProperties => ({
  padding: isScrolled ? '0.5rem 1.5rem' : '0.75rem 1.5rem',
  background: isScrolled ? 'var(--glass-bg)' : 'rgba(255, 255, 255, 0.05)',
  backdropFilter: isScrolled ? 'blur(25px)' : 'blur(15px)',
  transition: 'all 0.3s ease',
  borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
  boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.15)' : 'none',
  borderRadius: isScrolled ? '0' : '0 0 20px 20px',
});

// Styles pour la navigation
export const navStyles: CSSProperties = {
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  width: '100%'
};

// Styles pour le logo
export const logoStyles: CSSProperties = {
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
};

// Styles pour le point du logo
export const logoDotStyles: CSSProperties = {
  position: 'absolute', 
  width: '8px', 
  height: '8px', 
  background: 'var(--accent-gradient)', 
  borderRadius: '50%', 
  bottom: '2px', 
  right: '-8px' 
};

// Styles pour le conteneur de navigation desktop
export const desktopNavContainerStyles: CSSProperties = {
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '12px',
  padding: '0.25rem',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  overflow: 'hidden'
};

// Styles pour le highlight d'arrière-plan de la navigation
export const navBackgroundHighlightStyles: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
  opacity: 0.5,
  zIndex: 0
};

// Styles pour la liste de navigation desktop
export const desktopNavStyles: CSSProperties = {
  display: 'flex', 
  gap: '0.5rem', 
  margin: 0, 
  padding: '0.25rem', 
  listStyle: 'none',
  position: 'relative',
  zIndex: 1
};

// Styles pour les liens de navigation
export const navLinkStyles = (isActive: boolean): CSSProperties => ({
  position: 'relative',
  overflow: 'hidden',
  textDecoration: 'none',
  color: 'var(--text-primary)',
  fontWeight: isActive ? '600' : '400',
  fontSize: '0.95rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.6rem 1rem',
  borderRadius: '8px',
  background: isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
  boxShadow: isActive ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
  transition: 'all 0.3s ease'
});

// Styles pour l'indicateur actif
export const activeIndicatorStyles: CSSProperties = {
  position: 'absolute',
  left: 0,
  width: '3px',
  height: '60%',
  background: 'var(--accent-gradient)',
  borderRadius: '0 4px 4px 0',
};

// Styles pour la lueur de l'élément de navigation
export const navItemGlowStyles: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
  zIndex: -1,
};

// Styles pour les icônes de navigation
export const navIconStyles = (isActive: boolean): CSSProperties => ({
  opacity: isActive ? 1 : 0.7,
  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)'
});

// Styles pour le conteneur des boutons
export const buttonContainerStyles: CSSProperties = {
  display: 'flex', 
  alignItems: 'center', 
  gap: '1rem'
};

// Styles pour le bouton de thème
export const themeToggleStyles: CSSProperties = {
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
};

// Styles pour la lueur du bouton de thème
export const themeToggleGlowStyles: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
  zIndex: 0,
};

// Styles pour le bouton du menu mobile
export const mobileMenuButtonStyles: CSSProperties = {
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
};

// Styles pour le conteneur des lignes du hamburger
export const hamburgerContainerStyles: CSSProperties = {
  width: '20px',
  height: '14px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

// Styles pour les lignes du hamburger
export const hamburgerLineStyles = (width: string = '100%'): CSSProperties => ({
  width,
  height: '2px',
  background: 'var(--text-primary)',
  borderRadius: '2px',
  transformOrigin: 'left',
});

// Styles pour l'overlay du menu mobile
export const mobileMenuOverlayStyles: CSSProperties = {
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
};

// Styles pour les formes décoratives
export const decorativeShapeStyles = (top: string, right: string, width: string, height: string, borderRadius: string): CSSProperties => ({
  position: 'absolute',
  top,
  right,
  width,
  height,
  borderRadius,
  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
  filter: 'blur(20px)',
  zIndex: -1,
});

// Styles pour la liste de navigation mobile
export const mobileNavListStyles: CSSProperties = {
  listStyle: 'none', 
  margin: 0, 
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  flex: 1
};

// Styles pour les liens de navigation mobile
export const mobileNavLinkStyles = (isActive: boolean): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  padding: '1.2rem 1.5rem',
  borderRadius: '16px',
  textDecoration: 'none',
  color: 'var(--text-primary)',
  fontWeight: isActive ? '600' : '400',
  fontSize: '1.2rem',
  transition: 'all 0.3s ease',
  background: isActive ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
  boxShadow: isActive ? '0 8px 20px rgba(0, 0, 0, 0.15)' : 'none',
  border: isActive ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent',
  position: 'relative',
  overflow: 'hidden'
});

// Styles pour l'indicateur actif mobile
export const mobileActiveIndicatorStyles: CSSProperties = {
  position: 'absolute',
  top: '20%',
  left: 0,
  width: '5px',
  height: '60%',
  background: 'var(--accent-gradient)',
  opacity: 1,
  transition: 'opacity 0.3s ease',
  borderRadius: '0 4px 4px 0'
};

// Styles pour la lueur de l'élément actif mobile
export const mobileActiveGlowStyles: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'radial-gradient(circle at left center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
  zIndex: -1,
};

// Styles pour le conteneur du bouton de thème mobile
export const mobileThemeToggleContainerStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '2rem',
  padding: '1.5rem 0',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
};

// Styles pour le bouton de thème mobile
export const mobileThemeToggleStyles: CSSProperties = {
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
};

// CSS pour les animations et les styles responsifs
export const globalStyles = `
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
`;