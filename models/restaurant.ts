import mongoose, { Schema, Document } from 'mongoose';

export interface IRestaurant extends Document {
    name: string;
    location: string;
    menuList: mongoose.Types.ObjectId[]; // References to Menu items
    ratings: number;
    about: string;
    tags: string[];
    openingHours: {
        open: string;
        close: string;
    };
    availableOffers?: string;
    availableSeats: number;
}

const RestaurantSchema = new Schema<IRestaurant>({
    name: { type: String, required: true },
    location: { type: String, required: true },
    menuList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }], // Now references `Menu`
    ratings: { type: Number, default: 0 }, 
    about: { type: String, required: true },
    tags: { type: [String], default: [] },
    openingHours: { 
        open: { type: String, required: true },
        close: { type: String, required: true }
    },
    availableOffers: { type: String },
    availableSeats: { type: Number, required: true }
});

export default mongoose.models.Restaurant || mongoose.model<IRestaurant>("Restaurant", RestaurantSchema);
