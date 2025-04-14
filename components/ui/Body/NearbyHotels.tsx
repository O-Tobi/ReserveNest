"use client";

import getMockData from "@/lib/data";
import { useState, useEffect } from "react";
import Image from "next/image";

type Hotel = {
  avatar: string;
  hotelName: string;
  location: string;
  price: number;
  rating: number;
  image: string;
};

export default function NearbyHotels() {
  const [data, setData] = useState<Hotel[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMockData("hotels");
      setData(data);
    };
    fetchData();
  }, []);

  if (!data) return null;

  return (
    <div className="flex flex-col  gap-[24px]">
      <div className="flex mb-[26px] md:px-[12px] justify-center md:justify-start items-center md:items-end  gap-[24px]">
        <h2 className="text-[30px] md:text-[40px] leading-[44px] font-semibold bg-gradient-to-r from-[#00854A] to-[#0CD27B] bg-clip-text text-transparent">
          Hotels near you
        </h2>
        <p className="hidden md:block text-[18px] text-[darkGreen] leading-[29px] tracking-[0.25px] font-normal underline">See all</p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-[20px]">
        {data.slice(5, 9).map((d, id) => (
          <div key={id}>
            <div className="flex flex-col shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-white h-full w-[300px] md:w-[280px] rounded-[8px] px-[12px] pt-[12px] pb-[20px]" >
              <Image
                src={d.avatar}
                alt={d.hotelName}
                width={100}
                height={100}
                className="w-full h-full object-center gap-[12px] rounded-[6px]"
              />
              <div className="flex flex-col mt-[12px] gap-[12px]">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex  justify-between">
                    <p className="text-[18px] text-ellipsis leading-[24px] font-medium tracking-[0.15px] text-[darkGreen] ">
                      {d.hotelName}
                    </p>
                    <p className="text-[12px] leading-[16px] font-normal bg-[darkGreen] text-white text-center rounded-[6px] px-[8px] py-[4px]">
                      {d.rating}
                    </p>
                  </div>
                  <p className="text-[14px] text-[#5F5F5F] leading-[16px] font-normal">
                    {d.location}
                  </p>
                </div>
                <p className="text-[14px] leading-[16px] font-normal">
                  {d.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center md:hidden">
        <p className="text-[18px] text-[darkGreen] leading-[29px] tracking-[0.25px] font-normal underline">See all</p>
      </div>

    </div>
  );
}
