import React, { createContext, useState } from "react";

export const ComponentContext = createContext();

export function ComponentProvider({ children }) {
  const [component, setComponent] = useState("home");
  const providerValue = { component, setComponent };

  return (
    <ComponentContext.Provider value={providerValue}>
      {children}
    </ComponentContext.Provider>
  );
}
