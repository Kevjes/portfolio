import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCode, FaGlobe, FaHeart } from 'react-icons/fa';
import { SiFlutter, SiJavascript, SiNestjs } from 'react-icons/si';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { number: '2+', label: 'Années d\'expérience', icon: FaCode },
    { number: '10+', label: 'Projets réalisés', icon: FaGlobe },
    { number: '4', label: 'Technologies maîtrisées', icon: SiFlutter },
    { number: '100%', label: 'Passion pour le code', icon: FaHeart }
  ];

  const highlights = [
    {
      title: 'Formation Académique',
      description: 'Diplôme en Mathématiques avec une spécialisation en informatique',
      icon: FaGraduationCap,
      color: '#4facfe'
    },
    {
      title: 'Développement Flutter',
      description: 'Expert en développement d\'applications mobiles cross-platform avec Flutter',
      icon: SiFlutter,
      color: '#02569B'
    },
    {
      title: 'Développement Web',
      description: 'Développeur web chez Kiro\'o Games avec expertise en technologies modernes',
      icon: SiJavascript,
      color: '#F7DF1E'
    },
    {
      title: 'Backend & API',
      description: 'Compétences en NestJS et Java pour le développement backend',
      icon: SiNestjs,
      color: '#E0234E'
    }
  ];

  return (
    <section 
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '5rem 2rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background elements */}
      <div
        className="morphing-shape"
        style={{
          width: '250px',
          height: '250px',
          top: '15%',
          right: '5%',
          animationDelay: '1s',
          opacity: 0.05
        }}
      />
      <div
        className="morphing-shape"
        style={{
          width: '180px',
          height: '180px',
          bottom: '20%',
          left: '8%',
          animationDelay: '4s',
          opacity: 0.05
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.h2
            className="glass-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem'
            }}
          >
            À Propos de Moi
          </motion.h2>
          <motion.div
            style={{
              width: '100px',
              height: '3px',
              background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
              margin: '0 auto',
              borderRadius: '2px'
            }}
            initial={{ width: 0 }}
            animate={inView ? { width: '100px' } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <motion.h3
                className="glass-title"
                style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}
              >
                Développeur Passionné
              </motion.h3>
              
              <motion.p
                className="glass-text"
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  opacity: 0.9
                }}
              >
                Originaire du Cameroun, je suis un développeur Flutter et web avec plus de 2 ans d'expérience 
                dans la création d'applications mobiles et web innovantes. Ma passion pour la technologie 
                m'a conduit à maîtriser diverses technologies modernes.
              </motion.p>
              
              <motion.p
                className="glass-text"
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  opacity: 0.9
                }}
              >
                Actuellement développeur web chez <strong>Kiro'o Games</strong>, je me spécialise dans 
                le développement d'applications Android, iOS, web et Windows en utilisant le framework Flutter. 
                Mon approche professionnelle et ma rigueur me permettent de livrer des solutions de qualité.
              </motion.p>
              
              <motion.p
                className="glass-text"
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  opacity: 0.9
                }}
              >
                Avec un diplôme en mathématiques et une expertise en développement, je combine 
                logique analytique et créativité technique pour créer des expériences utilisateur 
                exceptionnelles.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ display: 'grid', gap: '1.5rem' }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${highlight.color}20, ${highlight.color}40)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <highlight.icon size={24} style={{ color: highlight.color }} />
                </div>
                <div>
                  <h4 
                    className="glass-title" 
                    style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}
                  >
                    {highlight.title}
                  </h4>
                  <p 
                    className="glass-text" 
                    style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: '1.6' }}
                  >
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                padding: '2rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  opacity: 0.1
                }}
              >
                <stat.icon size={40} />
              </motion.div>
              
              <motion.div
                className="glass-title"
                style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              
              <div 
                className="glass-text" 
                style={{ fontSize: '1rem', opacity: 0.8 }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;