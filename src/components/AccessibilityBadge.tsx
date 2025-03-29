
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const AccessibilityBadge = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge className="bg-green-600 hover:bg-green-700 cursor-help">
            <span className="flex items-center gap-1.5">
              WCAG 2.1 AA
              <CheckIcon className="h-3 w-3" />
            </span>
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>All themes comply with WCAG 2.1 AA accessibility standards</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AccessibilityBadge;
