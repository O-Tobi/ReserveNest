import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import user from "@/models/user";
//import { Types } from "mongoose";

export async function POST(request: Request) {
    try {
        await connectDB();
        const data = await request.json();

        if (!data) {
            return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
        }

        const newUser = new user(data);
        await newUser.save();

        return NextResponse.json({ newUser }, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


