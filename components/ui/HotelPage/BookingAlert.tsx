import { Button } from "../button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
  DrawerHeader,
  DrawerClose,
} from "../drawer";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogClose,
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

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../alert-dialog";

type BookingAlertProps = {
  triggerOpen: boolean;
  setTriggerOpen: (open: boolean) => void;
  restaurantName: string;
  bookingDate: string;
  bookingTime: string;
  guestNumber: number;
  restaurantAddress: string;
};

export default function BookingAlert({
  triggerOpen,
  setTriggerOpen,
  restaurantName,
  bookingDate,
  bookingTime,
  guestNumber,
  restaurantAddress,
}: BookingAlertProps) {
  // This component is used to show the booking alert dialog box when the user clicks on the book table button
  const isDesktop = window.innerWidth >= 760;

  if (isDesktop) {
    return (
      <Dialog open={triggerOpen} onOpenChange={setTriggerOpen}>
        <DialogContent className="sm:max-w-3/6 bg-white border-none  justify-center items-center p-[32px] gap-[24px]">
          <DialogHeader className="flex w-full justify-center items-center  gap-[20px]">
            <div className="checkmark flex justify-center items-center bg-[#23A26D]/12 rounded-full w-[120px] h-[120px]">
              <div className="inner flex items-center justify-center h-[66px] w-[66px] rounded-full bg-[#23A26D] text-white">
                <Check className="h-10 w-10" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[12px]">
              <DialogTitle>Booking Confirmed !!!</DialogTitle>
              <DialogDescription>Booking ID: 123456</DialogDescription>
            </div>
          </DialogHeader>

          <Separator className="border-[.4px] border-[#C5C5C5]/40 w-full" />
          <DialogDescription>
            <div className="flex flex-col justify-center items-center gap-[14px]">
              <p className="hotelName text-[28px] font-medium">
                {restaurantName}
              </p>
              <p className="address">
                {restaurantAddress}
              </p>
            </div>
          </DialogDescription>

          <DialogDescription>
            <div className="infoTab flex flex-row gap-[24px] justify-between items-center">
              <div className="flex w-full flex-col justify center items-center gap-[16px] px-[16px] py-[20px] rounded-[8px] border-[0.5px] border-[#C5C5C5]/40">
                <CalendarDays />
                <p>{bookingDate}</p>
              </div>

              <div className="flex w-full flex-col justify center items-center gap-[16px] px-[16px] py-[20px] rounded-[8px] border-[0.5px] border-[#C5C5C5]/40">
                <Clock4 />
                <p>{bookingTime}</p>
              </div>

              <div className="flex w-full flex-col justify center items-center gap-[16px] px-[16px] py-[20px] rounded-[8px] border-[0.5px] border-[#C5C5C5]/40">
                <UsersRound />
                <p>{guestNumber} Guests</p>
              </div>
            </div>
          </DialogDescription>

          <DialogDescription>
            <div className="buttons  w-full flex gap-[24px] justify-between items-center">
              <Button className="bg-[#006FD5] p-[12px] gap-[10px] h-[54px] w-1/2  text-white text-[14px] font-medium rounded-[8px]">
                <ClipboardList /> View Menu
              </Button>

              {/* the cancel booking button will render an alert dialogbox for confirmation */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-[#BA1717] p-[12px] gap-[10px] h-[54px] w-1/2 text-white text-[14px] font-medium rounded-[8px]">
                    <CircleX /> Cancel Booking
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      all selected menus
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                      {/* write an onClick function that deletes bookings by id */}
                      <DialogClose>Continue</DialogClose>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={triggerOpen} onOpenChange={setTriggerOpen}>
      <DrawerContent className="bg-white flex gap-[10px] px-[10px] ">
        <DrawerHeader className="flex w-full justify-center items-center  gap-[8px]">
          <div className="checkmark flex justify-center items-center bg-[#23A26D]/12 rounded-full w-[80px] h-[80px]">
            <div className="inner flex items-center justify-center h-[46px] w-[46px] rounded-full bg-[#23A26D] text-white">
              <Check className="h-8 w-8" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <DrawerTitle>Booking Confirmed !!</DrawerTitle>
            <DrawerDescription>Booking ID: 123456</DrawerDescription>
          </div>
        </DrawerHeader>

        {/* <Separator className="border-[.4px] border-[#C5C5C5]/40 w-full" /> */}

        <DrawerDescription>
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <p className="hotelName text-[18px] font-medium">
              Colours by Royal Cafe
            </p>
            <p className="address text-center">
              3rd Floor, Royal Inn, 9/7, Opposite SaharaGanj Mall, Shahnajaf
              Road, Hazratganj, Lucknow
            </p>
          </div>
        </DrawerDescription>

        <DrawerDescription>
          <div className="infoTab flex flex-row gap-[10px] justify-between items-center">
            <div className="flex w-full flex-col justify center items-center gap-[10px] px-[10px] py-[10px] rounded-[8px] border-[0.5px] border-[#C5C5C5]/40">
              <CalendarDays />
              <p>19 Jan 2025</p>
            </div>

            <div className="flex w-full flex-col justify center items-center gap-[10px] px-[10px] py-[10px] rounded-[8px] border-[0.5px] border-[#C5C5C5]/40">
              <Clock4 />
              <p>9:00 PM</p>
            </div>

            <div className="flex w-full flex-col justify center items-center gap-[10px] px-[10px] py-[10px] rounded-[8px] border-[0.5px] border-[#C5C5C5]/40">
              <UsersRound />
              <p>2 Guests</p>
            </div>
          </div>
        </DrawerDescription>

        <DrawerFooter>
          <div className="flex flex-row gap-[10px] pb-[10px]">
            <Button className="bg-[#006FD5] p-[px]  w-1/2  text-white text-[14px] font-medium rounded-[8px]">
              <ClipboardList /> View Menu
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-[#BA1717] p-[px]  w-1/2 text-white text-[14px] font-medium rounded-[8px]">
                  <CircleX /> Cancel Booking
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white flex flex-col 2">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    all selected menus
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>
                    {/* write an onClick function that deletes bookings by id */}
                    <DrawerClose>Continue</DrawerClose>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
