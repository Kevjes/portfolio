/**
 * Fonctions utilitaires pour les composants Hero
 */

/**
 * Fait défiler la page vers la section spécifiée
 * @param sectionId - L'ID de la section vers laquelle défiler
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Calcule la position de la souris par rapport au centre de l'écran
 * @param clientX - Position X de la souris
 * @param clientY - Position Y de la souris
 * @param offsetFactor - Facteur de réduction pour le mouvement
 * @returns Position relative de la souris
 */
export const calculateMousePosition = (
  clientX: number,
  clientY: number,
  offsetFactor: number = 15
): { x: number; y: number } => {
  const moveX = clientX - window.innerWidth / 2;
  const moveY = clientY - window.innerHeight / 2;
  
  return { 
    x: moveX / offsetFactor, 
    y: moveY / offsetFactor 
  };
};