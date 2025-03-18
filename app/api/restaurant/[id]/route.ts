import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import restaurant from "@/models/restaurant";
import { Types } from "mongoose";

// Get a single restaurant
export async function GET(request: Request, context: { params: { id: string } }) {
    try {
        await connectDB();
        const id = context.params?.id; // Correctly access params

        if (!id) {
            return new NextResponse(JSON.stringify({ error: "restaurant ID is required" }), { status: 400 });
        }

        if (!Types.ObjectId.isValid(id)) {
            return new NextResponse(JSON.stringify({ error: "Invalid ID format" }), { status: 400 });
        }

        const restaurantItem = await restaurant.findById(new Types.ObjectId(id));

        if (!restaurantItem) {
            return new NextResponse(JSON.stringify({ error: "restaurant item not found" }), { status: 404 });
        }

        return NextResponse.json({ restaurant: restaurantItem });
    } catch (error) {
        console.error("Error fetching restaurant item:", error);
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
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
