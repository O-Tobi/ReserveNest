"use client";

import { Architects_Daughter } from "next/font/google";
import { UserProfile } from "./UserProfile";
import { UserLocation } from "./UserLocation";
import Link from "next/link";
import CallToAction from "./CallToAction";

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <div>
       <div className="block lg:hidden">
        <CallToAction />
      </div>
      <div className="flex  max-w-screen  p-[20px] md:px-[40px] md:py-[20px] justify-between">
      <div className="text-[36px] leading-[44px] text-[darkGreen]">
        <Link href="/">
          {" "}
          <h1
            className={`${architectsDaughter.className} text-[20px] lg:text-[36px]`}
          >
            ReserveNest
          </h1>
        </Link>
      </div>

      <div className="w-6/12 hidden lg:block">
        <CallToAction />
      </div>

      <div className="flex items-center gap-[12px] ">
        <UserLocation />
        <UserProfile />
      </div>
    </div>
    </div>
  );
}
