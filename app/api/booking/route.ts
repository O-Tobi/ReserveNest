import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
//import { Types } from "mongoose";
import bookings from "@/models/bookings";

export async function GET () {
    await connectDB();
    const data = bookings.find();

    return new NextResponse(JSON.stringify({
        data
    }))
}