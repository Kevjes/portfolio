import { CSSProperties } from 'react';

// Styles pour la section principale
export const sectionStyles: CSSProperties = {
  minHeight: '100vh',
  padding: '5rem 2rem',
  position: 'relative',
  overflow: 'hidden'
};

export const containerStyles: CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto'
};

// Styles pour les formes d'arrière-plan
export const backgroundShapeStyles = (top: string, left: string, size: string, delay: string): CSSProperties => ({
  width: size,
  height: size,
  top,
  left,
  animationDelay: delay,
  opacity: 0.05
});

// Styles pour le titre de section
export const sectionTitleContainerStyles: CSSProperties = {
  textAlign: 'center',
  marginBottom: '4rem'
};

export const sectionTitleStyles: CSSProperties = {
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  marginBottom: '1rem'
};

export const titleSeparatorStyles: CSSProperties = {
  width: '100px',
  height: '3px',
  background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
  margin: '0 auto',
  borderRadius: '2px'
};

export const titleDescriptionStyles: CSSProperties = {
  fontSize: '1.1rem',
  marginTop: '1.5rem',
  opacity: 0.8,
  maxWidth: '600px',
  margin: '1.5rem auto 0'
};

// Styles pour les onglets
export const tabsContainerStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '3rem',
  flexWrap: 'wrap',
  gap: '1rem'
};

export const tabButtonStyles = (isActive: boolean): CSSProperties => ({
  padding: '0.75rem 1.5rem',
  borderRadius: '30px',
  fontSize: '0.95rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  background: isActive ? 'linear-gradient(135deg, #4facfe, #00f2fe)' : 'rgba(255, 255, 255, 0.1)',
  border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
  color: isActive ? 'white' : 'rgba(255, 255, 255, 0.8)'
});

// Styles pour les cartes d'expérience
export const experienceGridStyles: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gap: '2rem',
  marginBottom: '4rem'
};

export const experienceCardStyles: CSSProperties = {
  padding: '2rem',
  borderRadius: '15px',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease'
};

export const cardHeaderStyles: CSSProperties = {
  marginBottom: '1.5rem'
};

export const cardTypeTagStyles = (color: string): CSSProperties => ({
  padding: '0.25rem 0.75rem',
  background: `${color}20`,
  borderRadius: '20px',
  fontSize: '0.8rem',
  fontWeight: '500',
  color: color,
  display: 'inline-block',
  marginBottom: '0.5rem'
});

export const cardTitleStyles: CSSProperties = {
  fontSize: '1.4rem',
  marginBottom: '0.5rem'
};

export const cardCompanyStyles = (color: string): CSSProperties => ({
  fontSize: '1.1rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
  color: color
});

export const cardMetaInfoStyles: CSSProperties = {
  display: 'flex',
  gap: '1rem',
  fontSize: '0.9rem',
  opacity: 0.7
};

export const metaItemStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem'
};

export const cardDescriptionListStyles: CSSProperties = {
  marginBottom: '1.5rem',
  paddingLeft: '1rem'
};

export const cardDescriptionItemStyles: CSSProperties = {
  fontSize: '0.95rem',
  lineHeight: '1.6',
  marginBottom: '0.5rem',
  opacity: 0.8
};

export const technologiesLabelStyles: CSSProperties = {
  fontSize: '0.9rem',
  marginBottom: '0.75rem',
  fontWeight: '600'
};

export const technologiesContainerStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem'
};

export const technologyTagStyles: CSSProperties = {
  padding: '0.25rem 0.75rem',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '15px',
  fontSize: '0.8rem',
  border: '1px solid rgba(255, 255, 255, 0.2)'
};

// Styles pour les réalisations
export const achievementsSectionStyles: CSSProperties = {
  marginTop: '5rem'
};

export const achievementsTitleStyles: CSSProperties = {
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '3rem'
};

export const achievementsGridStyles: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2rem'
};

export const achievementCardStyles: CSSProperties = {
  padding: '2rem',
  textAlign: 'center',
  borderRadius: '15px',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease'
};

export const achievementIconContainerStyles = (color: string): CSSProperties => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${color}40, ${color}20)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 1rem',
  border: `1px solid ${color}60`
});

export const achievementNumberStyles: CSSProperties = {
  fontSize: '2.5rem',
  marginBottom: '0.5rem',
  background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

export const achievementLabelStyles: CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: '600',
  marginBottom: '0.5rem'
};

export const achievementDescriptionStyles: CSSProperties = {
  fontSize: '0.9rem',
  opacity: 0.7
};

// Styles pour la timeline verticale (vue détaillée)
export const timelineContainerStyles: CSSProperties = {
  position: 'relative',
  maxWidth: '800px',
  margin: '0 auto'
};

export const timelineLineStyles: CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: 0,
  bottom: 0,
  width: '3px',
  background: 'linear-gradient(to bottom, #4facfe, #00f2fe, #f093fb)',
  transform: 'translateX(-50%)',
  borderRadius: '2px'
};

export const timelineItemStyles = (isEven: boolean): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '4rem',
  position: 'relative'
});

export const timelineDotStyles = (color: string): CSSProperties => ({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${color}, ${color}80)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '4px solid rgba(255, 255, 255, 0.2)',
  zIndex: 2
});

export const timelineContentStyles = (isEven: boolean): CSSProperties => ({
  width: '45%',
  marginLeft: isEven ? 0 : '55%'
});

// Styles responsifs
export const responsiveStyles = `
  @media (max-width: 768px) {
    .experience-grid {
      grid-template-columns: 1fr;
    }
    
    .timeline-item {
      flex-direction: column;
    }
    
    .timeline-content {
      width: 90% !important;
      margin-left: 0 !important;
      margin-top: 70px;
    }
    
    .timeline-dot {
      left: 50% !important;
      top: 0;
    }
    
    .timeline-line {
      left: 50% !important;
    }
    
    .achievements-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
  
  @media (max-width: 480px) {
    .tab-button {
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    }
    
    .achievements-grid {
      grid-template-columns: 1fr;
    }
  }
`;