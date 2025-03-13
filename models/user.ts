import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    profilePicUrl?: string;
    role: 'user' | 'admin' | 'restaurant_owner'; // Enum for role validation
    location?: string;
    savedRestaurants: mongoose.Types.ObjectId[]; // Array of restaurant references
    bookings: mongoose.Types.ObjectId[]; // Array of booking references
    paymentDetails?: string;
    reviewsAndRatings: {
        restaurant: mongoose.Types.ObjectId;
        rating: number;
        review?: string;
    }[];
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, immutable: true },
    profilePicUrl: { type: String },
    role: { 
        type: String, 
        enum: ['user', 'admin', 'restaurant_owner'], 
        default: 'user' 
    },
    location: { type: String },
    savedRestaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }],
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
    paymentDetails: { type: String },
    reviewsAndRatings: [
        {
            restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
            rating: { type: Number, required: true, min: 1, max: 5 },
            review: { type: String }
        }
    ]
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);