"use client";

import Cuisines from "./Cuisines";
import FeaturedHotels from "./FeaturedHotels";
import NearbyHotels from "./NearbyHotels";

export default function Body() {
  
  return (
    <div className="flex flex-col mx-[30px] mt-[40px] md:mx-[70px] gap-[40px]">
      <FeaturedHotels />
      <Cuisines />
      <NearbyHotels />
    </div>
  );
}
