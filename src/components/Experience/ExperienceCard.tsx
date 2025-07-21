import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { ExperienceItem } from './core/types';
import {
  experienceCardStyles,
  cardHeaderStyles,
  cardTypeTagStyles,
  cardTitleStyles,
  cardCompanyStyles,
  cardMetaInfoStyles,
  metaItemStyles,
  cardDescriptionListStyles,
  cardDescriptionItemStyles,
  technologiesLabelStyles,
  technologiesContainerStyles,
  technologyTagStyles
} from './core/styles';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  inView: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, inView }) => {
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work': return 'Expérience';
      case 'education': return 'Formation';
      case 'project': return 'Projet';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return '#4facfe';
      case 'education': return '#667eea';
      case 'project': return '#6c5ce7';
      default: return experience.color;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
      whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
      className="glass-card"
      style={experienceCardStyles}
    >
      {/* Header */}
      <div style={cardHeaderStyles}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span style={cardTypeTagStyles(getTypeColor(experience.type))}>
            {getTypeLabel(experience.type)}
          </span>
        </div>
        
        <h3 className="glass-title" style={cardTitleStyles}>
          {experience.title}
        </h3>
        
        <div className="glass-text" style={cardCompanyStyles(experience.color)}>
          {experience.company}
        </div>
        
        <div style={cardMetaInfoStyles}>
          <div style={metaItemStyles}>
            <FaCalendarAlt size={12} />
            <span>{experience.period}</span>
          </div>
          <div style={metaItemStyles}>
            <FaMapMarkerAlt size={12} />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <ul style={cardDescriptionListStyles}>
        {experience.description.map((desc, i) => (
          <li 
            key={i} 
            className="glass-text" 
            style={cardDescriptionItemStyles}
          >
            {desc}
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div>
        <div className="glass-text" style={technologiesLabelStyles}>
          Technologies utilisées:
        </div>
        <div style={technologiesContainerStyles}>
          {experience.technologies.map((tech, i) => (
            <span
              key={i}
              style={technologyTagStyles}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Icon in the corner */}
      <div style={{
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        opacity: 0.5
      }}>
        <experience.icon size={24} color={experience.color} />
      </div>
    </motion.div>
  );
};

export default ExperienceCard;