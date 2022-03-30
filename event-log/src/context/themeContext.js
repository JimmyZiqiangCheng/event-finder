import React, { useState } from "react";

export const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <ThemeContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
