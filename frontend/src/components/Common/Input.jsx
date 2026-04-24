import React from 'react';

const Input = ({ label, name, type = 'text', placeholder, value, onChange, onBlur, error, touched, icon }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
      {label && <label style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, marginLeft: '0.25rem' }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        {icon && (
          <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
            {icon}
          </div>
        )}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          style={{
            width: '100%',
            padding: icon ? '0.85rem 1rem 0.85rem 3rem' : '0.85rem 1.25rem',
            borderRadius: '16px',
            background: 'var(--bg-secondary)',
            border: touched && error ? '1.5px solid #ff4d4d' : '1px solid var(--glass-border)',
            color: 'var(--text-primary)',
            outline: touched && error ? 'none' : 'initial',
            fontSize: '0.95rem',
            transition: 'all 0.3s ease'
          }}
        />
      </div>
      {touched && error && (
        <span style={{ color: '#ff4d4d', fontSize: '0.75rem', marginLeft: '0.5rem', fontWeight: 500 }}>{error}</span>
      )}
    </div>
  );
};

export default Input;
