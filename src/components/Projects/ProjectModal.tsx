import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from './core/types';
import { getStatusColor, getStatusLabel } from './core/data';
import { styles } from './core/styles';

interface ProjectModalProps {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ 
  selectedProject, 
  setSelectedProject 
}) => {
  if (!selectedProject) return null;
  
  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={styles.modalOverlay}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="glass-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            style={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={styles.modalHeader}>
              <div>
                <h2 className="glass-title" style={styles.modalTitle}>
                  {selectedProject.title}
                </h2>
                <div style={styles.modalStatusBadge(getStatusColor(selectedProject.status))}>
                  {getStatusLabel(selectedProject.status)}
                </div>
              </div>
              
              <button
                onClick={() => setSelectedProject(null)}
                style={styles.closeButton}
              >
                ×
              </button>
            </div>

            <p className="glass-text" style={styles.modalDescription}>
              {selectedProject.longDescription}
            </p>

            <div style={styles.featuresSection}>
              <h3 className="glass-title" style={styles.featuresTitle}>
                Fonctionnalités principales
              </h3>
              <ul style={styles.featuresList}>
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="glass-text" style={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.modalTechnologiesSection}>
              <h3 className="glass-title" style={styles.modalTechnologiesTitle}>
                Technologies utilisées
              </h3>
              <div style={styles.modalTechnologiesList}>
                {selectedProject.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    style={styles.modalTechnologyBadge}
                  >
                    <tech.icon size={20} style={{ color: tech.color }} />
                    <span className="glass-text" style={{ fontWeight: '500' }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.modalActionsContainer}>
              {selectedProject.githubUrl && (
                <motion.a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn"
                  whileHover={{ scale: 1.05 }}
                  style={styles.githubButton}
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
                  style={styles.liveButton}
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
  );
};

export default ProjectModal;