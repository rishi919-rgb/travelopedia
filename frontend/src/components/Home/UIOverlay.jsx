import React from 'react';
import { Layers, Navigation, Plus, Minus } from 'lucide-react';

const UIOverlay = () => {
  return (
    <div style={{
      position: 'absolute',
      right: '1rem',
      bottom: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      zIndex: 10
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <ActionButton icon={<Layers size={20} />} />
        <ActionButton icon={<Navigation size={20} />} active />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <ActionButton icon={<Plus size={20} />} />
        <ActionButton icon={<Minus size={20} />} />
      </div>
    </div>
  );
};

const ActionButton = ({ icon, active }) => (
  <button className="glass" style={{
    width: '48px',
    height: '48px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: active ? 'var(--accent-primary)' : 'var(--text-secondary)',
    boxShadow: 'var(--shadow-md)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  }}>
    {icon}
  </button>
);

export default UIOverlay;
