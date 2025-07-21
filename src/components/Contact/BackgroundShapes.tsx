import React from 'react';
import { backgroundShapeStyles } from './core/styles';

/**
 * Composant pour les formes d'arrière-plan de la section Contact
 */
const BackgroundShapes: React.FC = () => {
  return (
    <>
      <div
        className="morphing-shape"
        style={backgroundShapeStyles('10%', '5%', undefined, undefined, '2s', '300px')}
      />
      <div
        className="morphing-shape"
        style={backgroundShapeStyles(undefined, undefined, '15%', '8%', '5s', '250px')}
      />
    </>
  );
};

export default BackgroundShapes;