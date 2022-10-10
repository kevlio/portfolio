import React, { createContext, useState } from "react";

export const BackgroundContext = createContext();
export function BackgroundProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const providerValue = { darkMode, setDarkMode };

  return (
    <BackgroundContext.Provider value={providerValue}>
      {children}
    </BackgroundContext.Provider>
  );
}
