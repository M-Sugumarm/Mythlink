import React from 'react';
import { motion } from 'framer-motion';
import './GodNode.scss';

const GodNode = ({ name, role }) => {
  return (
    <motion.div
      className="god-node"
      whileHover={{ scale: 1.1, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>{name}</h3>
      <p>{role}</p>
    </motion.div>
  );
};

export default GodNode;
