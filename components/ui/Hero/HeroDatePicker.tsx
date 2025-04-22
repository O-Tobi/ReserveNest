"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useSearchContext from "@/app/contexts/useSearchContext";

export function HeroDatePicker() {
  const { datePicked, setDatePicked } = useSearchContext();

  React.useEffect(() => {
    if (!datePicked) {
      setDatePicked(format(new Date(), "yyyy-MM-dd"));
    }
  }, [datePicked, setDatePicked]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[200px] md:w-1/3 gap-[18px] md:gap-[8px] justify-between text-left font-normal bg-white text-[darkGreen]",
            !datePicked && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {datePicked ? format(new Date(datePicked), "PPP") : null}
          <ChevronDown className="flex-1" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={datePicked ? new Date(datePicked) : undefined}
          onSelect={(date) => {
            if (date) {
              setDatePicked(format(date, "yyyy-MM-dd"));
            }
          }}

          modifiersStyles={{
            selected: {
              backgroundColor: "#004225",
              color: 'white'
            }
          }}
          initialFocus
          className="bg-white text-[darkGreen]"
        />
      </PopoverContent>
    </Popover>
  );
}
