import { createContext, useState } from 'react';

export const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
  const [info, setInfo] = useState(null); 

  return (
    <ScreenContext.Provider value={{ info, setInfo}}>
      {children}
    </ScreenContext.Provider>
  );
};
