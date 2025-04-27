import { ForwardedRef } from "react";

import { UserRound } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

type GuestSelectProps = {
    value: number;
    onChange: (value: number) => void;
    onBlur?: () => void;
    name?: string;
    ref?: ForwardedRef<any>;
    disabled?: boolean;
  };
  

export default function GuestSelect({
  value,
  onChange,
  onBlur,
  name,
  ref,
  disabled,
}: GuestSelectProps) {
  const guestList = ["2", "3", "4", "5", "6", "7", "8"];

  return (
    <Select
    value={value.toString()}
    onValueChange={(val) => onChange(Number(val))}
    disabled={disabled}
  >
    <SelectTrigger
      ref={ref}
      name={name}
      onBlur={onBlur}
      className="flex justify-between border-[darkGreen]/50 text-[darkGreen] rounded-[8px] w-full"
    >
      <div className="flex items-center gap-[8px]">
      <UserRound />
      <SelectValue placeholder="Select guests" />
      </div>
      
    </SelectTrigger>
    <SelectContent className="bg-white border-[darkgreen]/50">
      {guestList.map((gl, index) => (
        <SelectItem className="text-[darkGreen]" key={index} value={gl}>
          {gl} people
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
  );
}
