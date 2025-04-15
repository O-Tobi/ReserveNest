"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import getMockData from "@/lib/data";
//import Image from "next/image";
import HotelCarousel from "@/components/ui/HotelPage/HotelCarousel";
import { HeroBg } from "@/components/ui/assets/assets";
import { Star, CircleDollarSign, MapPin, Clock } from "lucide-react";

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
      <div className="firstHalf w-full lg:w-2/3">
        <div>
          <HotelCarousel imgList={testList} />
        </div>
        <div className="bg-white rounded-[12px] my-[22px] px-[16px] py-[24px] lg:px-[24px] lg:py-[32px]">
          <div className="flex lg:flex-row flex-col justify-center items-center lg:justify-between mb-[30px] gap-[20px]">
            <h2 className="text-[24px] lg:text-[32px] leading-[28px] font-medium text-[darkgreen]">
              {hotel.hotelName}
            </h2>
            <p className="flex items-center gap-[12px]">
              <Star className="h-[20px] w-[20px]" /> {hotel.rating} Stars |{" "}
              <span className="text-[darkGreen] underline">450 Reviews</span>
            </p>
          </div>

          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-wrap lg:flex-nowrap gap-[20px] justify-center lg:justify-between items-center text-[#202020]">
              <p className="flex w-1/2 gap-[16px] ">
                <CircleDollarSign /> {hotel.price}
              </p>
              <p className="flex w-1/2 gap-[16px]">
                <MapPin /> {hotel.location}
              </p>
            </div>

            <div className="flex  gap-[20px] w-full justify-center lg:justify-between items-center flex-wrap text-[#202020]">
              <p className="flex  w-1/2 gap-[16px]">
                <Clock /> <span className="text-[darkGreen]"></span>{" "}
                {hotel.openingTime}{" "}
              </p>
            </div>
          </div>
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
