import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaMobile, FaDesktop, FaCode, FaEye } from 'react-icons/fa';
import { SiFlutter, SiReact, SiTypescript, SiFirebase, SiNodedotjs, SiMongodb } from 'react-icons/si';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'mobile' | 'web' | 'fullstack';
  technologies: {
    name: string;
    icon: React.ComponentType<any>;
    color: string;
  }[];
  features: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  color: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mobile' | 'web' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'ecommerce-flutter',
      title: 'E-Commerce Mobile App',
      description: 'Application mobile de commerce électronique complète avec Flutter',
      longDescription: 'Une application mobile e-commerce moderne développée avec Flutter, offrant une expérience utilisateur fluide avec gestion des produits, panier, paiements et authentification utilisateur.',
      category: 'mobile',
      technologies: [
        { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
      ],
      features: [
        'Interface utilisateur moderne et responsive',
        'Authentification sécurisée avec Firebase',
        'Gestion du panier et des commandes',
        'Intégration de paiements en ligne',
        'Notifications push en temps réel',
        'Mode hors ligne avec synchronisation'
      ],
      image: '/api/placeholder/400/300',
      githubUrl: 'https://github.com/kevin-tene/ecommerce-flutter',
      status: 'completed',
      color: '#4facfe'
    },
    {
      id: 'portfolio-react',
      title: 'Portfolio React TypeScript',
      description: 'Portfolio personnel avec design liquid glass et animations avancées',
      longDescription: 'Un portfolio moderne développé avec React et TypeScript, featuring un design liquid glass unique avec des animations fluides et une expérience utilisateur immersive.',
      category: 'web',
      technologies: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
      ],
      features: [
        'Design liquid glass innovant',
        'Animations fluides avec Framer Motion',
        'Interface responsive et moderne',
        'Optimisation des performances',
        'SEO optimisé',
        'Mode sombre/clair'
      ],
      image: '/api/placeholder/400/300',
      githubUrl: 'https://github.com/kevin-tene/portfolio-react',
      liveUrl: 'https://kevin-tene-portfolio.vercel.app',
      status: 'completed',
      color: '#00f2fe'
    },
    {
      id: 'task-manager-fullstack',
      title: 'Task Manager Full-Stack',
      description: 'Application de gestion de tâches avec backend NestJS et frontend React',
      longDescription: 'Une application complète de gestion de tâches avec un backend robuste en NestJS et un frontend moderne en React, incluant authentification, collaboration en équipe et notifications.',
      category: 'fullstack',
      technologies: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'NestJS', icon: SiNodedotjs, color: '#E0234E' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
      ],
      features: [
        'Gestion complète des tâches et projets',
        'Collaboration en équipe en temps réel',
        'Authentification JWT sécurisée',
        'API REST documentée avec Swagger',
        'Interface drag & drop intuitive',
        'Notifications et rappels automatiques'
      ],
      image: '/api/placeholder/400/300',
      githubUrl: 'https://github.com/kevin-tene/task-manager',
      liveUrl: 'https://task-manager-demo.vercel.app',
      status: 'completed',
      color: '#f093fb'
    },
    {
      id: 'weather-flutter',
      title: 'Weather App Flutter',
      description: 'Application météo avec géolocalisation et prévisions détaillées',
      longDescription: 'Application météo moderne avec Flutter offrant des prévisions précises, géolocalisation automatique, et une interface utilisateur élégante avec animations météorologiques.',
      category: 'mobile',
      technologies: [
        { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' }
      ],
      features: [
        'Prévisions météo en temps réel',
        'Géolocalisation automatique',
        'Interface animée selon la météo',
        'Historique des données météo',
        'Alertes météorologiques',
        'Mode hors ligne'
      ],
      image: '/api/placeholder/400/300',
      githubUrl: 'https://github.com/kevin-tene/weather-flutter',
      status: 'in-progress',
      color: '#667eea'
    },
    {
      id: 'gaming-platform',
      title: 'Gaming Platform Web',
      description: 'Plateforme web pour l\'industrie du gaming chez Kiro\'o Games',
      longDescription: 'Développement d\'une plateforme web moderne pour l\'industrie du gaming, incluant gestion des joueurs, statistiques en temps réel et intégration avec les systèmes de jeu.',
      category: 'web',
      technologies: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
      ],
      features: [
        'Dashboard administrateur avancé',
        'Gestion des profils joueurs',
        'Statistiques en temps réel',
        'Intégration APIs de jeux',
        'Système de notifications',
        'Interface responsive'
      ],
      image: '/api/placeholder/400/300',
      status: 'in-progress',
      color: '#764ba2'
    },
    {
      id: 'ai-chat-app',
      title: 'AI Chat Application',
      description: 'Application de chat avec intelligence artificielle intégrée',
      longDescription: 'Une application de chat moderne intégrant l\'intelligence artificielle pour des conversations intelligentes, avec support multiplateforme et fonctionnalités avancées.',
      category: 'fullstack',
      technologies: [
        { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
        { name: 'NestJS', icon: SiNodedotjs, color: '#E0234E' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
      ],
      features: [
        'Chat en temps réel avec IA',
        'Support multiplateforme',
        'Reconnaissance vocale',
        'Traduction automatique',
        'Historique des conversations',
        'Interface conversationnelle intuitive'
      ],
      image: '/api/placeholder/400/300',
      status: 'planned',
      color: '#ff6b6b'
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets', icon: FaCode },
    { id: 'mobile', label: 'Mobile', icon: FaMobile },
    { id: 'web', label: 'Web', icon: FaDesktop },
    { id: 'fullstack', label: 'Full-Stack', icon: FaCode }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#4CAF50';
      case 'in-progress': return '#FF9800';
      case 'planned': return '#9C27B0';
      default: return '#757575';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Terminé';
      case 'in-progress': return 'En cours';
      case 'planned': return 'Planifié';
      default: return 'Inconnu';
    }
  };

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
          width: '250px',
          height: '250px',
          top: '15%',
          left: '8%',
          animationDelay: '4s',
          opacity: 0.05
        }}
      />
      <div
        className="morphing-shape"
        style={{
          width: '200px',
          height: '200px',
          bottom: '20%',
          right: '12%',
          animationDelay: '7s',
          opacity: 0.05
        }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
            Mes Projets
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

        {/* Category Filter */}
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
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className="glass-btn"
              onClick={() => setSelectedCategory(category.id as any)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: selectedCategory === category.id 
                  ? 'linear-gradient(135deg, #4facfe40, #00f2fe20)'
                  : 'rgba(255, 255, 255, 0.1)',
                border: selectedCategory === category.id 
                  ? '1px solid #4facfe60'
                  : '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              <category.icon size={18} />
              <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                {category.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div
                  style={{
                    height: '200px',
                    background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={
                      {
                      fontSize: '4rem',
                      opacity: 0.3,
                      color: project.color
                    }
                    }
                  >
                    {project.category === 'mobile' ? <FaMobile /> : 
                     project.category === 'web' ? <FaDesktop /> : <FaCode />}
                  </div>
                  
                  {/* Status badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      padding: '0.25rem 0.75rem',
                      background: getStatusColor(project.status),
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      color: 'white'
                    }}
                  >
                    {getStatusLabel(project.status)}
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ padding: '2rem' }}>
                  <h3 className="glass-title" style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                    {project.title}
                  </h3>
                  
                  <p className="glass-text" style={{ fontSize: '0.95rem', opacity: 0.8, marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div className="glass-text" style={{ fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: '600' }}>
                      Technologies:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            padding: '0.25rem 0.75rem',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '15px',
                            fontSize: '0.8rem',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          <tech.icon size={14} style={{ color: tech.color }} />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <motion.button
                      className="glass-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: '0.5rem 1rem',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        flex: 1
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <FaEye size={12} />
                      Détails
                    </motion.button>
                    
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          padding: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none'
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={16} />
                      </motion.a>
                    )}
                    
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          padding: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none'
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={14} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
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
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                maxWidth: '800px',
                maxHeight: '90vh',
                overflow: 'auto',
                padding: '2rem'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                  <h2 className="glass-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                    {selectedProject.title}
                  </h2>
                  <div
                    style={{
                      padding: '0.25rem 0.75rem',
                      background: getStatusColor(selectedProject.status),
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      color: 'white',
                      display: 'inline-block'
                    }}
                  >
                    {getStatusLabel(selectedProject.status)}
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    padding: '0.5rem'
                  }}
                >
                  ×
                </button>
              </div>

              <p className="glass-text" style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                {selectedProject.longDescription}
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h3 className="glass-title" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Fonctionnalités principales
                </h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="glass-text" style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 className="glass-title" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Technologies utilisées
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {selectedProject.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <tech.icon size={20} style={{ color: tech.color }} />
                      <span className="glass-text" style={{ fontWeight: '500' }}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                {selectedProject.githubUrl && (
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn"
                    whileHover={{ scale: 1.05 }}
                    style={{
                      padding: '1rem 2rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none'
                    }}
                  >
                    <FaGithub size={18} />
                    Voir le code
                  </motion.a>
                )}
                
                {selectedProject.liveUrl && (
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn"
                    whileHover={{ scale: 1.05 }}
                    style={{
                      padding: '1rem 2rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none',
                      background: 'linear-gradient(135deg, #4facfe, #00f2fe)'
                    }}
                  >
                    <FaExternalLinkAlt size={16} />
                    Voir le projet
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;