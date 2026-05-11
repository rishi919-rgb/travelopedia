import React from 'react';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Loader = ({ fullScreen = false, text = 'Loading...' }) => {
  const containerStyle = fullScreen
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
        zIndex: 9999,
      }
    : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        width: '100%',
        height: '100%',
      };

  return (
    <div style={containerStyle} className="fade-in">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      >
        <Loader2 size={40} color="var(--accent-primary)" />
      </motion.div>
      {text && (
        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          {text}
        </p>
      )}
    </div>
  );
};

export default Loader;
