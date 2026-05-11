import React, { useState, useCallback } from 'react';
import { ShieldAlert, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import socket from '../../services/socket';
import toast from 'react-hot-toast';

const SOSButton = () => {
  const [sosActive, setSosActive] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleSOS = useCallback(() => {
    if (sosActive) {
      // Cancel SOS
      socket.emit('sos_cancelled', { userId: user?._id });
      setSosActive(false);
      toast('SOS cancelled.', { icon: '🔕' });
      return;
    }

    // Get live coordinates then emit
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          socket.emit('sos_triggered', {
            userId: user?._id,
            userName: user?.name,
            lat: latitude,
            lng: longitude,
            timestamp: new Date().toISOString(),
          });

          setSosActive(true);
          toast.error('🆘 SOS BROADCAST SENT! Help is on the way.', { duration: 6000 });
        },
        () => {
          // Fallback if GPS unavailable
          socket.emit('sos_triggered', {
            userId: user?._id,
            userName: user?.name,
            lat: null,
            lng: null,
            timestamp: new Date().toISOString(),
          });
          setSosActive(true);
          toast.error('🆘 SOS sent (location unavailable)', { duration: 6000 });
        }
      );
    }
  }, [sosActive, user]);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleSOS}
      style={{
        width: '64px',
        height: '64px',
        borderRadius: '20px',
        background: sosActive ? '#ff1a1a' : 'var(--accent-danger)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white',
        boxShadow: sosActive
          ? '0 8px 40px hsla(0, 100%, 50%, 0.7)'
          : '0 8px 32px hsla(0, 85%, 60%, 0.4)',
        position: 'relative',
        zIndex: 15,
        border: 'none',
        cursor: 'pointer',
        gap: '2px',
      }}
    >
      {/* Pulse Effect - faster when active */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: sosActive ? 0.8 : 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '20px',
          background: 'var(--accent-danger)',
          zIndex: -1,
        }}
      />
      <AnimatePresence mode="wait">
        {sosActive ? (
          <motion.div
            key="active"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}
          >
            <X size={22} />
            <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '1px' }}>CANCEL</span>
          </motion.div>
        ) : (
          <motion.div key="idle" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <ShieldAlert size={32} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default SOSButton;

