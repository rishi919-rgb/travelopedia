import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const SOSButton = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      style={{
        width: '64px',
        height: '64px',
        borderRadius: '20px',
        background: 'var(--accent-danger)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        boxShadow: '0 8px 32px hsla(0, 85%, 60%, 0.4)',
        position: 'relative',
        zIndex: 15
      }}
    >
      {/* Pulse Effect */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '20px',
          background: 'var(--accent-danger)',
          zIndex: -1
        }}
      />
      <ShieldAlert size={32} />
    </motion.button>
  );
};

export default SOSButton;
