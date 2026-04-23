import React from 'react';
import { Compass, Shield, Zap, Camera, Map } from 'lucide-react';

const Home = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      background: 'radial-gradient(circle at top right, hsla(190, 100%, 50%, 0.1), transparent), radial-gradient(circle at bottom left, hsla(270, 80%, 60%, 0.1), transparent)'
    }}>
      <div className="fade-in">
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem',
          boxShadow: '0 0 40px hsla(190, 100%, 50%, 0.3)'
        }}>
          <Compass size={40} color="white" />
        </div>
        
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
          AURA
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
          Your intelligent, context-aware travel partner for safety, discovery, and seamless journeys.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', width: '100%', maxWidth: '400px' }}>
          <FeatureCard icon={<Shield size={20} />} label="Safety" />
          <FeatureCard icon={<Zap size={20} />} label="Utility" />
          <FeatureCard icon={<Camera size={20} />} label="Vision" />
          <FeatureCard icon={<Map size={20} />} label="Explore" />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, label }) => (
  <div className="glass" style={{
    padding: '1.5rem',
    borderRadius: 'var(--radius-md)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)'
  }}>
    <div style={{ color: 'var(--accent-primary)' }}>{icon}</div>
    <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{label}</span>
  </div>
);

export default Home;
