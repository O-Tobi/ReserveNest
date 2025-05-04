import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import bookings from "@/models/bookings";

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const { bookingCode } = await request.json();
        const existingBooking = await bookings.findOne({ bookingCode });
        if (existingBooking) {
            return NextResponse.json({ exists: true });
        }

        return NextResponse.json({ exists: false })

    } catch (error) {
        console.error("Error checking booking code:", error);
        return NextResponse.json({message: "Server error"}, {status: 500})
    }
};