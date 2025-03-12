import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import menu from "@/models/menu";
import {Types} from "mongoose"



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



// // Update a menu
// export async function PATCH(request: Request) {
//     return new NextResponse(JSON.stringify({
//         message: "this is a patch test"
//     }))
// };

// Updateimport { NextResponse } from "next/server"; 

   