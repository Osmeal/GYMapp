import { createContext, useState } from 'react';

export const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
  const [info, setInfo] = useState(null);
  const [userId, setUserId] = useState(null);

  return (
    <ScreenContext.Provider value={{ info, setInfo, userId, setUserId }}>
      {children}
    </ScreenContext.Provider>
  );
};
