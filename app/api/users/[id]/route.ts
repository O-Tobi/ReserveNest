import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import user from "@/models/user";
import { Types } from "mongoose";


// fetch a user
export async function GET(request: Request, context: { params: { id: string } }) {
    try {
        await connectDB();
        const id = context.params?.id; // Correctly access params

        if (!id) {
            return new NextResponse(JSON.stringify({ error: "user ID is required" }), { status: 400 });
        }

        if (!Types.ObjectId.isValid(id)) {
            return new NextResponse(JSON.stringify({ error: "Invalid ID format" }), { status: 400 });
        }

        const userItem = await user.findById(new Types.ObjectId(id));

        if (!userItem) {
            return new NextResponse(JSON.stringify({ error: "user item not found" }), { status: 404 });
        }

        return NextResponse.json({ user: userItem });
    } catch (error) {
        console.error("Error fetching user item:", error);
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

// Update a user //make sure the email is not updated
export async function PATCH(request: Request) {  
  try {  
    await connectDB();  
    const { id, ...updateData } = await request.json();  

    if (!id || !updateData) {  
      return new NextResponse(JSON.stringify({ error: "Invalid input data" }), { status: 400 });  
    }  

    const updatedUser = await user.findByIdAndUpdate(id, updateData, { new: true });  

    if (!updatedUser) {  
      return new NextResponse(JSON.stringify({ error: "user item not found" }), { status: 404 });  
    }  

    return new NextResponse(JSON.stringify({ updatedUser }), { status: 200 });  
  } catch (error) {  
    console.error("Error updating user:", error);  
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });  
  }  
}  


// Delete a user
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();

        const { id } = params;

        if (!id) {
            return new NextResponse(JSON.stringify({ error: "Invalid input data" }), { status: 400 });
        }

        const deletedUser = await user.findByIdAndDelete(id);

        if (!deletedUser) {
            return new NextResponse(JSON.stringify({ error: "user item not found" }), { status: 404 });
        }

        return new NextResponse(JSON.stringify({ message: "user item deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error deleting user:", error);
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
