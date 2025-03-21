"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function HeroDatePicker() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[205px] gap-[16px] justify-between text-left font-normal bg-white  text-[darkGreen]",
            !date && "text-muted-foreground"
          )}
          
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>{date}</span>}

          <ChevronDown className="flex-1"/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="bg-white text-[darkGreen]"
        />
      </PopoverContent>
    </Popover>
  )
}
