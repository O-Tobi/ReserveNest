import { NextResponse } from "next/server";
import restaurant from "@/models/restaurant";
import { connectDB } from "@/lib/mongodb";

export async function GET () {
    await connectDB();
    const data = await restaurant.find();

    return new NextResponse(JSON.stringify({
        data
    }))

}

export async function POST(request: Request) {
    try {
        await connectDB();
        const data = await request.json();

        if (!data) {
            return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
        }

        const newRestaurant = new restaurant(data);
        await newRestaurant.save();

        return NextResponse.json({ newRestaurant }, { status: 201 });
    } catch (error) {
        console.error("Error creating restaurant:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}