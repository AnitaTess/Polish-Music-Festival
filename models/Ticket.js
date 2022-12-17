import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    seats: [{seat:Number}]
}
);

export default mongoose.model("Ticket", TicketSchema);