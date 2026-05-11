import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Travelopedia ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: 'var(--bg-primary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          gap: '1.5rem',
        }}>
          <div style={{
            fontSize: '4rem',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            ⚠️
          </div>
          <h1 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', margin: 0 }}>
            Something went wrong
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '320px' }}>
            An unexpected error occurred. Please refresh the page to continue your journey.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.9rem 2rem',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              color: 'var(--bg-primary)',
              fontWeight: 700,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Reload App
          </button>
          {import.meta.env.DEV && (
            <details style={{ color: 'var(--text-muted)', fontSize: '0.75rem', maxWidth: '400px', textAlign: 'left' }}>
              <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>Error details (dev only)</summary>
              <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {this.state.error?.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
