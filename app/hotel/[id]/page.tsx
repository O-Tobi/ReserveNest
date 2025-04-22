"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import getMockData from "@/lib/data";
import HotelCarousel from "@/components/ui/HotelPage/HotelCarousel";
import { HeroBg } from "@/components/ui/assets/assets";
import { Star, CircleDollarSign, MapPin, Clock } from "lucide-react";
import MenuAccordion from "@/components/ui/HotelPage/MenuAccordion";
import AvailableOffers from "@/components/ui/HotelPage/AvailableOffers";
import RatingsAndReviews from "@/components/ui/HotelPage/RatingsAndReviews";
import BookingForm from "@/components/ui/HotelPage/BookingForm";

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
    <div className="flex flex-col lg:flex-row justify-between px-[30px] lg:px-[40px] gap-[40px]">
      {/* hotel hero */}
      <div className="firstHalf w-full lg:w-2/3">
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
        <RatingsAndReviews
        reviewerRating={hotel.rating}
        reviewerAvatar={hotel.avatar}
        reviewImage={hotel.avatar}
        reviewerName={hotel.hotelName}
        reviewRating={hotel.rating}
        />
      </div>

      {/* second half */}
      <div className="secondHalf flex justify-center w-full lg:w-1/3">
       <BookingForm />
      </div>
    </div>
  );
}
