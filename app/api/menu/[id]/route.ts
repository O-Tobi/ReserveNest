import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import menu from "@/models/menu";
import { Types } from "mongoose"



// Get a single menu
export async function GET(request: Request, context: { params: { id: string } }) {
    try {
        await connectDB();
        const id = context.params?.id; // Correctly access params

        if (!id) {
            return new NextResponse(JSON.stringify({ error: "Menu ID is required" }), { status: 400 });
        }

        if (!Types.ObjectId.isValid(id)) {
            return new NextResponse(JSON.stringify({ error: "Invalid ID format" }), { status: 400 });
        }

        const menuItem = await menu.findById(new Types.ObjectId(id));

        if (!menuItem) {
            return new NextResponse(JSON.stringify({ error: "Menu item not found" }), { status: 404 });
        }

        return NextResponse.json({ menu: menuItem });
    } catch (error) {
        console.error("Error fetching menu item:", error);
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}



// Update a menu
export async function PATCH(request: Request) {  
  try {  
    await connectDB();  
    const { id, ...updateData } = await request.json();  

    if (!id || !updateData) {  
      return new NextResponse(JSON.stringify({ error: "Invalid input data" }), { status: 400 });  
    }  

    const updatedMenu = await menu.findByIdAndUpdate(id, updateData, { new: true });  

    if (!updatedMenu) {  
      return new NextResponse(JSON.stringify({ error: "Menu item not found" }), { status: 404 });  
    }  

    return new NextResponse(JSON.stringify({ updatedMenu }), { status: 200 });  
  } catch (error) {  
    console.error("Error updating menu:", error);  
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });  
  }  
}  

// Delete a menu
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();

        const { id } = params;

        if (!id) {
            return new NextResponse(JSON.stringify({ error: "Invalid input data" }), { status: 400 });
        }

        const deletedMenu = await menu.findByIdAndDelete(id);

        if (!deletedMenu) {
            return new NextResponse(JSON.stringify({ error: "Menu item not found" }), { status: 404 });
        }

        return new NextResponse(JSON.stringify({ message: "Menu item deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error deleting menu:", error);
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
