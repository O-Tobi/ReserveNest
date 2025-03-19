import { Search } from "lucide-react";
import { Input } from "../input";

export default function SearchInput() {
  return (
    <div className="absolute w-[425px]  ">
      <Input
        type="text"
        placeholder="Search restaurant and cuisines..."
        className="border-[#C5C5C5] border-[1px] bg-white text-[12px] focus-visible:ring-[lightGreen] text-[lightGreen] focus-visible:ring-[0.5px] placeholder:opacity-40 placeholder:text-black focus:placeholder:text-[lightGreen]"
      />

      <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 focus-visible:ring-[lightGreen] w-5 h-5" />
    </div>
  );
}
