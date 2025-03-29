
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CheckIcon, ChevronDown } from "lucide-react";
import { useTheme, ThemeType } from "@/contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useTheme();

  const themes: { value: ThemeType; label: string }[] = [
    { value: 'minimalist', label: 'Minimalist' },
    { value: 'dark', label: 'Dark Mode' },
    { value: 'corporate', label: 'Corporate' }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[180px] justify-between">
          Theme Switcher
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px]">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setTheme(theme.value)}
          >
            {theme.label}
            {currentTheme === theme.value && <CheckIcon className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
