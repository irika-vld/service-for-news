import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};

interface ThemePrividerProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemePrividerProps) => {
  const getInitialTheme = () => {
    const darkTheme = localStorage.getItem("themeIsDark");
    return darkTheme ? JSON.parse(darkTheme) : false;
  };

  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("themeIsDark", JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
