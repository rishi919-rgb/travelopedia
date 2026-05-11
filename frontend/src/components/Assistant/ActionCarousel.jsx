import React, { useState } from 'react';
import { Shield, Zap, MapPin, Globe, Activity } from 'lucide-react';

const ACTIONS = [
  { icon: <Shield size={16} />,   label: 'Safety Status',  prompt: 'What is the current safety status of my area and what precautions should I take?' },
  { icon: <Zap size={16} />,      label: 'Find Charger',   prompt: 'Find the nearest EV charging station to my current location.' },
  { icon: <Activity size={16} />, label: 'Nearest Clinic', prompt: 'Find the nearest clinic or medical facility near me.' },
  { icon: <MapPin size={16} />,   label: 'Hidden Gems',    prompt: 'Suggest some hidden gems and off-the-beaten-path spots near me that most tourists miss.' },
  { icon: <Globe size={16} />,    label: 'Local Tips',     prompt: 'Give me essential local tips, cultural etiquette, and safety advice for traveling in this area.' },
];

const ActionCarousel = ({ onSelectPrompt }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (prompt, index) => {
    setActiveIndex(index);
    if (onSelectPrompt) onSelectPrompt(prompt);
    // Reset highlight after a brief moment
    setTimeout(() => setActiveIndex(null), 600);
  };

  return (
    <div style={{
      display: 'flex',
      gap: '0.75rem',
      overflowX: 'auto',
      paddingBottom: '0.5rem',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
    }}>
      {ACTIONS.map((action, i) => (
        <button
          key={i}
          onClick={() => handleClick(action.prompt, i)}
          className="glass"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.2rem',
            borderRadius: 'var(--radius-full)',
            whiteSpace: 'nowrap',
            color: activeIndex === i ? 'var(--accent-primary)' : 'var(--text-secondary)',
            fontSize: '0.85rem',
            fontWeight: 500,
            border: activeIndex === i
              ? '1px solid var(--accent-primary)'
              : '1px solid var(--glass-border)',
            transition: 'all 0.2s ease',
            transform: activeIndex === i ? 'scale(0.96)' : 'scale(1)',
            cursor: 'pointer',
          }}
        >
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default ActionCarousel;

