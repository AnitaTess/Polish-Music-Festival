import mongoose from 'mongoose';

const ShowSchema = new mongoose.Schema({
    artist:{
        type: String,
        required: true
    },

    genre:{
        type: String,
        required: true
    },

    date:{
        type: Date,
        default: Date.now
    },

    times:{
        type: String,
        required: true
    },

    photos:{
        type: String
    },

    desc:{
        type: String,
        required: true
    },

    tickets:{
        type: [String]
    },

    cheapestPrice:{
        type: Number,
        required: true
    },
});

export default mongoose.model("Show", ShowSchema);