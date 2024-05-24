import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GameContextProps {
  generated: boolean;
  setGenerated: (value: boolean) => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const useGameContext = (): GameContextProps => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [generated, setGenerated] = useState(false);

  return (
    <GameContext.Provider value={{ generated, setGenerated }}>
      {children}
    </GameContext.Provider>
  );
};
