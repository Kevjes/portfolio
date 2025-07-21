import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { experiences, achievements } from './core/data';
import BackgroundShapes from './BackgroundShapes';
import SectionTitle from './SectionTitle';
import ExperienceTabs from './ExperienceTabs';
import ExperienceGrid from './ExperienceGrid';
import TimelineView from './TimelineView';
import Achievements from './Achievements';
import { sectionStyles, containerStyles, responsiveStyles } from './core/styles';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');

  return (
    <section ref={ref} style={sectionStyles}>
      {/* Background elements */}
      <BackgroundShapes inView={inView} />

      <div style={containerStyles}>
        {/* Section Title */}
        <SectionTitle inView={inView} />
        
        {/* Experience Tabs */}
        <ExperienceTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          inView={inView} 
        />
        
        {/* View Mode Toggle */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '2rem',
          gap: '1rem'
        }}>
          <button 
            onClick={() => setViewMode('grid')} 
            style={{
              background: viewMode === 'grid' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '5px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              color: 'white',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease'
            }}
          >
            Vue Grille
          </button>
          <button 
            onClick={() => setViewMode('timeline')} 
            style={{
              background: viewMode === 'timeline' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '5px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              color: 'white',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease'
            }}
          >
            Vue Chronologique
          </button>
        </div>

        {/* Experience Content */}
        {viewMode === 'grid' ? (
          <ExperienceGrid 
            experiences={experiences} 
            activeTab={activeTab} 
            inView={inView} 
          />
        ) : (
          <TimelineView 
            experiences={experiences} 
            activeTab={activeTab} 
            inView={inView} 
          />
        )}

        {/* Achievements */}
        <Achievements 
          achievements={achievements} 
          inView={inView} 
        />
      </div>

      <style>{responsiveStyles}</style>
    </section>
  );
};

export default Experience;