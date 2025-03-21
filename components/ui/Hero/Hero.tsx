import Image from "next/image";
import { HeroBg } from "../assets/assets";
import HeroSearch from "./HeroSearch";
// import HeroTimePicker from "./HeroTmePicker";
// import HeroPeoplePicker from "./HeroPeoplePicker";

export default function Hero() {
    return (
        <div className="relative">
            <div className="relative z-0 mx-[40px] my-[28px] rounded-[20px] h-[288px] lg:h-[550px] ">
                <Image 
                src={HeroBg}
                alt="Hero Image"
                className="w-full h-full object-cover rounded-[20px]"
                />
            </div>
            <div className="absolute z-10 flex flex-col md:flex-row inset-x-0 mx-[70px] my-[-85 px] p-[40px]  bg-[darkGreen] rounded-[20px]">
                <HeroSearch />
            </div>
        </div>
    )
}