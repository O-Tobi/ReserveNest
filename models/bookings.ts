import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  user: string; // Reference to User collection
  restaurantID: string; // Reference to Restaurant collection
  bookedDate: string;
  guestNumber: number;
  selectedMeal: { // Array of objects with specific structure
    mealID: number,  // Reference to Meal collection//mongoose.Types.ObjectId;
    mealName: string;
    mealType: string;
    mealCount: number;
    totalCost: number;
  }[];
  guestName: string;
  phoneNumber: string;
  timeClicked: string; 
}

const BookingSchema = new Schema<IBooking>({
  user: { type: String, ref: 'User', required: true }, // Foreign key
  restaurantID: {type: String, required: true}, // to be changed to Foreign key when the restaurant document is available
  bookedDate: { type: String, required: true },
  guestNumber: { type: Number, required: true, min: 1 }, // At least 1 guest
  selectedMeal: [{
    //makesure to change meal to foreign key to meal collection
    mealID: { type:Number, required: true }, // Foreign key to Meal collectionmongoose.Schema.Types.ObjectId,
    mealName: { type: String, required: true },
    mealType: { type: String, required: true },
    mealCount: { type: Number, required: true },
    totalCost: { type: Number, required: true },
  }],
  guestName: { type: String, required: true },
  phoneNumber: { type: String, required: true, match: /^[0-9]{10}$/ }, // Assuming a 14-digit phone number
  timeClicked: {type: String, required: true}, // Assuming this is a string, adjust as necessary
});

export default mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);
