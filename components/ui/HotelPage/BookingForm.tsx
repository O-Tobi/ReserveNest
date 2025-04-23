import { Calendar } from "../calendar";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Button } from "../button";
import { Separator } from "../separator";

export default function BookingForm() {
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
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

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
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row lg:flex-col w-full gap-[24px]">
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

              <Separator  className={`border-[2px] w-full border-[darkGreen]/40 ${
                selectedTime === meal.mealType ? "border-[darkGreen]" : "border-[darkGreen]/40"}`}/>
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
    </div>
  );
}
