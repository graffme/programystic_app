import React, { createContext } from "react";
import { lightTheme, darkTheme } from "../styles";

const initialState = {
  dark: false,
  theme: lightTheme,
  toggleTheme: () => {},
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }: { children: React.ReactElement }) => {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);

  const toggleTheme = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };

  const theme = dark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
