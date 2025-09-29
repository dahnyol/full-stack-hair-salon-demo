const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    stylist: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model("Booking", BookingSchema);