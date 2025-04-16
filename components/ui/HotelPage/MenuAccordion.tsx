"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MenuSearch from "./MenuSearch";
import Image from "next/image";

type MenuProps = {
  name: string;
  type: string;
  price: number;
  menuImage: string;
};

export default function MenuAccordion({
  name,
  type,
  price,
  menuImage,
}: MenuProps) {
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

          <div className="leftSide">ddddd</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
