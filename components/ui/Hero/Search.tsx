import { Search } from "lucide-react";
import { Input } from "../input";
import useSearchContext from "@/app/contexts/useSearchContext";

export default function SearchInput() {
  const { searchInput, setSearchInput } = useSearchContext();

  return (
    <div className="flex flex-col md:flex-row items-center gap-[12px] ">
      {/* Search Input Wrapper */}
      <div className="relative w-[200px] md:w-5/6 flex  items-center">
        <Input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Search restaurant"
          className="w-full border-[#C5C5C5] border bg-white text-[12px] focus:ring-[darkGreen] text-[darkGreen] focus:ring-1 placeholder:opacity-40 placeholder:text-black focus:placeholder:text-[darkGreen] px-8 md:px-10 py-2 pr-10"
        />
        <Search className="absolute left-2 md:left-4  top-1/2 transform -translate-y-1/2 w-5 h-5 text-[darkGreen]" />
      </div>
    </div>
  );
}
