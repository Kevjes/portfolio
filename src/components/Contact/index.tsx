import React from 'react';
import { useInView } from 'react-intersection-observer';
import { containerStyles, contentContainerStyles, contentGridStyles } from './core/styles';
import BackgroundShapes from './BackgroundShapes';
import SectionTitle from './SectionTitle';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Footer from './Footer';

/**
 * Composant principal de la section Contact
 */
const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      ref={ref}
      style={containerStyles}
    >
      {/* Formes d'arrière-plan */}
      <BackgroundShapes />

      <div style={contentContainerStyles}>
        {/* Titre de la section */}
        <SectionTitle inView={inView} />

        <div style={contentGridStyles}>
          {/* Informations de contact et liens sociaux */}
          <ContactInfo inView={inView} />

          {/* Formulaire de contact */}
          <ContactForm inView={inView} />
        </div>

        {/* Pied de page */}
        <Footer inView={inView} />
      </div>
    </section>
  );
};

export default Contact;