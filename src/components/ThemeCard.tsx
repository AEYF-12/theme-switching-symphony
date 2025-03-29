
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeType } from "@/contexts/ThemeContext";

interface ThemeCardProps {
  theme: {
    name: ThemeType;
    title: string;
    features: string[];
  };
  active: boolean;
  onClick: () => void;
}

const ThemeCard = ({ theme, active, onClick }: ThemeCardProps) => {
  const getThemeStyles = () => {
    switch (theme.name) {
      case 'minimalist':
        return "bg-white text-slate-800 border-slate-200";
      case 'dark':
        return "bg-slate-900 text-white border-slate-700";
      case 'corporate':
        return "bg-gradient-to-r from-plone-blue to-plone-darkblue text-white border-blue-700";
      default:
        return "";
    }
  };

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all w-[280px] h-[240px]", 
        getThemeStyles(),
        active ? "ring-2 ring-plone-orange" : "",
        active ? "scale-105" : "hover:scale-103"
      )}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{theme.title}</CardTitle>
          {active && (
            <Badge className="bg-plone-orange hover:bg-plone-orange">Active</Badge>
          )}
        </div>
        <CardDescription className={theme.name === 'dark' ? "text-gray-300" : "text-gray-500"}>
          Click to apply
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {theme.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span> {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ThemeCard;
