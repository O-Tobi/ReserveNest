import { BadgeAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

type AvailableOffersProps = {
  openingTime: string;
  availableOffers: number;
  closingTime: number;
};

export default function AvailableOffers({
  openingTime,
  closingTime,
  availableOffers,
}: AvailableOffersProps) {
  return (
    <div className="flex flex-col justify-center  items-center md:items-start gap-[20px] p-[20px] rounded-[12px] bg-white">
      <h2 className="text-[22px] text-[darkGreen] leading-[28px]">
        Available Offers
      </h2>
      {/* offers here */}
      <div className="flex flex-col gap-[12px] justify-center  w-full bg-[lightgreen]/5">
        {/* map this section when you're implementing the backend */}
        {/* this should be a form with that tracks submission */}
        <div className="text-[darkGreen] flex flex-col md:flex-row items-center justify-center md:justify-between w-full rounded-[8px] border-[1px] border-[#004225] p-[12px] md:h-[72px] gap-[12px]">
          <p className="flex gap-[10px]">
            <BadgeAlert /> Sun, {openingTime} - {closingTime}
          </p>
          <p>
            <span className="text-[lightGreen]">{availableOffers}</span> offers
            available
          </p>
          <Button className="bg-[darkGreen] rounded-[8px] text-white">
            Book Now
          </Button>
        </div>
        <div className="text-[darkGreen] flex flex-col md:flex-row items-center justify-center md:justify-between w-full rounded-[8px] border-[1px] border-[#004225] p-[12px] md:h-[72px] gap-[12px]">
          <p className="flex gap-[10px]">
            <BadgeAlert /> Sun, {openingTime} - {closingTime}
          </p>
          <p>
            <span className="text-[lightGreen]">{availableOffers}</span> offers
            available
          </p>
          <Button className="bg-[darkGreen] rounded-[8px] text-white">
            Book Now
          </Button>
        </div>
        <div className="text-[darkGreen] flex flex-col md:flex-row items-center justify-center md:justify-between w-full rounded-[8px] border-[1px] border-[#004225] p-[12px] md:h-[72px] gap-[12px]">
          <p className="flex gap-[10px]">
            <BadgeAlert /> Sun, {openingTime} - {closingTime}
          </p>
          <p>
            <span className="text-[lightGreen]">{availableOffers}</span> offers
            available
          </p>
          <Button className="bg-[darkGreen] rounded-[8px] text-white">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
