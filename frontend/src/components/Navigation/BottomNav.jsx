import React from 'react';
import { Home, Shield, Camera, Search } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: <Home size={22} />, path: '/', label: 'Home' },
    { icon: <Shield size={22} />, path: '/safety', label: 'Safety' },
    { icon: <Camera size={22} />, path: '/scanner', label: 'Scan' },
    { icon: <Search size={22} />, path: '/explore', label: 'Explore' }
  ];

  return (
    <div className="glass" style={{
      position: 'fixed',
      bottom: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 2.5rem)',
      maxWidth: '450px',
      height: '74px',
      borderRadius: '26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      zIndex: 100,
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
      padding: '0 1rem',
      border: '1px solid var(--glass-border)'
    }}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              flex: 1,
              padding: '0.5rem 0'
            }}
          >
            <div style={{
              transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'transform 0.3s ease'
            }}>
              {item.icon}
            </div>
            <span style={{ 
              fontSize: '0.65rem', 
              fontWeight: 700, 
              opacity: isActive ? 1 : 0.7,
              letterSpacing: '0.02em'
            }}>
              {item.label}
            </span>
            
            {isActive && (
              <motion.div
                layoutId="navGlow"
                style={{
                  position: 'absolute',
                  top: '-12px',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: 'var(--accent-primary)',
                  boxShadow: '0 0 12px var(--accent-primary), 0 0 4px var(--accent-primary)'
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
