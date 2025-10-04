import React from 'react';
import { motion } from 'framer-motion';
import './DiagonalDivider.css';

interface DiagonalDividerProps {
  direction?: 'up' | 'down';
  color?: string;
  className?: string;
}

const DiagonalDivider: React.FC<DiagonalDividerProps> = ({ 
  direction = 'down', 
  color = 'bg-gray-50 dark:bg-gray-800',
  className = '' 
}) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`diagonal-divider ${direction} ${className}`}
    >
      {/* Optional decorative elements */}
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    </motion.div>
  );
};

export default DiagonalDivider;
