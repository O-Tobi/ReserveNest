"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import getMockData from "@/lib/data";
//import Image from "next/image";
import HotelCarousel from "@/components/ui/HotelPage/HotelCarousel";
import { HeroBg } from "@/components/ui/assets/assets";
import { Star, CircleDollarSign, MapPin, Clock } from "lucide-react";
import MenuAccordion from "@/components/ui/HotelPage/MenuAccordion";
import AvailableOffers from "@/components/ui/HotelPage/AvailableOffers";
//import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

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
        <AvailableOffers
          openingTime={hotel.openingTime}
          closingTime={hotel.closingTime}
          availableOffers={hotel.availableOffers}
        />

        {/* menu goes here */}
        <div className="bg-white rounded-[16px] mt-[20px] ">
          <MenuAccordion
            name={hotel.hotelName}
            type="Vegetarian"
            price={hotel.price}
            menuImage={hotel.avatar}
            mealRating={hotel.rating}
          />
        </div>

        {/* Ratings and reviews */}
        <div className="flex flex-col justify-center items-center w-full md:items-start gap-[20px]   my-[20px]">
          <div className="flex flex-col w-full justify-center items-center md:items-start bg-white p-[20px] rounded-[12px]">
            <h2 className="text-[22px] text-[darkGreen] leading-[28px]">
              Ratings and Reviews
            </h2>

            <Separator className="my-[20px] border-[0.5px] text-[#C5C5C5]/50" />

            <div className="ratings flex flex-col md:flex-row w-full items-center justify-between  gap-[60px] px-[32px] pb-[50px]">
              <div className="number flex flex-col items-center">
                <p className="text-[14px]">Overall Rating & Reviews</p>
                <p className="text-[57px] text-[darkGreen] tracking-[-0.25px] ">
                  {hotel.rating}
                </p>
                <p>
                  <Star className="text-[darkGreen]" />
                </p>
                {/* put the rate now on condition that the user has patronized this hotel before */}
                <p className="text-[14px]">
                  Based on 200 reviews{" "}
                  <span className="text-[darkGreen] underline">Rate now</span>
                </p>
                <div />
              </div>
              <div className="stars  bg-yellow-500">
                to be worked on later when integrating the backend
              </div>
            </div>
          </div>

          {/* reviews here */}
          <div className="reviews flex w-full  gap-[20px]">
            <div className="singleReview w-full md:w-1/2 p-[20px] bg-white rounded-[12px]">
              <div className="imgLine flex justify-between mb-[12px]">
                <div className="flex gap-[18px] items-center">
                  <Image
                    src={hotel.avatar}
                    alt="hotel.hotelName"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p className="text-[14px] tracking-[0.1px] font-medium ">
                    {hotel.hotelName}
                  </p>
                </div>

                <p className="text-[darkGreen] flex items-center gap-[8px]">
                  {hotel.rating} <Star />
                </p>

               
              </div>

              <p className="mb-[12px] text-[#5F5F5F] text-[12px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                enim magni nihil incidunt animi obcaecati harum dolorem
                voluptatum hic vel, ipsa laboriosam vitae quia ad aut ratione?
                Eius, omnis itaque.
              </p>

               {/* put conditionals for if image is available */}
                {/* map through the image if available */}
                <div className="flex w-full gap-[8px]">
                  <Image src={hotel.avatar} alt={hotel.hotelName} width={61} height={61} className="rounded-[8px]" />
                  <Image src={hotel.avatar} alt={hotel.hotelName} width={61} height={61} className="rounded-[8px]" />
                  <Image src={hotel.avatar} alt={hotel.hotelName} width={61} height={61} className="rounded-[8px]" />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* second half */}
      <div className="secondHalf mx-[50px] lg:mx-0  w-full lg:w-1/3 bg-red-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero
        rerum hic impedit autem, dolorem animi nemo. Debitis quibusdam obcaecati
        repellendus sit esse, delectus enim distinctio deserunt eaque
        repudiandae modi.
      </div>
    </div>
  );
}
