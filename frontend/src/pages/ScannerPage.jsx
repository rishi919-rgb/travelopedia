import React from 'react';
import { X, Zap, History, Globe, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ScannerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="fade-in" style={{ height: '100vh', background: '#000', position: 'relative', overflow: 'hidden' }}>
      {/* Immersive Camera Simulation */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* AR Viewfinder / Scanning Frame */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{
            width: '280px',
            height: '350px',
            border: '2px solid rgba(0, 255, 204, 0.4)',
            borderRadius: '32px',
            position: 'relative',
            boxShadow: '0 0 40px rgba(0, 255, 204, 0.1)'
          }}
        >
          {/* Scanning Line Animation */}
          <motion.div 
            animate={{ top: ['10%', '90%', '10%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              left: '5%',
              width: '90%',
              height: '2px',
              background: 'linear-gradient(to right, transparent, var(--accent-primary), transparent)',
              boxShadow: '0 0 15px var(--accent-primary)',
              zIndex: 5
            }}
          />
          
          <div style={{ 
            position: 'absolute', 
            top: '-14px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            background: 'var(--accent-primary)', 
            padding: '4px 16px', 
            borderRadius: '12px', 
            fontSize: '0.75rem', 
            color: 'var(--bg-primary)', 
            fontWeight: 800,
            letterSpacing: '0.05em'
          }}>
            AI VISION ACTIVE
          </div>

          {/* Corner Decorations */}
          <div style={{ position: 'absolute', top: 20, left: 20, width: 20, height: 20, borderTop: '2px solid #fff', borderLeft: '2px solid #fff', borderTopLeftRadius: '8px' }} />
          <div style={{ position: 'absolute', top: 20, right: 20, width: 20, height: 20, borderTop: '2px solid #fff', borderRight: '2px solid #fff', borderTopRightRadius: '8px' }} />
          <div style={{ position: 'absolute', bottom: 20, left: 20, width: 20, height: 20, borderBottom: '2px solid #fff', borderLeft: '2px solid #fff', borderBottomLeftRadius: '8px' }} />
          <div style={{ position: 'absolute', bottom: 20, right: 20, width: 20, height: 20, borderBottom: '2px solid #fff', borderRight: '2px solid #fff', borderBottomRightRadius: '8px' }} />
        </motion.div>
      </div>

      {/* Header Controls */}
      <header style={{ position: 'absolute', top: '2.5rem', width: '100%', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', zIndex: 10 }}>
        <button 
          onClick={() => navigate(-1)} 
          className="glass" 
          style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}
        >
          <X size={22} />
        </button>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="glass" style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Zap size={22} /></button>
          <button className="glass" style={{ width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Globe size={22} /></button>
        </div>
      </header>

      {/* Footer / Capture Action */}
      <footer style={{ position: 'absolute', bottom: '5rem', width: '100%', textAlign: 'center', zIndex: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5rem', marginBottom: '2rem' }}>
          <button style={{ color: '#fff', opacity: 0.6 }}><History size={24} /></button>
          <button style={{ 
            width: '84px', 
            height: '84px', 
            borderRadius: '50%', 
            border: '4px solid #fff', 
            background: 'transparent', 
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#fff' }} />
          </button>
          <button style={{ color: '#fff', opacity: 0.6 }}><Sparkles size={24} /></button>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.02em' }}>
          Align text or objects within the frame
        </p>
      </footer>
    </div>
  );
};

export default ScannerPage;
