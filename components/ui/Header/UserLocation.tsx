"use client";

import * as React from "react";
import { ChevronDown, MapPin } from "lucide-react";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserLocation() {
  const [position, setPosition] = React.useState("Lagos");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <div className="flex items-center gap-[16px] px-[12px] py-[8px] w-[211px] h-[48px]  justify-between rounded-[8px] border-[1px] border-[#C5C5C5] ">
          <div className="flex items-center gap-[12px]">
            <div><MapPin /></div>
            <div>
              <p className="text-[8px]">Your Location</p>
              <p className="text-[12px]">{position}</p>
            </div>
          </div>

          <div><ChevronDown /></div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[211px] border-[1px] border-[#C5C5C5]">
        <DropdownMenuLabel>Select Location</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="Abuja">Abuja</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Lagos">Lagos</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Port Harcourt">
            Port Harcourt
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
