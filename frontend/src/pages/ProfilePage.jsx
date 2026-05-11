import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../store/slices/authSlice';
import { User, LogOut, Settings, Shield, ChevronRight, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <div className="fade-in" style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-primary)', 
      display: 'flex', 
      flexDirection: 'column',
      padding: '2rem 1.5rem'
    }}>
      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '1rem' }}>
        <button 
          onClick={() => navigate(-1)} 
          className="glass" 
          style={{ padding: '0.75rem', borderRadius: '50%', display: 'flex' }}
        >
          <ArrowLeft size={24} color="var(--text-primary)" />
        </button>
        <h1 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>My Profile</h1>
      </header>

      {/* User Info Card */}
      <div className="glass" style={{
        padding: '1.5rem',
        borderRadius: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <User size={32} color="white" />
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
            {user?.name || 'Traveler'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
            {user?.email || 'No email provided'}
          </p>
        </div>
      </div>

      {/* Settings Sections */}
      <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', paddingLeft: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Preferences
      </h3>

      <div className="glass" style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '2rem' }}>
        
        {/* Travel Mode Setting (Placeholder for PR 4) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--glass-border)',
          cursor: 'pointer'
        }}>
          <div style={{ background: 'rgba(0, 255, 204, 0.1)', padding: '0.6rem', borderRadius: '12px', marginRight: '1rem' }}>
            <Settings size={20} color="var(--accent-primary)" />
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '0.1rem' }}>Travel Mode</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Currently: {user?.travelMode || 'Solo Traveler'}</p>
          </div>
          <ChevronRight size={20} color="var(--text-muted)" />
        </div>

        {/* Safety Contacts Setting */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '1.25rem 1.5rem',
          cursor: 'pointer'
        }}>
          <div style={{ background: 'rgba(255, 77, 77, 0.1)', padding: '0.6rem', borderRadius: '12px', marginRight: '1rem' }}>
            <Shield size={20} color="var(--accent-danger)" />
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '0.1rem' }}>Emergency Contacts</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Manage SOS recipients</p>
          </div>
          <ChevronRight size={20} color="var(--text-muted)" />
        </div>

      </div>

      {/* Logout Button */}
      <button 
        onClick={handleLogout}
        className="glass"
        style={{
          width: '100%',
          padding: '1.25rem',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          color: '#ff4d4d',
          fontWeight: 600,
          fontSize: '1rem',
          marginTop: 'auto'
        }}
      >
        <LogOut size={20} />
        Sign Out
      </button>

    </div>
  );
};

export default ProfilePage;
