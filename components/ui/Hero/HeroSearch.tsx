"use client";

import { HeroDatePicker } from "./HeroDatePicker";
import HeroPeoplePicker from "./HeroPeoplePicker";
import HeroTimePicker from "./HeroTimePicker";
import SearchInput from "./Search";
import { Button } from "../button";
import useSearchContext from "@/app/contexts/useSearchContext";



export default function HeroSearch() {
  const {
    searchInput,
    datePicked,
    guestPicked,
    timePicked,
    setSearchInput,
    setDatePicked,
    setGuestPicked,
    setTimePicked
  } = useSearchContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const searchData = {
      search: searchInput,
      date: datePicked,
      guests: guestPicked,
      time: timePicked
    };

    console.log('Search Data:', searchData);

    //selectime and guestpicked fails to clear the ui while nothing is saved in the context
    setSearchInput("");
    setDatePicked("");
    setGuestPicked("");
    setTimePicked("");

  };


  return (
    <form 
      className="flex flex-col md:flex-row items-center justify-center gap-[12px] lg:gap-[20px]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:w-[60%]">
        <HeroDatePicker />
        <HeroTimePicker />
        <HeroPeoplePicker />
      </div>

      <div className="flex flex-col md:flex-row md:w-[40%]">
        <SearchInput />
        <Button
          className="bg-[#007E47] text-white px-4 py-2 rounded-md w-full md:w-[100px]"
          type="submit"
        >
          Find Table
        </Button>
      </div>
    </form>
  );
}
