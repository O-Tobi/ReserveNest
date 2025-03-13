import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
//import { Types } from "mongoose";
import bookings from "@/models/bookings";  

export async function POST(request: Request) {  
  try {  
    await connectDB(); // Ensure the database is connected  

    // Parse the request body  
    const data = await request.json();  

    // Validate the input data  
    if (!data) {  
      return new NextResponse(JSON.stringify({ error: "Invalid input data" }), { status: 400 });  
    }  

    // Create a new booking  
    const newBooking = new bookings(data);  
    await newBooking.save();  

    // Return the saved booking data  
    return new NextResponse(JSON.stringify({ data: newBooking }), { status: 201 });  
  } catch (error) {  
    console.error("Error creating booking:", error);  
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });  
  }  
}  