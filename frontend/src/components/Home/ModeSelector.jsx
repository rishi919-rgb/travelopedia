import React from 'react';
import { User, Users, ShieldCheck } from 'lucide-react';
import { useMode, modes } from '../../context/ModeContext';
import { motion } from 'framer-motion';

const ModeSelector = () => {
  const { activeMode, setActiveMode } = useMode();

  return (
    <div className="glass" style={{
      position: 'absolute',
      left: '1rem',
      bottom: '2rem',
      padding: '0.4rem',
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      zIndex: 10,
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--glass-border)'
    }}>
      <ModeIcon 
        mode={modes.SOLO_FEMALE} 
        active={activeMode.id === 'female'} 
        onClick={() => setActiveMode(modes.SOLO_FEMALE)}
        icon={<ShieldCheck size={20} />} 
      />
      <ModeIcon 
        mode={modes.SOLO_TRAVELER} 
        active={activeMode.id === 'solo'} 
        onClick={() => setActiveMode(modes.SOLO_TRAVELER)}
        icon={<User size={20} />} 
      />
      <ModeIcon 
        mode={modes.FAMILY} 
        active={activeMode.id === 'family'} 
        onClick={() => setActiveMode(modes.FAMILY)}
        icon={<Users size={20} />} 
      />
    </div>
  );
};

const ModeIcon = ({ icon, active, onClick, mode }) => (
  <button 
    onClick={onClick}
    style={{
      width: '44px',
      height: '44px',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      background: active ? mode.color : 'transparent',
      color: active ? 'var(--bg-primary)' : 'var(--text-muted)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}
  >
    <div style={{ position: 'relative', zIndex: 2 }}>{icon}</div>
    {active && (
      <motion.div 
        layoutId="activeGlow"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '14px',
          background: mode.color,
          boxShadow: `0 0 20px ${mode.color}`,
          opacity: 0.3,
          zIndex: 1
        }}
      />
    )}
  </button>
);

export default ModeSelector;
