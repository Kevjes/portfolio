import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiFlutter, SiDart, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiNestjs, SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiFirebase,
  SiGit, SiDocker, SiAndroid, SiApple, SiWindows, SiLinux
} from 'react-icons/si';
import { FaCode, FaMobile, FaServer, FaTools } from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  level: number;
  color: string;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  skills: Skill[];
  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Développement Mobile',
      icon: FaMobile,
      color: '#4facfe',
      skills: [
        {
          name: 'Flutter',
          icon: SiFlutter,
          level: 90,
          color: '#02569B',
          description: 'Framework principal pour le développement cross-platform'
        },
        {
          name: 'Dart',
          icon: SiDart,
          level: 85,
          color: '#0175C2',
          description: 'Langage de programmation pour Flutter'
        },
        {
          name: 'Android',
          icon: SiAndroid,
          level: 80,
          color: '#3DDC84',
          description: 'Développement natif et hybride Android'
        },
        {
          name: 'iOS',
          icon: SiApple,
          level: 75,
          color: '#000000',
          description: 'Développement d\'applications iOS avec Flutter'
        }
      ]
    },
    {
      title: 'Développement Web',
      icon: FaCode,
      color: '#00f2fe',
      skills: [
        {
          name: 'React',
          icon: SiReact,
          level: 85,
          color: '#61DAFB',
          description: 'Bibliothèque JavaScript pour interfaces utilisateur'
        },
        {
          name: 'TypeScript',
          icon: SiTypescript,
          level: 80,
          color: '#3178C6',
          description: 'JavaScript typé pour applications robustes'
        },
        {
          name: 'JavaScript',
          icon: SiJavascript,
          level: 88,
          color: '#F7DF1E',
          description: 'Langage de programmation web moderne'
        },
        {
          name: 'HTML5',
          icon: SiHtml5,
          level: 90,
          color: '#E34F26',
          description: 'Markup language pour structures web'
        },
        {
          name: 'CSS3',
          icon: SiCss3,
          level: 85,
          color: '#1572B6',
          description: 'Stylisation et animations web avancées'
        }
      ]
    },
    {
      title: 'Backend & API',
      icon: FaServer,
      color: '#f093fb',
      skills: [
        {
          name: 'NestJS',
          icon: SiNestjs,
          level: 75,
          color: '#E0234E',
          description: 'Framework Node.js pour APIs scalables'
        },
        {
          name: 'Node.js',
          icon: SiNodedotjs,
          level: 80,
          color: '#339933',
          description: 'Runtime JavaScript côté serveur'
        },

        {
          name: 'Python',
          icon: SiPython,
          level: 65,
          color: '#3776AB',
          description: 'Scripts et développement backend'
        }
      ]
    },
    {
      title: 'Outils & Technologies',
      icon: FaTools,
      color: '#667eea',
      skills: [
        {
          name: 'Git',
          icon: SiGit,
          level: 85,
          color: '#F05032',
          description: 'Contrôle de version et collaboration'
        },
        {
          name: 'Firebase',
          icon: SiFirebase,
          level: 80,
          color: '#FFCA28',
          description: 'Backend-as-a-Service de Google'
        },
        {
          name: 'MongoDB',
          icon: SiMongodb,
          level: 75,
          color: '#47A248',
          description: 'Base de données NoSQL'
        },
        {
          name: 'PostgreSQL',
          icon: SiPostgresql,
          level: 70,
          color: '#336791',
          description: 'Base de données relationnelle'
        },
        {
          name: 'Docker',
          icon: SiDocker,
          level: 65,
          color: '#2496ED',
          description: 'Conteneurisation d\'applications'
        }
      ]
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
          width: '200px',
          height: '200px',
          top: '10%',
          left: '5%',
          animationDelay: '2s',
          opacity: 0.05
        }}
      />
      <div
        className="morphing-shape"
        style={{
          width: '150px',
          height: '150px',
          bottom: '15%',
          right: '10%',
          animationDelay: '5s',
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
            Compétences Techniques
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

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              className="glass-btn"
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: activeCategory === index 
                  ? `linear-gradient(135deg, ${category.color}40, ${category.color}20)`
                  : 'rgba(255, 255, 255, 0.1)',
                border: activeCategory === index 
                  ? `1px solid ${category.color}60`
                  : '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              <category.icon size={20} style={{ color: category.color }} />
              <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                {category.title}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              style={{
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background icon */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  opacity: 0.1
                }}
              >
                <skill.icon size={60} />
              </div>

              {/* Skill header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <skill.icon size={24} style={{ color: skill.color }} />
                </div>
                <div>
                  <h3 className="glass-title" style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>
                    {skill.name}
                  </h3>
                  <div className="glass-text" style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                    {skill.level}% de maîtrise
                  </div>
                </div>
              </div>

              {/* Skill description */}
              <p className="glass-text" style={{ fontSize: '0.95rem', opacity: 0.8, marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {skill.description}
              </p>

              {/* Progress bar */}
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      borderRadius: '4px'
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                  />
                </div>
                
                {/* Skill level indicator */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-2rem',
                    right: 0,
                    background: `linear-gradient(135deg, ${skill.color}, ${skill.color}80)`,
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  {skill.level}%
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Platform Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass-card"
          style={{
            marginTop: '4rem',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          <h3 className="glass-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            Plateformes Supportées
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { icon: SiAndroid, name: 'Android', color: '#3DDC84' },
              { icon: SiApple, name: 'iOS', color: '#000000' },
              { icon: SiWindows, name: 'Windows', color: '#0078D4' },
              { icon: SiLinux, name: 'Linux', color: '#FCC624' }
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem'
                }}
              >
                <platform.icon size={40} style={{ color: platform.color }} />
                <span className="glass-text" style={{ fontSize: '0.9rem' }}>
                  {platform.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;