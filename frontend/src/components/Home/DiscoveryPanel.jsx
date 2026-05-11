import React from 'react';
import { Sparkles, MapPin, Star } from 'lucide-react';
import { useSelector } from 'react-redux';

const DiscoveryPanel = () => {
  const { pois, isLoading } = useSelector((state) => state.poi);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-secondary)' }}>
        <Sparkles size={18} />
        <span style={{ fontWeight: 600 }}>Nearby Hidden Gems</span>
      </div>
      
      {isLoading ? (
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Searching nearby...</p>
      ) : pois && pois.length > 0 ? (
        pois.map((spot, i) => (
          <div key={spot._id || i} className="glass" style={{
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
                <span style={{ background: 'var(--bg-tertiary)', padding: '0.1rem 0.4rem', borderRadius: '4px', textTransform: 'capitalize' }}>{spot.category}</span>
                <span>•</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  <MapPin size={12} />
                  &lt; 5km
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
                <span style={{ fontWeight: 600 }}>{spot.rating || 0}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', padding: '1rem 0' }}>No POIs found nearby.</p>
      )}
    </div>
  );
};

export default DiscoveryPanel;
