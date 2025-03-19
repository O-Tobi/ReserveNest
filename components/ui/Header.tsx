"use client";

import LoginButton from "./LoginButton";
import { Architects_Daughter } from "next/font/google";
import { Input } from "./input";

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
      
      <div className="w-[425px] h-[48px] ">
      <Input type="text" placeholder="Search restaurant and cuisines..." className="px-[16px] py-[12px] border-[#C5C5C5] border-[1px] bg-white text-[12px] "/>
      </div>
      
      <LoginButton />
    </div>
  );
}
