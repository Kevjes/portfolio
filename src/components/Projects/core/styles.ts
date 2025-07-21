import { css } from '@emotion/react';

export const styles = {
  section: {
    minHeight: '100vh',
    padding: '5rem 2rem',
    position: 'relative' as const
  },
  
  container: {
    maxWidth: '1400px',
    margin: '0 auto'
  },
  
  // Background shapes
  morphingShape: (top?: string, left?: string, right?: string, bottom?: string, delay?: string) => ({
    width: '250px',
    height: '250px',
    top: top || 'auto',
    left: left || 'auto',
    right: right || 'auto',
    bottom: bottom || 'auto',
    animationDelay: delay || '0s',
    opacity: 0.05,
    position: 'absolute' as const
  }),
  
  // Section title
  titleContainer: {
    textAlign: 'center' as const,
    marginBottom: '4rem'
  },
  
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    marginBottom: '1rem'
  },
  
  titleUnderline: {
    width: '100px',
    height: '3px',
    background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
    margin: '0 auto',
    borderRadius: '2px'
  },
  
  // Category filter
  categoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
    flexWrap: 'wrap' as const,
    gap: '1rem'
  },
  
  categoryButton: (isSelected: boolean) => ({
    padding: '1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: isSelected 
      ? 'linear-gradient(135deg, #4facfe40, #00f2fe20)'
      : 'rgba(255, 255, 255, 0.1)',
    border: isSelected 
      ? '1px solid #4facfe60'
      : '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease'
  }),
  
  categoryIcon: {
    size: 18
  },
  
  categoryLabel: {
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  
  // Projects grid
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  },
  
  // Project card
  projectCard: {
    padding: '0',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  
  projectImageContainer: (color: string) => ({
    height: '200px',
    background: `linear-gradient(135deg, ${color}40, ${color}20)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as const,
    overflow: 'hidden'
  }),
  
  projectIcon: (color: string) => ({
    fontSize: '4rem',
    opacity: 0.3,
    color: color
  }),
  
  statusBadge: (color: string) => ({
    position: 'absolute' as const,
    top: '1rem',
    right: '1rem',
    padding: '0.25rem 0.75rem',
    background: color,
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'white'
  }),
  
  projectContent: {
    padding: '2rem'
  },
  
  projectTitle: {
    fontSize: '1.3rem',
    marginBottom: '0.75rem'
  },
  
  projectDescription: {
    fontSize: '0.95rem',
    opacity: 0.8,
    marginBottom: '1.5rem',
    lineHeight: '1.6'
  },
  
  // Technologies
  technologiesContainer: {
    marginBottom: '1.5rem'
  },
  
  technologiesTitle: {
    fontSize: '0.9rem',
    marginBottom: '0.75rem',
    fontWeight: '600'
  },
  
  technologiesList: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem'
  },
  
  technologyBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.25rem 0.75rem',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    fontSize: '0.8rem',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  
  // Action buttons
  actionButtonsContainer: {
    display: 'flex',
    gap: '0.75rem'
  },
  
  detailsButton: {
    padding: '0.5rem 1rem',
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    flex: 1
  },
  
  iconButton: {
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none'
  },
  
  // Modal
  modalOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '2rem'
  },
  
  modalContainer: {
    maxWidth: '800px',
    maxHeight: '90vh',
    overflow: 'auto',
    padding: '2rem'
  },
  
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '2rem'
  },
  
  modalTitle: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  },
  
  modalStatusBadge: (color: string) => ({
    padding: '0.25rem 0.75rem',
    background: color,
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'white',
    display: 'inline-block'
  }),
  
  closeButton: {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem'
  },
  
  modalDescription: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    marginBottom: '2rem'
  },
  
  // Features section
  featuresSection: {
    marginBottom: '2rem'
  },
  
  featuresTitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem'
  },
  
  featuresList: {
    paddingLeft: '1.5rem'
  },
  
  featureItem: {
    marginBottom: '0.5rem',
    lineHeight: '1.6'
  },
  
  // Technologies section in modal
  modalTechnologiesSection: {
    marginBottom: '2rem'
  },
  
  modalTechnologiesTitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem'
  },
  
  modalTechnologiesList: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '1rem'
  },
  
  modalTechnologyBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  
  // Modal action buttons
  modalActionsContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  
  githubButton: {
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none'
  },
  
  liveButton: {
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    background: 'linear-gradient(135deg, #4facfe, #00f2fe)'
  }
};

// Global styles for the Projects component
export const globalStyles = css`
  @keyframes morphing {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }
  
  .morphing-shape {
    position: absolute;
    background: linear-gradient(45deg, #4facfe, #00f2fe);
    animation: morphing 15s ease-in-out infinite;
    z-index: -1;
  }
  
  .glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .glass-container {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
  
  .glass-btn {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .glass-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .glass-title {
    color: white;
    font-weight: 700;
  }
  
  .glass-text {
    color: rgba(255, 255, 255, 0.9);
  }
  
  @media (max-width: 768px) {
    .glass-card {
      width: 100%;
    }
    
    .glass-container {
      width: 90%;
      max-height: 80vh;
    }
  }
`;