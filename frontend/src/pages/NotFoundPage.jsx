import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Compass } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-primary)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      gap: '1.5rem',
    }}>
      {/* Animated compass */}
      <motion.div
        animate={{ rotate: [0, 15, -15, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        style={{ fontSize: '5rem', lineHeight: 1 }}
      >
        <Compass size={80} color="var(--accent-primary)" strokeWidth={1.5} />
      </motion.div>

      {/* Glowing 404 */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontSize: 'clamp(4rem, 20vw, 8rem)',
          fontWeight: 900,
          margin: 0,
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          fontFamily: 'Outfit, sans-serif',
          filter: 'drop-shadow(0 0 30px var(--accent-primary))',
        }}
      >
        404
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
      >
        <h2 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', margin: 0 }}>
          Lost on the map?
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '280px' }}>
          This destination doesn't exist. Let AURA guide you back.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.9rem 1.75rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            color: 'var(--bg-primary)',
            fontWeight: 700,
            fontSize: '1rem',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Home size={18} />
          Back to Map
        </button>
        <button
          onClick={() => navigate('/assistant')}
          className="glass"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.9rem 1.75rem',
            borderRadius: '20px',
            color: 'var(--accent-primary)',
            fontWeight: 600,
            fontSize: '1rem',
            border: '1px solid var(--accent-primary)',
            cursor: 'pointer',
          }}
        >
          Ask AURA
        </button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
