import React from 'react';
import MapComponent from '../components/Map/MapComponent';
import SearchHeader from '../components/Home/SearchHeader';
import UIOverlay from '../components/Home/UIOverlay';

const Home = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Background Map Layer */}
      <MapComponent />
      
      {/* UI Layers */}
      <SearchHeader />
      <UIOverlay />
      
      {/* Bottom Sheet Trigger (Placeholder for Step 3) */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '80px',
        background: 'linear-gradient(to top, var(--bg-primary), transparent)',
        pointerEvents: 'none',
        zIndex: 5
      }} />
    </div>
  );
};

export default Home;
