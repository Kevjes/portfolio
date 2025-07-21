import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from './core/types';
import ProjectCard from './ProjectCard';
import { styles } from './core/styles';

interface ProjectsGridProps {
  filteredProjects: Project[];
  setSelectedProject: (project: Project) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ 
  filteredProjects, 
  setSelectedProject 
}) => {
  return (
    <motion.div style={styles.projectsGrid}>
      <AnimatePresence mode="wait">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            index={index}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsGrid;