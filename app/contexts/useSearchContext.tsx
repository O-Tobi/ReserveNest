"use client"

import { createContext, useContext, useState } from "react";

interface SearchContextType {
  searchInput: string;
  datePicked: string;
  guestPicked: string;
  timePicked: string;
  setSearchInput: (searchInput: string) => void;
  setDatePicked: (datePicked: string) => void;
  setGuestPicked: (guestPicked: string) => void;
  setTimePicked: (timePicked: string) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error(
      "useSearchContext must be used within a SearchProvider"
    );
  return context;
};


export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [datePicked, setDatePicked] = useState("");
  const [guestPicked, setGuestPicked] = useState("");
  const [timePicked, setTimePicked] = useState("");

  const value: SearchContextType = {
    searchInput,
    datePicked,
    guestPicked,
    timePicked,
    setSearchInput,
    setDatePicked,
    setGuestPicked,
    setTimePicked,
  };



  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default useSearchContext;
