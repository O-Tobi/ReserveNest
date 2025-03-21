"use client"

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserRound } from "lucide-react";
import { useState } from "react";

export default function HeroPeoplePicker() {
  const [selectedGuest, setSelectedGuest] = useState("");

  const guestList = ["2", "3", "4", "5", "6", "7", "8"];

  return (
    <Select value={selectedGuest} onValueChange={setSelectedGuest}>
      <SelectTrigger className="w-1/3 h-full bg-white text-[darkGreen]">
        <div className="flex items-center gap-[8px]">
          <UserRound />
          <SelectValue placeholder="Select Guest" />
        </div>
      </SelectTrigger>
      <SelectContent className="border-white text-white">
        <SelectGroup className="bg-white text-[darkGreen]">
          <SelectLabel>Select Guests</SelectLabel>
          {guestList.map((gl, index) => (
            <SelectItem key={index} value={gl}>
              {gl} people
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
