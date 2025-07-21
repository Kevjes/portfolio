import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { ExperienceItem } from './core/types';
import {
  timelineContainerStyles,
  timelineLineStyles,
  timelineItemStyles,
  timelineDotStyles,
  timelineContentStyles,
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

interface TimelineViewProps {
  experiences: ExperienceItem[];
  activeTab: string;
  inView: boolean;
}

const TimelineView: React.FC<TimelineViewProps> = ({ experiences, activeTab, inView }) => {
  const filteredExperiences = activeTab === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab);

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
      default: return '#4facfe';
    }
  };

  return (
    <motion.div 
      style={timelineContainerStyles}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Timeline line */}
      <motion.div
        style={timelineLineStyles}
        initial={{ height: 0 }}
        animate={inView ? { height: '100%' } : {}}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {filteredExperiences.length > 0 ? (
        filteredExperiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
            style={timelineItemStyles(index % 2 === 0)}
          >
            {/* Timeline dot */}
            <motion.div
              className="timeline-dot"
              style={timelineDotStyles(exp.color)}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <exp.icon size={24} color="white" />
            </motion.div>

            {/* Content */}
            <div
              className="timeline-content"
              style={timelineContentStyles(index % 2 === 0)}
            >
              <motion.div
                className="glass-card"
                style={experienceCardStyles}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Header */}
                <div style={cardHeaderStyles}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={cardTypeTagStyles(getTypeColor(exp.type))}>
                      {getTypeLabel(exp.type)}
                    </span>
                  </div>
                  
                  <h3 className="glass-title" style={cardTitleStyles}>
                    {exp.title}
                  </h3>
                  
                  <div className="glass-text" style={cardCompanyStyles(exp.color)}>
                    {exp.company}
                  </div>
                  
                  <div style={cardMetaInfoStyles}>
                    <div style={metaItemStyles}>
                      <FaCalendarAlt size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <div style={metaItemStyles}>
                      <FaMapMarkerAlt size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul style={cardDescriptionListStyles}>
                  {exp.description.map((desc, i) => (
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
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        style={technologyTagStyles}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
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

export default TimelineView;