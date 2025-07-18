import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaGamepad } from 'react-icons/fa';
import { SiFlutter, SiJavascript, SiNestjs } from 'react-icons/si';

interface ExperienceItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  icon: React.ComponentType<any>;
  color: string;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences: ExperienceItem[] = [
    {
      id: 'kiroo-games',
      type: 'work',
      title: 'Développeur Web',
      company: 'Kiro\'o Games',
      location: 'Cameroun',
      period: '2022 - Présent',
      description: [
        'Développement d\'applications web modernes pour l\'industrie du gaming',
        'Collaboration avec l\'équipe de développement sur des projets innovants',
        'Optimisation des performances et de l\'expérience utilisateur',
        'Intégration d\'APIs et services backend pour les jeux'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'API REST'],
      icon: FaGamepad,
      color: '#4facfe'
    },
    {
      id: 'flutter-dev',
      type: 'work',
      title: 'Développeur Flutter Freelance',
      company: 'Projets Indépendants',
      location: 'Remote',
      period: '2021 - Présent',
      description: [
        'Développement d\'applications mobiles cross-platform avec Flutter',
        'Création d\'applications Android, iOS, Web et Windows',
        'Gestion complète des projets de la conception au déploiement',
        'Plus de 2 ans d\'expérience avec des clients internationaux'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
      icon: SiFlutter,
      color: '#02569B'
    },
    {
      id: 'backend-dev',
      type: 'work',
      title: 'Développeur Backend Junior',
      company: 'Projets Personnels',
      location: 'Cameroun',
      period: '2020 - 2022',
      description: [
        'Développement d\'APIs REST avec NestJS et Java',
        'Conception et implémentation de bases de données',
        'Apprentissage des architectures microservices',
        'Intégration de services tiers et authentification'
      ],
      technologies: ['NestJS', 'Java', 'PostgreSQL', 'MongoDB'],
      icon: FaCode,
      color: '#E0234E'
    },
    {
      id: 'mathematics-degree',
      type: 'education',
      title: 'Diplôme en Mathématiques',
      company: 'Université',
      location: 'Cameroun',
      period: '2018 - 2021',
      description: [
        'Formation solide en mathématiques appliquées et théoriques',
        'Spécialisation en informatique et programmation',
        'Développement de la logique analytique et de résolution de problèmes',
        'Projets de programmation et algorithmes avancés'
      ],
      technologies: ['Python', 'Algorithmes', 'Statistiques', 'Logique'],
      icon: FaGraduationCap,
      color: '#667eea'
    }
  ];

  const achievements = [
    {
      number: '2+',
      label: 'Années d\'expérience',
      description: 'En développement Flutter et Web'
    },
    {
      number: '10+',
      label: 'Projets réalisés',
      description: 'Applications mobiles et web'
    },
    {
      number: '4',
      label: 'Plateformes',
      description: 'Android, iOS, Web, Windows'
    },
    {
      number: '100%',
      label: 'Satisfaction client',
      description: 'Projets livrés avec succès'
    }
  ];

  return (
    <section 
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '5rem 2rem',
        position: 'relative'
      }}
    >
      {/* Background elements */}
      <div
        className="morphing-shape"
        style={{
          width: '220px',
          height: '220px',
          top: '20%',
          right: '8%',
          animationDelay: '3s',
          opacity: 0.05
        }}
      />
      <div
        className="morphing-shape"
        style={{
          width: '180px',
          height: '180px',
          bottom: '25%',
          left: '5%',
          animationDelay: '6s',
          opacity: 0.05
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            Expérience Professionnelle
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

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <motion.div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '3px',
              background: 'linear-gradient(to bottom, #4facfe, #00f2fe, #f093fb)',
              transform: 'translateX(-50%)',
              borderRadius: '2px'
            }}
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '4rem',
                position: 'relative'
              }}
            >
              {/* Timeline dot */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${exp.color}, ${exp.color}80)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '4px solid rgba(255, 255, 255, 0.2)',
                  zIndex: 2
                }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <exp.icon size={24} color="white" />
              </motion.div>

              {/* Content */}
              <div
                style={{
                  width: '45%',
                  marginLeft: index % 2 === 0 ? 0 : '55%'
                }}
              >
                <motion.div
                  className="glass-card"
                  style={{ padding: '2rem' }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Header */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          background: exp.type === 'work' ? 'rgba(79, 172, 254, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: '500',
                          color: exp.type === 'work' ? '#4facfe' : '#667eea'
                        }}
                      >
                        {exp.type === 'work' ? 'Expérience' : 'Formation'}
                      </span>
                    </div>
                    
                    <h3 className="glass-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                      {exp.title}
                    </h3>
                    
                    <div className="glass-text" style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: exp.color }}>
                      {exp.company}
                    </div>
                    
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <FaCalendarAlt size={12} />
                        <span>{exp.period}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <FaMapMarkerAlt size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul style={{ marginBottom: '1.5rem', paddingLeft: '1rem' }}>
                    {exp.description.map((desc, i) => (
                      <li 
                        key={i} 
                        className="glass-text" 
                        style={{ 
                          fontSize: '0.95rem', 
                          lineHeight: '1.6', 
                          marginBottom: '0.5rem',
                          opacity: 0.8
                        }}
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div>
                    <div className="glass-text" style={{ fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: '600' }}>
                      Technologies utilisées:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            padding: '0.25rem 0.75rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '15px',
                            fontSize: '0.8rem',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          style={{ marginTop: '5rem' }}
        >
          <h3 className="glass-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
            Réalisations
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="glass-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  padding: '2rem',
                  textAlign: 'center'
                }}
              >
                <motion.div
                  className="glass-title"
                  style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.9 + index * 0.1 }}
                >
                  {achievement.number}
                </motion.div>
                
                <div className="glass-text" style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {achievement.label}
                </div>
                
                <div className="glass-text" style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:nth-child(2) > div > div:nth-child(3) {
            width: 90% !important;
            margin-left: 5% !important;
          }
          
          section > div > div:nth-child(2) > div:first-child {
            left: 5% !important;
          }
          
          section > div > div:nth-child(2) > div > div:nth-child(2) {
            left: 5% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;