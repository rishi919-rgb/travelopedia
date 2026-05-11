import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../services/api';

const WELCOME_MESSAGE = {
  role: 'assistant',
  text: "Hi! I'm AURA, your AI Travel Companion. Ask me about safe routes, nearby clinics, EV chargers, local tips, or anything travel-related! 🌍",
};

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 8 }}
    style={{
      alignSelf: 'flex-start',
      padding: '0.85rem 1.25rem',
      borderRadius: '20px',
      borderBottomLeftRadius: '4px',
      background: 'var(--bg-tertiary)',
      display: 'flex',
      gap: '5px',
      alignItems: 'center',
    }}
  >
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--text-muted)', display: 'block' }}
      />
    ))}
  </motion.div>
);

const ChatInterface = () => {
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg = { role: 'user', text: trimmed };
    const updatedMessages = [...messages, userMsg];

    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Build history for the backend (exclude welcome message)
      const history = updatedMessages.slice(1).map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        content: m.text,
      }));

      const { data } = await api.post('/ai/chat', {
        message: trimmed,
        history: history.slice(0, -1), // Exclude the message we just added (it's the current prompt)
      });

      setMessages((prev) => [...prev, { role: 'assistant', text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Sorry, I had trouble connecting. Please try again in a moment.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
      {/* Message List */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingBottom: '0.5rem' }}>
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                padding: '1rem 1.25rem',
                borderRadius: '20px',
                borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '20px',
                borderBottomRightRadius: msg.role === 'user' ? '4px' : '20px',
                background: msg.role === 'user'
                  ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
                  : 'var(--bg-tertiary)',
                color: msg.role === 'user' ? 'var(--bg-primary)' : 'var(--text-primary)',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                boxShadow: 'var(--shadow-sm)',
                whiteSpace: 'pre-wrap',
              }}
            >
              {msg.text}
            </motion.div>
          ))}
          {isLoading && <TypingIndicator key="typing" />}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Input Bar */}
      <div style={{ position: 'relative', marginTop: 'auto' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask AURA anything..."
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '1.25rem 4rem 1.25rem 1.5rem',
            borderRadius: '24px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-primary)',
            outline: 'none',
            fontSize: '1rem',
            boxSizing: 'border-box',
            opacity: isLoading ? 0.7 : 1,
          }}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || !input.trim()}
          style={{
            position: 'absolute',
            right: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: input.trim() && !isLoading ? 'var(--accent-primary)' : 'var(--text-muted)',
            padding: '0.5rem',
            transition: 'color 0.2s ease',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {isLoading ? <Loader2 size={22} style={{ animation: 'spin 1s linear infinite' }} /> : <Send size={22} />}
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;

