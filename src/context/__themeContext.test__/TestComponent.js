import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

const TestComponent = () => {
  const { collapsed, setCollapsed } = useContext(ThemeContext);
  return (
    <div>
      <p data-testid="collapsed">{collapsed ? "true" : "false"}</p>
      <button data-testid="toggleTrue" onClick={() => setCollapsed(true)}>
        toggle on
      </button>
      <button data-testid="toggleFalse" onClick={() => setCollapsed(false)}>
        toggle off
      </button>
    </div>
  );
};

export default TestComponent;
