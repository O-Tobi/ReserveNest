"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar } from "../calendar";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Button } from "../button";
import { Separator } from "../separator";
import Image from "next/image";
import { SquareMinusIcon, SquarePlusIcon } from "lucide-react";
import { Form, FormLabel, FormField, FormItem, FormControl, FormMessage } from "../form";
import { Input } from "../input";

// Props type
type BookingFormProps = {
  foodImg: string;
  foodName: string;
  price: number;
};

// Schema
export const bookingSchema = z.object({
  calendar: z.string().min(1, "Please select a date"),
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  phoneNumber: z.string().regex(/^\+?\d{7,14}$/, "Enter a valid phone number"),
});

// Infer values from schema
type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingForm({
  foodImg,
  foodName,
  price,
}: BookingFormProps) {
  const mealTimes = [
    {
      id: 1,
      mealType: "Breakfast",
      time: ["7:00 AM", "8:00 AM", "9:00 AM"],
    },
    {
      id: 2,
      mealType: "Lunch",
      time: ["12:00 PM", "1:00 PM", "2:00 PM"],
    },
    {
      id: 3,
      mealType: "Dinner",
      time: ["6:00 PM", "7:00 PM", "9:00 PM"],
    },
  ];

  const [mealSelect, setMealSelect] = useState<{
    id: number;
    mealType: string;
    time: string[];
  } | null>(null);

  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [mealCount, setMealCount] = useState(0);
  const [timeClicked, setTimeClicked] = useState<string | null>(null);
  const [timeSlotWarning, setTimeSlotWarning] = useState<string | null>(null);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      calendar: "",
      fullName: "",
      email: "",
      phoneNumber: "",
    },
  });

  //handles meal cart
  const handleMealPlus = () => setMealCount((prev) => prev + 1);
  const handleMealMinus = () =>
    setMealCount((prev) => (prev > 0 ? prev - 1 : 0));


  // handles UI change for the option clicked (breakfast, lunch or dinner)
  const timeClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clicked = e.currentTarget.value;
    const selectedMeal = mealTimes.find((meal) => meal.mealType === clicked);
    if (selectedMeal) {
      setMealSelect(selectedMeal);
      setSelectedTime(clicked);
    }
  };

  const timeSlotHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clicked = e.currentTarget.value;
    setTimeClicked(clicked); //saves users choice
    setTimeSlotWarning(null);
  };

  // handles the preselected instance of the meal 
  useEffect(() => {
    const preSelected = mealTimes.find((m) => m.mealType === "Breakfast");
    if (preSelected) {
      setMealSelect(preSelected);
      setSelectedTime("Breakfast"); 
    }
  }, []);

  const totalCost = price * mealCount;

  const onSubmit = (data: BookingFormValues) => {
    if(!timeClicked) {
      setTimeSlotWarning("Please select a time")
      return; //check time validity later such that you wonrt be able to apply for time has passed
    }
    console.log({
      ...data,
      selectedMeal: mealSelect?.mealType,
      timeClicked,
      mealCount,
      totalCost,

      // clear the form after submission
    });
    setTimeSlotWarning(null);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row lg:flex-col w-full gap-[24px]"
      >
        {/* Calendar */}
        <FormField
          control={form.control}
          name="calendar"
          render={({ field }) => (
            <div className="calendar flex flex-col gap-[16px]">
              <h2 className="text-[22px] text-[darkGreen]">Choose Date</h2>
              <Calendar
                mode="single"
                selected={field.value ? new Date(field.value) : undefined}
                onSelect={(date) => {
                  if (date) {
                    const formatted = format(date, "yyyy-MM-dd");
                    field.onChange(formatted);
                  }
                }}
                modifiersStyles={{
                  selected: {
                    backgroundColor: "#004225",
                    color: "white",
                  },
                }}
                className="bg-white flex justify-center text-[darkGreen] rounded-[16px]"
              />
            </div>
          )}
          
        />

        {/* Time Slots */}
        <div className="timeSlot flex flex-col gap-[16px]">
          <h2 className="text-[22px] text-[darkGreen]">Choose time slot</h2>
          <div className="flex flex-col w-full bg-white rounded-[16px] p-[20px] gap-4">
            <div className="flex gap-0 justify-between">
              {mealTimes.map((meal) => (
                <div className="flex flex-col w-1/3" key={meal.id}>
                  <Button
                    variant="ghost"
                    className="flex justify-center text-[darkGreen] text-[12px]"
                    onClick={timeClickHandler}
                    value={meal.mealType}
                    type="button"
                  >
                    {meal.mealType}
                  </Button>
                  <Separator
                    className={`border-[2px] w-full transition-colors duration-500 ${
                      selectedTime === meal.mealType
                        ? "border-[darkGreen]"
                        : "border-[darkGreen]/40"
                    }`}
                  />
                </div>
              ))}
            </div>

            {mealSelect && (
              <div className="flex justify-start items-center gap-[12px] flex-wrap">
                {mealSelect.time.map((t, index) => (
                  <Button
                    key={index}
                    value={t}
                    onClick={timeSlotHandler}
                    variant="outline"
                    className={`border-[darkGreen] text-[12px] text-[darkGreen] p-[12px] gap-[10px] rounded-md ${
                      timeClicked === t ? "bg-[darkGreen] text-white" : "bg-none"
                    }`}
                    type="button"
                  >
                    {t}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
       {timeSlotWarning && ( <p className="text-red-500">{timeSlotWarning}</p>)}

        {/* Food Chosen */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-[22px] text-[darkGreen]">Food Chosen</h2>
          <div className="foods flex flex-col bg-white rounded-[16px] p-[20px] gap-[32px]">
            <div className="food flex gap-[16px]">
              <Image
                src={foodImg}
                alt={foodName}
                width={76}
                height={76}
                className="object-cover rounded-[12px]"
              />
              <div className="foodDetails flex flex-col w-full gap-[8px]">
                <h3 className="text-[16px] text-[darkGreen]">{foodName}</h3>
                <p className="text-[12px] text-[darkGreen]">Vegetarian</p>
                <div className="flex justify-between items-center py-[4px]">
                  <p className="text-[16px] tracking-[0.5px] font-medium text-[lightGreen]">
                    ${price}
                  </p>
                  <div className="flex items-center gap-2">
                    <Button onClick={handleMealMinus} type="button">
                      <SquareMinusIcon />
                    </Button>
                    {mealCount}
                    <Button onClick={handleMealPlus} type="button">
                      <SquarePlusIcon />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="border-[0.5px] border-[#C5C5C5]/50" />
            <div className="totalCost flex items-center justify-between text-[22px] text-[darkGreen]">
              <p>Total Cost:</p>
              <p>${totalCost}</p>
            </div>
          </div>
        </div>

        {/* Booking Details */}
        <div className="bookingDetails flex flex-col gap-[16px]">
          <h2 className="text-[22px] text-[darkGreen]">Booking details</h2>
          <div className="details flex flex-col bg-white rounded-[16px] p-[20px] gap-[20px]">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[darkGreen]">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter your full name"
                      className="border-[darkGreen]/50 text-[darkGreen] rounded-[8px]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500"/>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[darkGreen]">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="example@mail.com"
                      className="border-[darkGreen]/50 text-[darkGreen] rounded-[8px]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500"/>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[darkGreen]">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      placeholder="+234 000 000 0000"
                      className="border-[darkGreen]/50 text-[darkGreen] rounded-[8px]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500"/>
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Submit */}
        <Button type="submit" className="self-start bg-[darkGreen] text-white">
          Book Now
        </Button>
      </form>
    </Form>
  );
}
