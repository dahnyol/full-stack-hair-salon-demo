const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const connectDB = require("./config/database");
const Booking = require("./models/Booking");


require("dotenv").config();

app.use(cors())
app.use(express.json())

connectDB();

// Routes
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({date: 1})
        res.json(bookings)
    } catch (error) {
        console.error("Error fetching bookings", error);
        res.status(500).json( {message: "Error fetching bookings"} );
    }
})

app.post('/api/bookings', async (req, res) => {
    try {
        const {name, email, date, service, stylist} = req.body;
        const newBooking = new Booking( {name, email, date, service, stylist} );
        await newBooking.save();
        res.json(newBooking);
    } catch (error) {
        console.error("Error saving bookings", error);
        res.status(500).json( {message: "Error saving bookings"} );
    }
})



app.listen(5000, () => {
    console.log(`Running on 5000`);
});