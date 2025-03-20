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
        <div className="flex items-center gap-[16px] md:px-[12px] md:py-[8px] w-[24px] h-[24px] md:w-[211px] md:h-[48px]  justify-between rounded-[8px] md:border-[1px] border-[#C5C5C5] ">
          <div className="flex items-center gap-[12px]">
            <div >
              <MapPin className="text-[#007E47]  md:text-black h-[24px] w-[24px]"/>
            </div>
            <div>
              <p className="text-[8px] hidden md:block">Your Location</p>
              <p className="text-[12px] hidden md:block">{position}</p>
            </div>
          </div>

          <div>
            <ChevronDown className="hidden md:block" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto lg:w-[211px] border-[1px] border-[#C5C5C5]">
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
