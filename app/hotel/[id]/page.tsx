"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import getMockData from "@/lib/data";
//import Image from "next/image";
import HotelCarousel from "@/components/ui/HotelPage/HotelCarousel";
import { HeroBg } from "@/components/ui/assets/assets";
import {
  Star,
  CircleDollarSign,
  MapPin,
  Clock,
  BadgeAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MenuAccordion from "@/components/ui/HotelPage/MenuAccordion";

type Hotel = {
  id: string;
  avatar: string;
  hotelName: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  pictures: string;
  openingTime: string;
  availableOffers: number;
  closingTime: number;
};

export default function Hotel() {
  const testList = [HeroBg, HeroBg];
  const params = useParams();
  const id = params.id as string;
  const [hotel, setHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    setHotel(null);

    const fetchData = async () => {
      const hotels = await getMockData("hotels");
      const selectedHotel = hotels.find((h: Hotel) => h.id === id);
      setHotel(selectedHotel || null);
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  if (!hotel) return null;

  return (
    <div className="flex flex-col lg:flex-row items-center px-[30px] lg:px-[40px] gap-[40px]">
      {/* hotel hero */}
      <div className="firstHalf w-full lg:w-2/3 ">
        <div>
          <HotelCarousel imgList={testList} />
        </div>
        <div className="bg-white rounded-[12px] my-[22px] px-[16px] py-[24px] lg:px-[24px] lg:py-[32px]">
          <div className="flex md:flex-row flex-col justify-center items-center md:justify-between mb-[30px] gap-[20px]">
            <h2 className="text-[24px] lg:text-[32px] leading-[28px] font-medium text-[darkgreen]">
              {hotel.hotelName}
            </h2>
            <p className="flex items-center gap-[12px]">
              <Star className="h-[20px] w-[20px]" /> {hotel.rating} Stars |{" "}
              <span className="text-[darkGreen] underline">450 Reviews</span>
            </p>
          </div>

          {/* time, location and price */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-[20px] justify-center md:justify-between items-center text-[#202020]">
            <p className="flex flex-row items-center text-center gap-[16px] w-full md:w-[calc(50%-10px)] px-4 py-2">
              <CircleDollarSign /> {hotel.price}
            </p>
            <p className="flex flex-row items-center text-center  gap-[16px] w-full md:w-[calc(50%-10px)] px-4 py-2">
              <MapPin /> {hotel.location}
            </p>
            <p className="flex flex-row items-center text-center gap-[16px] w-full md:w-[calc(50%-10px)] px-4 py-2">
              <Clock /> <span className="text-[darkGreen]">Open from</span>{" "}
              {hotel.openingTime}
            </p>
          </div>
        </div>
        {/* Available offers */}
        <div className="flex flex-col justify-center  items-center gap-[20px] p-[20px] rounded-[12px] bg-white">
          <h2 className="text-[22px] text-[darkGreen] leading-[28px]">
            Available Offers
          </h2>
          {/* offers here */}
          <div className="flex flex-col gap-[12px] justify-center  w-full bg-[lightgreen]/5">
            {/* map this section when you're implementing the backend */}
            {/* this should be a form with that tracks submission */}
            <div className="text-[darkGreen] flex flex-col md:flex-row items-center justify-center md:justify-between w-full rounded-[8px] border-[1px] border-[#004225] p-[12px] md:h-[72px] gap-[12px]">
              <p className="flex gap-[10px]">
                <BadgeAlert /> Sun, {hotel.openingTime} - {hotel.closingTime}
              </p>
              <p>
                <span className="text-[lightGreen]">
                  {hotel.availableOffers}
                </span>{" "}
                offers available
              </p>
              <Button className="bg-[darkGreen] rounded-[8px] text-white">
                Book Now
              </Button>
            </div>
            <div className="text-[darkGreen] flex flex-col md:flex-row items-center justify-center md:justify-between w-full rounded-[8px] border-[1px] border-[#004225] p-[12px] md:h-[72px] gap-[12px]">
              <p className="flex gap-[10px]">
                <BadgeAlert /> Sun, {hotel.openingTime} - {hotel.closingTime}
              </p>
              <p>
                <span className="text-[lightGreen]">
                  {hotel.availableOffers}
                </span>{" "}
                offers available
              </p>
              <Button className="bg-[darkGreen] rounded-[8px] text-white">
                Book Now
              </Button>
            </div>
            <div className="text-[darkGreen] flex flex-col md:flex-row items-center justify-center md:justify-between w-full rounded-[8px] border-[1px] border-[#004225] p-[12px] md:h-[72px] gap-[12px]">
              <p className="flex gap-[10px]">
                <BadgeAlert /> Sun, {hotel.openingTime} - {hotel.closingTime}
              </p>
              <p>
                <span className="text-[lightGreen]">
                  {hotel.availableOffers}
                </span>{" "}
                offers available
              </p>
              <Button className="bg-[darkGreen] rounded-[8px] text-white">
                Book Now
              </Button>
            </div>
          </div>
        </div>

        {/* menu goes here */}
        <div className="bg-white rounded-[16px] mt-[20px] ">
          <MenuAccordion
          name={hotel.hotelName}
          type="Vegetarian"
          price={hotel.price}
          menuImage={hotel.avatar}
          />
        </div>
      </div>
      <div className="secondHalf mx-[50px] lg:mx-0  w-full lg:w-1/3 bg-red-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero
        rerum hic impedit autem, dolorem animi nemo. Debitis quibusdam obcaecati
        repellendus sit esse, delectus enim distinctio deserunt eaque
        repudiandae modi.
      </div>
    </div>
  );
}
