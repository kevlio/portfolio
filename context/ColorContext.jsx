import React, { createContext } from "react";

export const ColorContext = createContext();

export function ColorProvider({ children }) {
  const themeCSS = {
    colors: {
      white: "",
      pink: "#ff006b",
      purple: "#4D00A3",
      blue: "#0437F2",
      green: "#48bb78",
    },
  };

  const providerValue = {
    themeCSS,
  };

  return (
    <ColorContext.Provider value={providerValue}>
      {children}
    </ColorContext.Provider>
  );
}
