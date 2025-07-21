import React from 'react';
import { motion } from 'framer-motion';
import { tabsContainerStyles, tabButtonStyles } from './core/styles';

interface ExperienceTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  inView: boolean;
}

const ExperienceTabs: React.FC<ExperienceTabsProps> = ({ activeTab, setActiveTab, inView }) => {
  const tabs = [
    { id: 'all', label: 'Tout' },
    { id: 'work', label: 'Expériences' },
    { id: 'education', label: 'Formation' },
    { id: 'project', label: 'Projets' }
  ];

  return (
    <motion.div
      style={tabsContainerStyles}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {tabs.map((tab, index) => (
        <motion.button
          key={tab.id}
          className="tab-button"
          style={tabButtonStyles(activeTab === tab.id)}
          onClick={() => setActiveTab(tab.id)}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tab.label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ExperienceTabs;