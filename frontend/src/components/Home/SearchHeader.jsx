import React from 'react';
import { Search, Menu, User, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchHeader = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  return (
    <div style={{
      position: 'absolute',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 2rem)',
      maxWidth: '500px',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }}>
      <div className="glass" style={{
        flex: 1,
        height: '56px',
        borderRadius: 'var(--radius-full)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1.25rem',
        boxShadow: 'var(--shadow-lg)'
      }}>
        <Search size={20} color="var(--text-muted)" />
        <input 
          type="text" 
          placeholder="Search destinations, clinics..." 
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            color: 'var(--text-primary)',
            fontSize: '0.95rem',
            marginLeft: '0.75rem',
            width: '100%',
            fontWeight: 400
          }}
        />
        <button 
          onClick={() => navigate('/assistant')}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          <Sparkles size={16} color="white" />
        </button>
      </div>
      
      <div 
        onClick={() => navigate(user ? '/profile' : '/login')}
        className="glass" 
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-lg)',
          cursor: 'pointer'
        }}
      >
        <User size={20} color="var(--accent-primary)" />
      </div>
    </div>
  );
};

export default SearchHeader;
