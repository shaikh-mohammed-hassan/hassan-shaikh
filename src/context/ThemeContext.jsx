import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
        setTheme(newTheme);
    };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme
    }}
    >
      {children}
    </ThemeContext.Provider>
  );
}