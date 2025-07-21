import React from 'react';
import { motion } from 'framer-motion';
import { categories } from './core/data';
import { styles } from './core/styles';

interface CategoryFilterProps {
  selectedCategory: 'all' | 'mobile' | 'web' | 'fullstack';
  setSelectedCategory: (category: 'all' | 'mobile' | 'web' | 'fullstack') => void;
  inView: boolean;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  setSelectedCategory,
  inView 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={styles.categoryContainer}
    >
      {categories.map((category) => (
        <motion.button
          key={category.id}
          className="glass-btn"
          onClick={() => setSelectedCategory(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={styles.categoryButton(selectedCategory === category.id)}
        >
          <category.icon size={styles.categoryIcon.size} />
          <span style={styles.categoryLabel}>
            {category.label}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;