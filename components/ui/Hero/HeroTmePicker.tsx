import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function HeroTimePicker() {
    const timeList = [
        "7:00 am",
        "7:30 am",
        "8:00 am",
        "8:30 am",
        "9:00 am",
        "9:30 am",
        "10:00 am",
        "10:30 am",
        "11:00 am",
        "11:30 am",
        "12:00 pm",
        "12:30 pm",
        "1:00 pm",
        "1:30 pm",
        "2:00 pm",
        "2:30 pm",
        "3:00 pm",
        "3:30 pm",
        "4:00 pm",
        "4:30 pm",
        "5:00 pm",
        "5:30 pm",
        "6:00 pm",
        "6:30 pm",
        "7:00 pm",
        "7:30 pm",
        "8:00 pm",
        "8:30 pm",
        "9:00 pm",
        "9:30 pm",
        "10:00 pm",
        "10:30 pm",
        "11:00 pm",
      ];
      
  return (
    <Select>
      <SelectTrigger className="w-[205px] bg-white text-[darkGreen] ">
        <SelectValue placeholder="Select Time" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="bg-white text-[darkGreen]">
          <SelectLabel>Select Time</SelectLabel>
          {timeList.map((tl, index) => (
            <SelectItem key={index} value={tl}>{tl}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
