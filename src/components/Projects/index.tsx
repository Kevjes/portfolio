import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Global } from '@emotion/react';
import { Project } from './core/types';
import { projects } from './core/data';
import { globalStyles } from './core/styles';
import BackgroundShapes from './BackgroundShapes';
import SectionTitle from './SectionTitle';
import CategoryFilter from './CategoryFilter';
import ProjectsGrid from './ProjectsGrid';
import ProjectModal from './ProjectModal';
import { styles } from './core/styles';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mobile' | 'web' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Global styles={globalStyles} />
      <section 
        ref={ref}
        style={styles.section}
      >
        {/* Background elements */}
        <BackgroundShapes />

        <div style={styles.container}>
          {/* Section Title */}
          <SectionTitle inView={inView} />

          {/* Category Filter */}
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory}
            inView={inView}
          />

          {/* Projects Grid */}
          <ProjectsGrid 
            filteredProjects={filteredProjects} 
            setSelectedProject={setSelectedProject} 
          />
        </div>

        {/* Project Detail Modal */}
        <ProjectModal 
          selectedProject={selectedProject} 
          setSelectedProject={setSelectedProject} 
        />
      </section>
    </>
  );
};

export default Projects;