
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { toast } from 'sonner';

export type ThemeType = 'minimalist' | 'dark' | 'corporate';

interface ThemeContextType {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('minimalist');

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    toast(`${theme.charAt(0).toUpperCase() + theme.slice(1)} theme applied`, {
      description: "Your theme has been updated successfully.",
      position: "top-right",
    });
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
