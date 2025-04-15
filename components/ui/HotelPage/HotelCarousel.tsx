"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type HotelCarouselProp = {
  imgList: (string | StaticImageData)[];
};

export default function HotelCarousel({ imgList }: HotelCarouselProp) {
  return (
    <div className="w-full">
      <Swiper
      spaceBetween={60}
      slidesPerView={1}
      pagination={{clickable: true}}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      scrollbar={{draggable: true}}
      loop={true}
      modules={[Pagination, Autoplay]}
      >
        {imgList.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              width={100}
              height={100}
              alt={`hotel ${img}`}
              className="w-full h-[277px] md:h-[400px] lg:h-[425px] object-cover rounded-[20px] "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
