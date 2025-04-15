"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import getMockData from "@/lib/data";
//import Image from "next/image";
import HotelCarousel from "@/components/ui/HotelPage/HotelCarousel";
import { HeroBg } from "@/components/ui/assets/assets";


type Hotel = {
    id: string;
    avatar: string;
    hotelName: string;
    location: string;
    price: number;
    rating: number;
    image: string;
    pictures: string;
  };


export default function Hotel () {
    const testList = [
        HeroBg, HeroBg
    ]
    const params = useParams();
    const id = params.id as string;
    const [hotel, setHotel] = useState<Hotel | null>(null)

    useEffect(() => {
        setHotel(null);

        const fetchData = async () => {
            const hotels = await getMockData("hotels");
            const selectedHotel = hotels.find((h: Hotel) => h.id === id)
            setHotel(selectedHotel || null);
        }
        if (id) {
            fetchData();
        };
    }, [id])

    if (!hotel) return null;


    return (
        <div className="flex">
            <div className="firstHalf  w-2/3 mx-[40px]">
                <div>
                   <HotelCarousel imgList={testList} />
                </div>
            </div>
            <div className="secondHalf mr-[40px] w-1/3 bg-red-500">
            
            </div>
        </div>
    )
}