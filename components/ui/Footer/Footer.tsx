"use client";

import { Architects_Daughter } from "next/font/google";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const architectDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
})

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center h-[320px] bg-[darkgreen] mt-[80px] text-white gap-[22px] lg:gap-[32px]">
      <div className="flex flex-col items-center gap-[12px]">
      <h2 className={`${architectDaughter.className} text-[36px] lg:text-[40px] leading-[44px] tracking-[0.5px]`}>ReserveNest</h2>
      <p className={`${architectDaughter.className} text-[16px] lg:text-[32px] leading-[44px]`}>
       Connect with us and explore!
      </p>
      </div>
      <div className="flex flex-row gap-[32px]">
       <Twitter className="w-[32px] h-[32px]"/>
       <Instagram className="w-[32px] h-[32px]"/>
       <Linkedin className="w-[32px] h-[32px]"/>
      </div>
      
    </div>
  );
}
