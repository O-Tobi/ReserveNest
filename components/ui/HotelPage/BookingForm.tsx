import { Calendar } from "../calendar";
import { useState } from "react";
import {format} from "date-fns";

export default function BookingForm() {
    const [datePicked, setDatePicked] = useState<string | undefined>();

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
      </div>

    </div>
  );
}
