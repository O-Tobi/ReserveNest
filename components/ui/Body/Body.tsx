"use client";

import dynamic from "next/dynamic";
import HotelSkeleton from "../Skeleton/HotelSkeleton";
import CuisineSkeleton from "../Skeleton/CuisineSkeleton";

const FeaturedHotels = dynamic(() => import("./FeaturedHotels"), {
  ssr: false,
  loading: () => <HotelSkeleton />,
});

const NearbyHotels = dynamic(() => import("./NearbyHotels"), {
  ssr: false,
  loading: () => <HotelSkeleton />,
});

const Cuisines = dynamic(() => import("./Cuisines"), {
  ssr: false,
  loading: () => <CuisineSkeleton />,
})

export default function Body() {
  return (
    <div className="flex flex-col mx-[30px] mt-[40px] md:mx-[70px] gap-[40px]">
      <FeaturedHotels />
      <Cuisines />
      <NearbyHotels />
    </div>
  );
}
