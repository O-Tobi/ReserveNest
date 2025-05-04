import { Search } from "lucide-react";
import { Input } from "../input";
import { useState } from "react";


export default function MenuSearch() {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div className="flex flex-row items-center gap-[12px] ">
      {/* Search Input Wrapper */}
      <div className="relative w-full flex items-center">
        <Input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Search menu"
          className="w-full border-[#C5C5C5] border bg-white text-[12px] focus:ring-[darkGreen] text-[darkGreen] focus:ring-1 placeholder:opacity-40 placeholder:text-black focus:placeholder:text-[darkGreen] px-8 md:px-10 py-2 pr-10"
        />
        <Search className="absolute left-2 md:left-4  top-1/2 transform -translate-y-1/2 w-5 h-5 text-[darkGreen]" />
      </div>
    </div>
  );
}
