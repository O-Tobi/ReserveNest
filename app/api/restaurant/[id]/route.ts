import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import restaurant from "@/models/restaurant"; // ✅ Correct lowercase import


// ✅ Handle GET requests for a specific restaurant
export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const { id } = params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid restaurant ID" }, { status: 400 });
        }

        const foundRestaurant = await restaurant.findById(id).populate("restaurantList"); // ✅ Using lowercase model
        if (!foundRestaurant) {
            return NextResponse.json({ error: "Restaurant not found" }, { status: 404 });
        }

        return NextResponse.json({ foundRestaurant }, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: "Error fetching restaurant", details: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
}


// Update a Restaurant
export async function PATCH(request: Request) {  
  try {  
    await connectDB();  
    const { id, ...updateData } = await request.json();  

    if (!id || !updateData) {  
      return new NextResponse(JSON.stringify({ error: "Invalid input data" }), { status: 400 });  
    }  

    const updatedRestaurant = await restaurant.findByIdAndUpdate(id, updateData, { new: true });  

    if (!updatedRestaurant) {  
      return new NextResponse(JSON.stringify({ error: "Restaurant item not found" }), { status: 404 });  
    }  

    return new NextResponse(JSON.stringify({ updatedRestaurant }), { status: 200 });  
  } catch (error) {  
    console.error("Error updating restaurant:", error);  
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });  
  }  
}  

// Delete a restaurant
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();

        const { id } = params;

        if (!id) {
            return new NextResponse(JSON.stringify({ error: "Invalid input data" }), { status: 400 });
        }

        const deletedRestaurant = await restaurant.findByIdAndDelete(id);

        if (!deletedRestaurant) {
            return new NextResponse(JSON.stringify({ error: "restaurant item not found" }), { status: 404 });
        }

        return new NextResponse(JSON.stringify({ message: "restaurant item deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error deleting restaurant:", error);
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
