import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  direction = 'up' 
}) => {
  
  const getVariants = () => {
    const dist = 50;
    switch (direction) {
      case 'up': return { hidden: { opacity: 0, y: dist }, visible: { opacity: 1, y: 0 } };
      case 'down': return { hidden: { opacity: 0, y: -dist }, visible: { opacity: 1, y: 0 } };
      case 'left': return { hidden: { opacity: 0, x: dist }, visible: { opacity: 1, x: 0 } };
      case 'right': return { hidden: { opacity: 0, x: -dist }, visible: { opacity: 1, x: 0 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={getVariants()}
      transition={{ duration: 0.7, delay, type: "spring", bounce: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{children: React.ReactNode, className?: string, delay?: number}> = ({ children, className = "", delay = 0.1 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      visible: { transition: { staggerChildren: delay } }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = "" }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }}
    className={className}
  >
    {children}
  </motion.div>
);
