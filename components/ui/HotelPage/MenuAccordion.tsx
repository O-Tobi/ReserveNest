"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MenuSearch from "./MenuSearch";
import Image from "next/image";
import { SquarePlusIcon, SquareMinusIcon } from "lucide-react";
import { Button } from "../button";
import { useState } from "react";

type MenuProps = {
  name: string;
  type: string;
  price: number;
  menuImage: string;
  mealRating: number;
};

export default function MenuAccordion({
  name,
  type,
  price,
  menuImage,
  mealRating,
}: MenuProps) {
    const [mealCount, setMealCount] = useState(0);

    const handleMealPlus = () => {
      setMealCount(prevCount => prevCount + 1);
    };

    const handleMealMinus = () => {
      if (mealCount !== 0) {
        setMealCount(prev => prev-1)
      }
    };

  return (
    <Accordion type="single" collapsible>
      {/* the accordionItem value should contain the name of the menu you're mapping through */}
      <AccordionItem value="item-1" className="px-[20px]">
        <AccordionTrigger className="items-center text-[22px] text-[darkGreen]  py-[28px] leading-[28px]">
          Our Menu
        </AccordionTrigger>
        <AccordionContent>
          <MenuSearch />
        </AccordionContent>
        <AccordionContent className="flex flex-col md:flex-row items-center justify-between  my-[28px]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-[24px]">
            <div className="w-full md:w-[100px] ">
              <Image
                src={menuImage}
                alt="menuImage"
                width={100}
                height={100}
                className="rounded-[12px] w-full h-[100px] md:w-[100px] object-cover"
              />
            </div>
            <div className="flex flex-col items-center md:items-start gap-[11px] text-[darkGreen] ">
              <p className="text-[22px]">{name}</p>
              <p className="text-[14px] ">{type}</p>
              <p className="text-[24px] text-[lightGreen]">$ {price}</p>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center md:flex-col gap-[40px] mt-[12px]">
            <div className="text-[darkGreen]">{mealRating}</div>
            <div className="flex  items-center ">
              <Button onClick={handleMealMinus}>
                {" "}
                <SquareMinusIcon />{" "}
              </Button>
              {mealCount}
              <Button onClick={handleMealPlus}>
                {" "}
                <SquarePlusIcon />{" "}
              </Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
