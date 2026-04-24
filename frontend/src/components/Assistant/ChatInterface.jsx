import React, { useState } from 'react';
import { Send, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Welcome to Barcelona, Rishi! I've analyzed your solo mode preferences. Would you like to see well-lit routes to your hotel?" }
  ]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingBottom: '1rem' }}>
        {messages.map((msg, i) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={i}
            style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%',
              padding: '1rem 1.25rem',
              borderRadius: '20px',
              borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '20px',
              borderBottomRightRadius: msg.role === 'user' ? '4px' : '20px',
              background: msg.role === 'user' ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
              color: msg.role === 'user' ? 'var(--bg-primary)' : 'var(--text-primary)',
              fontSize: '0.95rem',
              lineHeight: '1.5',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      <div style={{ position: 'relative', marginTop: 'auto' }}>
        <input
          placeholder="Ask Travelopedia anything..."
          style={{
            width: '100%',
            padding: '1.25rem 3.5rem 1.25rem 1.5rem',
            borderRadius: '24px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-primary)',
            outline: 'none',
            fontSize: '1rem'
          }}
        />
        <div style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '0.5rem' }}>
          <button style={{ color: 'var(--text-muted)', padding: '0.5rem' }}><Mic size={20} /></button>
          <button style={{ color: 'var(--accent-primary)', padding: '0.5rem' }}><Send size={20} /></button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
