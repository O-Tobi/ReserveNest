"use client"
import { Skeleton } from "../skeleton"

export default function HotelSkeleton() {
    return (
        <div className="flex flex-col gap-[24px]">
            <div className="flex mb-[26px] md:px-[12px] justify-center md:justify-start items-center md:items-end gap-[24px]">
                <h2 className="text-[30px] md:text-[40px] leading-[44px] font-semibold bg-gradient-to-r from-[#00854A] to-[#0CD27B] bg-clip-text text-transparent">
                    Hotels near you
                </h2>
                <p className="hidden md:block text-[18px] text-[darkGreen] leading-[29px] tracking-[0.25px] font-normal underline">See all</p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-[20px]">
                {[...Array(4)].map((_, index) => (
                    <div key={index}>
                        <div className="flex flex-col shadow-xl bg-white h-full w-[300px] md:w-[280px] rounded-[8px] px-[12px] pt-[12px] pb-[20px]">
                            <Skeleton className="w-full h-[200px] rounded-[6px] mb-[12px]" />
                            <div className="flex flex-col gap-[12px]">
                                <div className="flex flex-col gap-[8px]">
                                    <div className="flex justify-between">
                                        <Skeleton className="w-[150px] h-[24px]" />
                                        <Skeleton className="w-[40px] h-[24px] rounded-[6px]" />
                                    </div>
                                    <Skeleton className="w-[200px] h-[16px]" />
                                </div>
                                <Skeleton className="w-full h-[16px]" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center md:hidden">
                <p className="text-[18px] text-[darkGreen] leading-[29px] tracking-[0.25px] font-normal underline">See all</p>
            </div>
        </div>
    )
}