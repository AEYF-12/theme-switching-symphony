
import { useEffect } from "react";
import { ThemeProvider, useTheme, ThemeType } from "@/contexts/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import ThemeCard from "@/components/ThemeCard";
import AccessibilityBadge from "@/components/AccessibilityBadge";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const themes = [
  {
    name: 'minimalist' as ThemeType,
    title: "Minimalist",
    features: [
      "Light typography",
      "Ample whitespace",
      "Neutral colors"
    ]
  },
  {
    name: 'dark' as ThemeType,
    title: "Dark Mode",
    features: [
      "Dark background",
      "High-contrast text",
      "Blue/orange accent"
    ]
  },
  {
    name: 'corporate' as ThemeType,
    title: "Corporate",
    features: [
      "Bold headers",
      "Brand color presets",
      "Compact navigation"
    ]
  }
];

const ThemesDemo = () => {
  const { currentTheme, setTheme } = useTheme();
  
  useEffect(() => {
    console.log(`Theme changed to: ${currentTheme}`);
  }, [currentTheme]);

  const getBackgroundStyles = () => {
    switch (currentTheme) {
      case 'minimalist':
        return "bg-gray-50";
      case 'dark':
        return "bg-slate-950";
      case 'corporate':
        return "bg-white";
      default:
        return "bg-white";
    }
  };

  const getTextStyles = () => {
    switch (currentTheme) {
      case 'minimalist':
        return "text-slate-800";
      case 'dark':
        return "text-white";
      case 'corporate':
        return "text-slate-800";
      default:
        return "text-slate-800";
    }
  };

  return (
    <div className={cn("min-h-screen flex flex-col", getBackgroundStyles(), getTextStyles())}>
      <Header />
      
      <main className="flex-1 p-8 container mx-auto">
        <div className="mb-10 max-w-2xl">
          <h1 className={cn(
            "text-4xl font-bold mb-4",
            currentTheme === 'corporate' ? "text-plone-blue" : ""
          )}>
            Plone/Volto Themes Demo
          </h1>
          <p className={cn(
            "text-lg mb-6",
            currentTheme === 'dark' ? "text-gray-300" : "text-gray-600"
          )}>
            Visual proof for GSoC proposal: A showcase of different themes for the Plone CMS, 
            demonstrating the flexibility and potential of the theming system.
          </p>
          
          <div className="flex items-center gap-4 mb-12">
            <ThemeSwitcher />
            <AccessibilityBadge />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <div key={theme.name} className="animate-fade-in">
              <ThemeCard
                theme={theme}
                active={currentTheme === theme.name}
                onClick={() => setTheme(theme.name)}
              />
            </div>
          ))}
        </div>
      </main>
      
      <footer className={cn(
        "py-4 px-6 text-center border-t text-sm",
        currentTheme === 'dark' ? "bg-slate-900 text-gray-400 border-slate-800" : 
        currentTheme === 'corporate' ? "bg-plone-lightgray text-gray-600 border-plone-gray" : 
        "bg-white text-gray-500 border-gray-100"
      )}>
        <p>GSoC Proposal Demo for Plone Foundation © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <ThemesDemo />
    </ThemeProvider>
  );
};

export default Index;
