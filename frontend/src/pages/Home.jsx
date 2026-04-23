import React, { useState } from 'react';
import MapComponent from '../components/Map/MapComponent';
import SearchHeader from '../components/Home/SearchHeader';
import UIOverlay from '../components/Home/UIOverlay';
import BottomSheet from '../components/Common/BottomSheet';
import DiscoveryPanel from '../components/Home/DiscoveryPanel';

const Home = () => {
  const [isSheetOpen, setSheetOpen] = useState(true);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Background Map Layer */}
      <MapComponent />
      
      {/* UI Layers */}
      <SearchHeader />
      <UIOverlay />
      
      {/* Explore Trigger Button */}
      <button 
        onClick={() => setSheetOpen(true)}
        className="fade-in"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          padding: '0.8rem 1.8rem',
          borderRadius: 'var(--radius-full)',
          background: 'var(--accent-primary)',
          color: 'var(--bg-primary)',
          fontWeight: 700,
          fontSize: '0.95rem',
          boxShadow: '0 8px 32px hsla(190, 100%, 50%, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        Explore Area
      </button>

      {/* Bottom Sheet Component */}
      <BottomSheet 
        isOpen={isSheetOpen} 
        onClose={() => setSheetOpen(false)}
        title="Discover Local Gems"
      >
        <DiscoveryPanel />
      </BottomSheet>
    </div>
  );
};

export default Home;
