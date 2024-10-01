'use client';

import { createContext, useState, useEffect, useContext, ReactNode } from "react";

// Define la interfaz para el contexto del tema
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Crea el contexto con un valor por defecto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    // Aplica la clase `dark` si el tema es oscuro
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Alterna entre modo claro y oscuro
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar el contexto del tema
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};