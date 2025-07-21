/**
 * Styles pour les composants de la section Contact
 */

import { CSSProperties } from 'react';

/**
 * Style du conteneur principal de la section Contact
 */
export const containerStyles: CSSProperties = {
  minHeight: '100vh',
  padding: '5rem 2rem',
  position: 'relative'
};

/**
 * Style du conteneur de contenu
 */
export const contentContainerStyles: CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto'
};

/**
 * Style du titre de section
 */
export const sectionTitleStyles: CSSProperties = {
  textAlign: 'center',
  marginBottom: '4rem'
};

/**
 * Style du titre principal
 */
export const mainTitleStyles: CSSProperties = {
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  marginBottom: '1rem'
};

/**
 * Style de la barre de séparation
 */
export const separatorStyles: CSSProperties = {
  width: '100px',
  height: '3px',
  background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
  margin: '0 auto',
  borderRadius: '2px'
};

/**
 * Style du texte de description
 */
export const descriptionStyles: CSSProperties = {
  fontSize: '1.1rem',
  marginTop: '1.5rem',
  opacity: 0.8,
  maxWidth: '600px',
  margin: '1.5rem auto 0'
};

/**
 * Style de la grille de contenu
 */
export const contentGridStyles: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '3rem',
  alignItems: 'start'
};

/**
 * Style du titre de section secondaire
 */
export const sectionSubtitleStyles: CSSProperties = {
  fontSize: '1.5rem',
  marginBottom: '2rem'
};

/**
 * Style de la carte d'information de contact
 */
export const contactCardStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1.5rem',
  marginBottom: '1rem',
  textDecoration: 'none',
  transition: 'all 0.3s ease'
};

/**
 * Style de l'icône de contact
 */
export const contactIconContainerStyles = (color: string): CSSProperties => ({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${color}40, ${color}20)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${color}60`
});

/**
 * Style du label d'information
 */
export const infoLabelStyles: CSSProperties = {
  fontSize: '0.9rem',
  opacity: 0.7,
  marginBottom: '0.25rem'
};

/**
 * Style de la valeur d'information
 */
export const infoValueStyles: CSSProperties = {
  fontSize: '1rem'
};

/**
 * Style du titre des réseaux sociaux
 */
export const socialTitleStyles: CSSProperties = {
  fontSize: '1.2rem',
  marginBottom: '1.5rem'
};

/**
 * Style du conteneur des liens sociaux
 */
export const socialLinksContainerStyles: CSSProperties = {
  display: 'flex',
  gap: '1rem'
};

/**
 * Style d'un lien social
 */
export const socialLinkStyles: CSSProperties = {
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none'
};

/**
 * Style du formulaire de contact
 */
export const formContainerStyles: CSSProperties = {
  padding: '2rem'
};

/**
 * Style du groupe de champs de formulaire
 */
export const formGroupStyles: CSSProperties = {
  marginBottom: '1.5rem'
};

/**
 * Style du groupe de champs de formulaire pour le message
 */
export const messageFormGroupStyles: CSSProperties = {
  marginBottom: '2rem'
};

/**
 * Style du label de champ de formulaire
 */
export const formLabelStyles: CSSProperties = {
  display: 'block',
  marginBottom: '0.5rem',
  fontSize: '0.9rem'
};

/**
 * Style des champs de saisie
 */
export const inputStyles: CSSProperties = {
  width: '100%',
  padding: '1rem',
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '10px',
  color: 'white',
  fontSize: '1rem',
  outline: 'none',
  transition: 'all 0.3s ease'
};

/**
 * Style du champ de saisie de message
 */
export const textareaStyles: CSSProperties = {
  ...inputStyles,
  resize: 'vertical',
  minHeight: '120px'
};

/**
 * Style du conteneur de statut du formulaire
 */
export const formStatusContainerStyles = (type: 'success' | 'error' | 'loading'): CSSProperties => ({
  padding: '1rem',
  borderRadius: '10px',
  marginBottom: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  background: type === 'success' 
    ? 'rgba(76, 175, 80, 0.2)' 
    : type === 'error'
    ? 'rgba(244, 67, 54, 0.2)'
    : 'rgba(255, 193, 7, 0.2)',
  border: `1px solid ${type === 'success' 
    ? '#4CAF50' 
    : type === 'error'
    ? '#F44336'
    : '#FFC107'}40`
});

/**
 * Style du message de statut
 */
export const statusMessageStyles: CSSProperties = {
  fontSize: '0.9rem'
};

/**
 * Style du bouton d'envoi
 */
export const submitButtonStyles = (isLoading: boolean): CSSProperties => ({
  width: '100%',
  padding: '1rem 2rem',
  background: isLoading 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'linear-gradient(135deg, #4facfe, #00f2fe)',
  border: 'none',
  borderRadius: '10px',
  color: 'white',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: isLoading ? 'not-allowed' : 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  opacity: isLoading ? 0.7 : 1,
  transition: 'all 0.3s ease'
});

/**
 * Style du conteneur des points de chargement
 */
export const loadingDotsContainerStyles: CSSProperties = {
  display: 'flex',
  gap: '0.25rem'
};

/**
 * Style d'un point de chargement
 */
export const loadingDotStyles = (delay: string = '0s', color: string = 'white'): CSSProperties => ({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: color,
  animation: 'bounce 1.4s ease-in-out infinite',
  animationDelay: delay
});

/**
 * Style du pied de page
 */
export const footerStyles: CSSProperties = {
  textAlign: 'center',
  marginTop: '4rem',
  paddingTop: '2rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
};

/**
 * Style du texte de copyright
 */
export const copyrightStyles: CSSProperties = {
  opacity: 0.6,
  fontSize: '0.9rem'
};

/**
 * Style des formes d'arrière-plan
 */
export const backgroundShapeStyles = (top?: string, left?: string, bottom?: string, right?: string, delay?: string, size?: string): CSSProperties => ({
  width: size || '300px',
  height: size || '300px',
  top: top,
  left: left,
  bottom: bottom,
  right: right,
  animationDelay: delay,
  opacity: 0.03
});