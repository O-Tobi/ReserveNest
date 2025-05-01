import { Button } from "../button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
  DrawerHeader,
  DrawerTrigger,
} from "../drawer";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "../dialog";
import {
  CalendarDays,
  Check,
  CircleX,
  ClipboardList,
  Clock4,
  UsersRound,
} from "lucide-react";
import { Separator } from "../separator";

export default function DialogTestes() {
  const isDesktop = window.innerWidth >= 760;

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-3/6 bg-white border-none  justify-center items-center p-[32px] gap-[24px]">
          <DialogHeader className="flex w-full justify-center items-center  gap-[20px]">
            <div className="checkmark flex justify-center items-center bg-[#23A26D]/12 rounded-full w-[120px] h-[120px]">
              <div className="inner flex items-center justify-center h-[66px] w-[66px] rounded-full bg-[#23A26D] text-white">
                <Check className="h-10 w-10" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[12px]">
              <DialogTitle>Booking Confirmed !!</DialogTitle>
              <DialogDescription>Booking ID: 123456</DialogDescription>
            </div>
          </DialogHeader>

          <Separator className="border-[.4px] border-[#C5C5C5]/40 w-full" />

          <DialogDescription>
            <div className="flex flex-col justify-center items-center gap-[14px]">
              <p className="hotelName text-[28px] font-medium">
                Colours by Royal Cafe
              </p>
              <p className="address">
                3rd Floor, Royal Inn, 9/7, Opposite SaharaGanj Mall, Shahnajaf
                Road, Hazratganj, Lucknow
              </p>
            </div>
          </DialogDescription>

          <DialogDescription>
            <div className="infoTab flex flex-row gap-[24px] justify-between items-center">
              <div className="flex w-full flex-col justify center items-center gap-[16px] px-[16px] py-[20px] rounded-[8px] border-[0.5px] border-[#C5C5C5]/40">
                <CalendarDays />
                <p>19 Jan 2025</p>
              </div>

              <div className="flex w-full flex-col justify center items-center gap-[16px] px-[16px] py-[20px] rounded-[8px] border-[0.5px] border-[#C5C5C5]/40">
                <Clock4 />
                <p>9:00 PM</p>
              </div>

              <div className="flex w-full flex-col justify center items-center gap-[16px] px-[16px] py-[20px] rounded-[8px] border-[0.5px] border-[#C5C5C5]/40">
                <UsersRound />
                <p>2 Guests</p>
              </div>
            </div>
          </DialogDescription>

          <DialogDescription>
            <div className="buttons  w-full flex gap-[24px] justify-between items-center">
              <Button className="bg-[#006FD5] p-[12px] gap-[10px] h-[54px] w-1/2  text-white text-[14px] font-medium rounded-[8px]">
                <ClipboardList /> View Menu
              </Button>
              <Button className="bg-[#BA1717] p-[12px] gap-[10px] h-[54px] w-1/2 text-white text-[14px] font-medium rounded-[8px]">
                <CircleX /> Cancel Booking
              </Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>

      <DrawerContent className="bg-red-500  h-full flex flex-col justify-center items-center ">
        <DrawerHeader className="bg-blue-500">
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
