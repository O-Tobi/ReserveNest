"use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
import { HeroDatePicker } from "./HeroDatePicker";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// Define the form schema
// const formSchema = z.object({
//   date: z.date(), // Use z.date() for a Date object
//   time: z.string(), // Keep as string if using time inputs
//   number: z.number().int(),
// });

export default function HeroSearch() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       date: new Date(),
//       time: new Date().toISOString().split("T")[1].slice(0, 5),
//       number: 2,
//     },
//   });

  return (
    <div>
        <HeroDatePicker />
    </div>
  );
}
