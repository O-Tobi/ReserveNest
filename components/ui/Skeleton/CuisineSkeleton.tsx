"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function CuisineSkeleton() {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex mb-[26px] md:px-[12px] justify-center text-center md:justify-start items-center md:items-end gap-[24px]">
        <Skeleton className="h-[40px] w-[280px] md:w-[360px] rounded" />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-[16px] text-center text-[darkGreen]">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx}>
            <div className="flex flex-col justify-center items-center shadow-xl bg-white h-[168px] w-[247px] md:w-[220px] rounded-[8px] px-[12px] py-[32px]">
              <div className="flex flex-col mt-[12px] gap-[12px] w-full">
                <Skeleton className="h-[20px] w-[140px] mx-auto rounded" />
                <Skeleton className="h-[16px] w-[100px] mx-auto rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
