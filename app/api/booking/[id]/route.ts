import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Types } from "mongoose";
import bookings from "@/models/bookings";  

// Get a single bookings
export async function GET(request: Request, context: { params: { id: string } }) {
    try {
        await connectDB();
        const id = context.params?.id; // Correctly access params

        if (!id) {
            return new NextResponse(JSON.stringify({ error: "bookings ID is required" }), { status: 400 });
        }

        if (!Types.ObjectId.isValid(id)) {
            return new NextResponse(JSON.stringify({ error: "Invalid ID format" }), { status: 400 });
        }

        const bookingsItem = await bookings.findById(new Types.ObjectId(id));

        if (!bookingsItem) {
            return new NextResponse(JSON.stringify({ error: "bookings item not found" }), { status: 404 });
        }

        return NextResponse.json({ bookings: bookingsItem });
    } catch (error) {
        console.error("Error fetching bookings item:", error);
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}



// Update a bookings
export async function PATCH(request: Request) {  
  try {  
    await connectDB();  
    const { id, ...updateData } = await request.json();  

    if (!id || !updateData) {  
      return new NextResponse(JSON.stringify({ error: "Invalid input data" }), { status: 400 });  
    }  

    const updatedBookings = await bookings.findByIdAndUpdate(id, updateData, { new: true });  

    if (!updatedBookings) {  
      return new NextResponse(JSON.stringify({ error: "bookings item not found" }), { status: 404 });  
    }  

    return new NextResponse(JSON.stringify({ updatedBookings }), { status: 200 });  
  } catch (error) {  
    console.error("Error updating bookings:", error);  
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });  
  }  
}  

// Delete a bookings
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();

        const { id } = params;

        if (!id) {
            return new NextResponse(JSON.stringify({ error: "Invalid input data" }), { status: 400 });
        }

        const deletedBookings = await bookings.findByIdAndDelete(id);

        if (!deletedBookings) {
            return new NextResponse(JSON.stringify({ error: "bookings item not found" }), { status: 404 });
        }

        return new NextResponse(JSON.stringify({ message: "bookings item deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error deleting bookings:", error);
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
