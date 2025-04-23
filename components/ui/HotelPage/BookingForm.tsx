import { Calendar } from "../calendar";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Button } from "../button";
import { Separator } from "../separator";
import Image from "next/image";
import { SquareMinusIcon, SquarePlusIcon } from "lucide-react";

type BookingFormProps = {
  foodImg: string;
  foodName: string;
  price: number;
};

export default function BookingForm({
  foodImg,
  foodName,
  price,
}: BookingFormProps) {
  const mealTimes = [
    {
      id: 1,
      mealType: "Breakfast",
      time: ["7:00 AM", "8:00 AM", "9:00 AM", "7:00 AM", "8:00 AM", "9:00 AM"],
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

  const [datePicked, setDatePicked] = useState<string | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [mealCount, setMealCount] = useState(0);

  const handleMealPlus = () => {
    setMealCount((prevCount) => prevCount + 1);
  };

  const handleMealMinus = () => {
    if (mealCount !== 0) {
      setMealCount((prev) => prev - 1);
    }
  };

  const timeClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clicked = e.currentTarget.value;
    const selectedMeal = mealTimes.find((meal) => meal.mealType === clicked);
    if (selectedMeal) {
      setMealSelect(selectedMeal);
      setSelectedTime(clicked);
    }
  };

  useEffect(() => {
    const preDisplayedTime = mealTimes.find((m) => m.mealType === "Breakfast");
    if (preDisplayedTime) {
      setMealSelect(preDisplayedTime);
      setSelectedTime("Breakfast");
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row lg:flex-col w-full gap-[24px]">
      {/* calendar here */}
      <div className="calendar flex flex-col gap-[16px]">
        <h2 className="text-[22px] text-[darkGreen]">Choose Date</h2>
        <Calendar
          mode="single"
          selected={datePicked ? new Date(datePicked) : undefined}
          onSelect={(date) => {
            if (date) {
              const formatted = format(date, "yyyy-MM-dd");
              setDatePicked(formatted);
            }
          }}
          modifiersStyles={{
            selected: {
              backgroundColor: "#004225",
              color: "white",
            },
          }}
          className="bg-white flex justify-center text-[darkGreen] rounded-[16px] "
        />
      </div>

      {/* time slots here */}
      <div className="timeSlot flex flex-col gap-[16px]">
        <h2 className="text-[22px] text-[darkGreen]">Choose time slot</h2>

        <div className="flex flex-col w-full bg-white rounded-[16px] p-[20px] gap-4">
          {/* Row for meal types */}
          <div className="flex gap-0 justify-between">
            {mealTimes.map((meal, id) => (
              <div className="flex flex-col w-1/3" key={id}>
                <Button
                  variant="ghost"
                  className="flex justify-center  text-[darkGreen] text-[12px]"
                  onClick={timeClickHandler}
                  value={meal.mealType}
                >
                  {meal.mealType}
                </Button>

                <Separator
                  className={`border-[2px] w-full border-[darkGreen]/40 ${
                    selectedTime === meal.mealType
                      ? "border-[darkGreen]"
                      : "border-[darkGreen]/40"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Row for times under selected meal */}
          {mealSelect && (
            <div className="flex justify-start items-center gap-[12px] flex-wrap">
              {mealSelect.time.map((t, index) => (
                <Button
                  value={t}
                  onClick={() => console.log(t)}
                  variant="outline"
                  key={index}
                  className="border-[darkGreen]  text-[12px] text-[darkGreen] p-[12px] gap-[10px] rounded-md text-sm"
                >
                  {t}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FoodChosen here */}
      {/* map through the list from the context */}
      <div className=" flex flex-col gap-[16px]">
        <h2 className="text-[22px] text-[darkGreen]">Food Chosen</h2>

        <div className="foods flex flex-col bg-white rounded-[16px] p-[20px] gap-[32px]">
          {/* individual food */}
          <div className="food flex  gap-[16px] ">
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
            </div>
          </div>

          <Separator className="border-[0.5px] border-[#C5C5C5]/50 " />

          <div className="totalCost flex items-center justify-between text-[22px] text-[darkGreen] ">
            <p>Total Cost:</p>
            <p>$TBD</p>
          </div>
        </div>
      </div>
    </div>
  );
}
