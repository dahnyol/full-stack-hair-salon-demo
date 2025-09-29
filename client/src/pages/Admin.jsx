import React, { useState, useEffect } from 'react';

// Loop through an unknown number of entries in our database
// Dispay each entry for a history of bookings
const Admin = () => {

    // State to hold current list of bookings
    const [bookings, setBookings] = useState([]);

    // GET request on page load to show current DB entries of bookings
    useEffect(() => {
        const fetchBookings = async () => {
            const response = await fetch('http://localhost:5000/api/bookings');
            const data = await response.json();
            setBookings(data);
        }

        fetchBookings();
    }, []);

    return (
        <>
            <h1>Admin Dashboard</h1>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        {booking.name} - {booking.email} - {new Date(booking.date).toLocaleDateString()} - {booking.service} - {booking.stylist}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Admin;