// src/theme.jsx
import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "./Theme.css";


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="primary-btn mt-2 " onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
