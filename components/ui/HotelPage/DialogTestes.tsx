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
import { Check } from "lucide-react";
import { Separator } from "../separator";

export default function DialogTestes() {
  const isDesktop = window.innerWidth >= 760;

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-3/6 bg-white border-none  justify-center items-center p-[32px] gap-[28px]">
          <DialogHeader className="flex w-full justify-center items-center  gap-[20px] bg-red-500">
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
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eligendi deleniti, voluptate voluptatem laudantium veritatis debitis nesciunt quo maxime, magnam odio praesentium ipsa fuga vel, commodi reprehenderit quia quam aliquam!</p>
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
