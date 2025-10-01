import { createContext, useState, useEffect } from "react";

// Create a context with a default value
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // State to hold the current theme. Initialize from localStorage or default to 'light'.
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Effect to apply the theme class to the <html> element and update localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
