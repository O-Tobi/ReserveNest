import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AuthTooltipProps {
  children: React.ReactNode;
}

export function AuthTooltip({ children }: AuthTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side="bottom"
          className=" shadow-neutral-800 bg-white border-[0.5px] border-[darkGreen] rounded-[8px] p-[20px] text-[14px] text-black font-normal"
        >
          <p>Must contain:</p>
          <ul>
            <li>Uppercase letter</li>
            <li>Lowercase letter</li>
            <li>Number</li>
            <li>Special character</li>
            <li>Minimum length: 8 characters</li>
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
