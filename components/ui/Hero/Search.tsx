import { Search } from "lucide-react";
import { Input } from "../input";
//import { Button } from "../button";

export default function SearchInput() {
  return (
    <div className="flex items-center gap-[12px]">
      {/* Search Input Wrapper */}
      <div className="relative md:w-[400px] flex items-center">
        <Input
          type="text"
          placeholder="Search restaurant"
          className="w-[200px] md:w-full border-[#C5C5C5] border bg-white text-[12px] focus:ring-[darkGreen] text-[darkGreen] focus:ring-1 placeholder:opacity-40 placeholder:text-black focus:placeholder:text-[darkGreen] px-8 md:px-10 py-2 pr-10"
        />
        <Search className="absolute left-2 md:left-4  top-1/2 transform -translate-y-1/2 w-5 h-5 text-[darkGreen]" />
      </div>

      {/* Button */}
      {/* <Button className="bg-[#007E47] text-white px-4 py-2 rounded-md" type="submit">
        Find Table
      </Button> */}
    </div>
  );
}
