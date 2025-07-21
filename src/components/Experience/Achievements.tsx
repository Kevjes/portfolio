import React from 'react';
import { motion } from 'framer-motion';
import { Achievement } from './core/types';
import {
  achievementsSectionStyles,
  achievementsTitleStyles,
  achievementsGridStyles,
  achievementCardStyles,
  achievementIconContainerStyles,
  achievementNumberStyles,
  achievementLabelStyles,
  achievementDescriptionStyles
} from './core/styles';

interface AchievementsProps {
  achievements: Achievement[];
  inView: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ achievements, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 1.5 }}
      style={achievementsSectionStyles}
    >
      <h3 className="glass-title" style={achievementsTitleStyles}>
        Réalisations
      </h3>
      
      <div className="achievements-grid" style={achievementsGridStyles}>
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.label}
            className="glass-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            style={achievementCardStyles}
          >
            {achievement.icon && (
              <motion.div
                style={achievementIconContainerStyles('#4facfe')}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
              >
                <achievement.icon size={24} color="#4facfe" />
              </motion.div>
            )}
            
            <motion.div
              className="glass-title"
              style={achievementNumberStyles}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.9 + index * 0.1 }}
            >
              {achievement.number}
            </motion.div>
            
            <div className="glass-text" style={achievementLabelStyles}>
              {achievement.label}
            </div>
            
            <div className="glass-text" style={achievementDescriptionStyles}>
              {achievement.description}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;