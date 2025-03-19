"use client";

import { Architects_Daughter } from "next/font/google";
import { UserProfile } from "./UserProfile";
import { UserLocation } from "./UserLocation";




const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <div className="flex  max-w-screen px-[40px] py-[20px] justify-between">
      <div className="text-[36px] leading-[44px] text-[darkGreen]">
        <h1 className={`${architectsDaughter.className}`}>ReserveNest</h1>
      </div>
      
      <div className="flex items-center gap-[12px] ">
      <UserLocation />
      <UserProfile />
      </div>
    </div>
  );
}
