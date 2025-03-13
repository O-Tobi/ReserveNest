import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
    user: mongoose.Types.ObjectId;  // Reference to User collection
    restaurant: mongoose.Types.ObjectId; // Reference to Restaurant collection
    address: string;
    date: string;
    numberOfGuests: number;
}

const BookingSchema = new Schema<IBooking>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Foreign key
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true }, // Foreign key
    address: { type: String, required: true },
    date: { type: String, required: true },
    numberOfGuests: { type: Number, required: true, min: 1 } // At least 1 guest
});

export default mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);
