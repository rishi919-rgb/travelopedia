import React, { useState, useRef } from 'react';
import ChatInterface from '../components/Assistant/ChatInterface';
import ActionCarousel from '../components/Assistant/ActionCarousel';
import { X, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AssistantPage = () => {
  const navigate = useNavigate();
  // Shared input state — lifted up so ActionCarousel can pre-fill ChatInterface
  const chatRef = useRef(null);
  const [pendingPrompt, setPendingPrompt] = useState('');

  const handleSelectPrompt = (prompt) => {
    setPendingPrompt(prompt);
  };

  return (
    <div className="fade-in" style={{ 
      height: '100vh', 
      background: 'var(--bg-primary)', 
      display: 'flex', 
      flexDirection: 'column',
      padding: '1.5rem',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Sparkles color="white" size={20} />
          </div>
          <h1 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontFamily: 'Outfit' }}>Travelopedia AI</h1>
        </div>
        <button 
          onClick={() => navigate(-1)} 
          className="glass"
          style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'var(--text-muted)' 
          }}
        >
          <X size={20} />
        </button>
      </header>

      <div style={{ marginBottom: '1.5rem' }}>
        <ActionCarousel onSelectPrompt={handleSelectPrompt} />
      </div>

      <div style={{ flex: 1, overflow: 'hidden' }}>
        <ChatInterface ref={chatRef} pendingPrompt={pendingPrompt} onPromptConsumed={() => setPendingPrompt('')} />
      </div>
    </div>
  );
};

export default AssistantPage;

