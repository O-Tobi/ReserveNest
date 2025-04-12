"use client";

import getMockData from "@/lib/data";
import { useState, useEffect } from "react";
import { UtensilsCrossed } from "lucide-react";

type Hotel = {
  avatar: string;
  name: string;
  count: number;
  location: string;
  rating: number;
  image: string;
};

export default function Cuisines() {
  const [data, setData] = useState<Hotel[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMockData("cuisines");
      setData(data);
    };
    fetchData();
  }, []);

  if (!data) return null;

  return (
    <div className="flex flex-col  gap-[24px]">
      <div className="flex mb-[26px] md:px-[12px] justify-center text-center md:justify-start items-center md:items-end  gap-[24px]">
        <h2 className="text-[30px] md:text-[40px] leading-[44px] font-semibold bg-gradient-to-r from-[#00854A] to-[#0CD27B] bg-clip-text text-transparent">
          Popular cuisines near you
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-[16px] text-center text-[darkGreen]">
        {data.map((d, id) => (
          <div key={id}>
            <div className="flex flex-col justify-center  items-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-white h-[168px] w-[247px] md:w-[220px] rounded-[8px] px-[12px] py-[32px] ">
              <UtensilsCrossed className="w-[40px] h-[40px]" />
              <div className="flex flex-col mt-[12px] gap-[12px]">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex flex-col justify-center items-center gap-[12px]">
                    <p className="text-[20px] text-ellipsis leading-[24px] font-medium tracking-[0.15px] text-[darkGreen] ">
                      {d.name}
                    </p>
                    <p className="text-[16px] leading-[16px] font-normal">
                      {d.count} Restaurants
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
