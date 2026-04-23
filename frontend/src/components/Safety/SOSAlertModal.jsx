import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const SOSAlertModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass"
            style={{
              width: '100%',
              maxWidth: '400px',
              padding: '2.5rem',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
              position: 'relative',
              border: '1px solid hsla(0, 85%, 60%, 0.3)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
            }}
          >
            <div style={{ color: 'var(--accent-danger)', marginBottom: '1.5rem' }}>
              <AlertTriangle size={64} style={{ margin: '0 auto' }} />
            </div>
            
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontFamily: 'Outfit' }}>Emergency SOS</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
              Are you sure you want to trigger an emergency alert? This will share your live location with local authorities and emergency contacts immediately.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button style={{
                background: 'var(--accent-danger)',
                color: 'white',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                fontWeight: 700,
                fontSize: '1.1rem',
                boxShadow: '0 4px 16px hsla(0, 85%, 60%, 0.3)'
              }}>
                ACTIVATE SOS
              </button>
              <button 
                onClick={onClose}
                style={{
                  color: 'var(--text-muted)',
                  padding: '0.75rem',
                  fontWeight: 500,
                  fontSize: '0.95rem'
                }}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SOSAlertModal;
