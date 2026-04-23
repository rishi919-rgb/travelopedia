import React from 'react';
import { Sparkles, MapPin, Star } from 'lucide-react';

const DiscoveryPanel = () => {
  const spots = [
    { name: "Hidden Garden Cafe", type: "Authentic", score: 9.4, dist: "0.8km" },
    { name: "Old Town Market", type: "Culture", score: 8.9, dist: "1.2km" },
    { name: "Skyline Viewpoint", type: "Nature", score: 9.1, dist: "2.4km" }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-secondary)' }}>
        <Sparkles size={18} />
        <span style={{ fontWeight: 600 }}>Nearby Hidden Gems</span>
      </div>
      
      {spots.map((spot, i) => (
        <div key={i} className="glass" style={{
          padding: '1.25rem',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'transform 0.2s ease',
          cursor: 'pointer'
        }}>
          <div>
            <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-primary)' }}>{spot.name}</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span style={{ background: 'var(--bg-tertiary)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>{spot.type}</span>
              <span>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <MapPin size={12} />
                {spot.dist}
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.25rem', 
              color: '#fbbf24',
              background: 'rgba(251, 191, 36, 0.1)',
              padding: '0.25rem 0.5rem',
              borderRadius: '8px'
            }}>
              <Star size={14} fill="#fbbf24" />
              <span style={{ fontWeight: 600 }}>{spot.score}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscoveryPanel;
