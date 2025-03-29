
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const Header = () => {
  const { currentTheme } = useTheme();

  return (
    <header className={cn(
      "px-6 py-4 flex items-center justify-between border-b",
      currentTheme === 'dark' ? "bg-slate-800 text-white border-slate-700" : 
      currentTheme === 'corporate' ? "bg-plone-blue text-white border-plone-darkblue" :
      "bg-white text-slate-800 border-slate-100"
    )}>
      <div className="flex items-center space-x-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" fill={currentTheme === 'dark' ? 'white' : currentTheme === 'corporate' ? '#EB7C2A' : '#0083BE'} />
          <path d="M11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16" 
            stroke={currentTheme === 'corporate' ? 'white' : currentTheme === 'dark' ? '#333' : 'white'} 
            strokeWidth="2" 
            strokeLinecap="round" />
        </svg>
        <div>
          <h1 className="text-xl font-bold">Plone/Volto Themes</h1>
          <p className={cn(
            "text-xs uppercase tracking-wider",
            currentTheme === 'dark' ? "text-gray-300" : 
            currentTheme === 'corporate' ? "text-white" : 
            "text-gray-500"
          )}>
            GSoC Proposal Demo
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
