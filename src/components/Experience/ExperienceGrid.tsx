import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from './core/types';
import ExperienceCard from './ExperienceCard';
import { experienceGridStyles } from './core/styles';

interface ExperienceGridProps {
  experiences: ExperienceItem[];
  activeTab: string;
  inView: boolean;
}

const ExperienceGrid: React.FC<ExperienceGridProps> = ({ experiences, activeTab, inView }) => {
  const filteredExperiences = activeTab === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab);

  return (
    <motion.div 
      className="experience-grid"
      style={experienceGridStyles}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {filteredExperiences.map((experience, index) => (
        <ExperienceCard 
          key={experience.id}
          experience={experience}
          index={index}
          inView={inView}
        />
      ))}

      {filteredExperiences.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: '3rem',
            fontSize: '1.1rem',
            opacity: 0.7
          }}
        >
          Aucune expérience trouvée dans cette catégorie.
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExperienceGrid;