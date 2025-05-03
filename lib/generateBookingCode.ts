import { customAlphabet } from "nanoid";

const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const generateBookingCode = customAlphabet(alphabet, 6);

export default generateBookingCode