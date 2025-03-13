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