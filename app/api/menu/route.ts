import { connectDB } from "@/lib/mongodb";  
import { NextResponse } from "next/server";  
import menu from "@/models/menu";  

// Get all menu  
export async function GET() {  
  try {  
    await connectDB();  
    const data = await menu.find();  
    return new NextResponse(JSON.stringify({ data }), {  
      headers: { 'Content-Type': 'application/json' },  
    });  
  } catch (error) {  
    // Type-check the error  
    if (error instanceof Error) {  
      return new NextResponse(JSON.stringify({ error: error.message }), {  
        status: 500,  
        headers: { 'Content-Type': 'application/json' },  
      });  
    } else {  
      // Handle cases where the error is not an Error object  
      return new NextResponse(JSON.stringify({ error: "An unknown error occurred" }), {  
        status: 500,  
        headers: { 'Content-Type': 'application/json' },  
      });  
    }  
  }  
}  

// Post a single meal
export async function POST(request: Request) {
    try {
        await connectDB();
        const data = await request.json();

        if (!data) {
            return new NextResponse(JSON.stringify({ error: "Invalid input data" }), { status: 400 });
        }

        const newMenu = new menu(data);
        await newMenu.save();

        return new NextResponse(JSON.stringify({ newMenu }), { status: 201 });
    } catch (error) {
        console.error("Error creating menu:", error);
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
};
