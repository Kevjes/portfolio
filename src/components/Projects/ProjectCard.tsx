import React from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaDesktop, FaCode, FaEye, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from './types';
import { getStatusColor, getStatusLabel } from './core/data';
import { styles } from './core/styles';

interface ProjectCardProps {
  project: Project;
  index: number;
  setSelectedProject: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, setSelectedProject }) => {
  return (
    <motion.div
      key={project.id}
      className="glass-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      style={styles.projectCard}
      onClick={() => setSelectedProject(project)}
    >
      {/* Project Image */}
      <div style={styles.projectImageContainer(project.color)}>
        <div style={styles.projectIcon(project.color)}>
          {project.category === 'mobile' ? <FaMobile /> : 
           project.category === 'web' ? <FaDesktop /> : <FaCode />}
        </div>
        
        {/* Status badge */}
        <div style={styles.statusBadge(getStatusColor(project.status))}>
          {getStatusLabel(project.status)}
        </div>
      </div>

      {/* Project Content */}
      <div style={styles.projectContent}>
        <h3 className="glass-title" style={styles.projectTitle}>
          {project.title}
        </h3>
        
        <p className="glass-text" style={styles.projectDescription}>
          {project.description}
        </p>

        {/* Technologies */}
        <div style={styles.technologiesContainer}>
          <div className="glass-text" style={styles.technologiesTitle}>
            Technologies:
          </div>
          <div style={styles.technologiesList}>
            {project.technologies.map((tech) => (
              <div
                key={tech.name}
                style={styles.technologyBadge}
              >
                <tech.icon size={14} style={{ color: tech.color }} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div style={styles.actionButtonsContainer}>
          <motion.button
            className="glass-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.detailsButton}
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
              style={styles.iconButton}
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
              style={styles.iconButton}
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt size={14} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;