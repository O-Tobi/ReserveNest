import { connectDB } from "@/lib/mongodb"
import { NextResponse } from "next/server"
import menu from "@/models/menu";

// Get all menu
export async function GET() {
    await connectDB;
    const data = await menu.find();
    return new NextResponse(JSON.stringify({
        data
    }))
};


