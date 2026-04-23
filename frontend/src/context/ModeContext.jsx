import React, { createContext, useContext, useState } from 'react';

const ModeContext = createContext();

export const modes = {
  SOLO_FEMALE: { id: 'female', label: 'Solo Female', color: 'hsl(330, 80%, 60%)' },
  SOLO_TRAVELER: { id: 'solo', label: 'Solo Traveler', color: 'hsl(190, 100%, 50%)' },
  FAMILY: { id: 'family', label: 'Family Mode', color: 'hsl(140, 70%, 50%)' }
};

export const ModeProvider = ({ children }) => {
  const [activeMode, setActiveMode] = useState(modes.SOLO_TRAVELER);

  return (
    <ModeContext.Provider value={{ activeMode, setActiveMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);
