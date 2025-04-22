import { Calendar } from "../calendar";
import { useEffect, useState } from "react";
import {format} from "date-fns";
import { Button } from "../button";

export default function BookingForm() {
    const mealTimes = [  
        {  
            id: 1,
            mealType: "Breakfast",  
            time: ["7:00am", "8:00am", "9:00am"]  
        },  
        {  
            id: 2,
            mealType: "Lunch",  
            time: ["12:00pm", "1:00pm", "2:00pm"]    
        },  
        {  
            id: 3,
            mealType: "Dinner",  
            time: ["6:00pm", "7:00pm", "9:00pm"]    
        }  
    ];  

    const [mealSelect, setMealSelect] = useState<{ id: number; mealType: string; time: string[] } | null>(null)

    const [datePicked, setDatePicked] = useState<string | undefined>();

    const timeClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const clicked = e.currentTarget.value;
        const selectedMeal = mealTimes.find(meal => meal.mealType === clicked)
        if (selectedMeal) {
            setMealSelect(selectedMeal);
        }
        //console.log(mealSelect);
        //console.log(mealTimes)
    }

    useEffect(() => {
        const preDisplayedTime = mealTimes.find(m => m.mealType === "Breakfast")
        if (preDisplayedTime) {
            setMealSelect(preDisplayedTime)
        }
    }, [])


  return (
    <div className="flex flex-col md:flex-row lg:flex-col w-full gap-[24px]">
      <div className="calendar flex flex-col gap-[16px]" >
        <h2 className="text-[22px] text-[darkGreen]">Choose Date</h2>
        <Calendar
        mode="single"
        selected={datePicked ? new Date(datePicked) : undefined}
        onSelect={(date) => {
            if (date) {
                const formatted = format(date, "yyyy-MM-dd")
                setDatePicked( formatted )
            }
        }}

        modifiersStyles={{
            selected: {
              backgroundColor: '#004225', 
              color: 'white',
            },
          }}
       
        
        className="bg-white flex justify-center text-[darkGreen] rounded-[16px] " />
      </div>

      <div className="timeSlot">
        <h2 className="text-[22px] text-[darkGreen]">Choose time slot</h2>
        <div className="flex gap">
            <Button className="w-1/3 text-[darkGreen] text-[12px]" onClick={timeClickHandler} value="Breakfast">BREAKFAST</Button>
            <Button className="w-1/3 text-[darkGreen] text-[12px]" onClick={timeClickHandler} value="Lunch">LUNCH</Button>
            <Button className="w-1/3 text-[darkGreen] text-[12px]" onClick={timeClickHandler} value="Dinner">DINNER</Button>
        </div>
        {mealSelect?.time.map((t, index) => (
            <div className="flex flex-col" key={index}>
               <p>{t}</p>
            </div>
        ))}
       
        
      </div>

    </div>
  );
}
