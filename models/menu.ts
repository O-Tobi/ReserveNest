import mongoose, { Schema, Document } from "mongoose";


export interface IMenu extends Document {
    name: string;
    price: number;
    type: "vegan" | "non-vegan";
    region: "continental" | "african" | "mexican" | "asian" | "mediterranean" | "american";
    tags: string[];
}

const MenuSchema = new Schema<IMenu>({
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 1 },
    type: { type: String, enum: ["vegan", "non-vegan"], required: true },
    region: { type: String, enum: ["continental", "african", "mexican", "asian", "mediterranean", "american"], required: true },
    tags: { type: [String], default: [] },
});

export default mongoose.models.Menu || mongoose.model<IMenu>("Menu", MenuSchema);