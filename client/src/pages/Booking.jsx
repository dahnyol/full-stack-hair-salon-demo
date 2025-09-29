import React, { useState } from 'react';
import Calender from 'react-calendar';
import { useNavigate } from 'react-router-dom';

const services = [
    'Haircut',
    'Hair Coloring',
    'Deep Conditioning',
    'Bridal Styling',
    'Event Syling',
];

const stylists = [
    'Sam',
    'Emily Johnson',
    'Michael Lee',
    'Sarah Brown',
];

const Booking = () => {
    
    const [name, setName] = useState('First and Last Name');
    const [email, setEmail] = useState('example@example.com');
    const [date, setDate] = useState(new Date());
    const [service, setService] = useState('');
    const [stylist, setStylist] = useState('');

    // Allows us to re-direct back to the homepage after a successful booking
    const navigate = useNavigate();

    // POST request to send form data to server
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, date, service, stylist }),
        });
    
        //Tell the customer the booking was successful and redirect them back home.
        if (response.ok) {
          alert(`Booking for ${name} on ${date.toLocaleDateString()} was successful. We will send an email to ${email} with available times.`);
          navigate('/');
        } else {
          alert('Booking failed. Please try again.');
        }
      };

    return (
        <>
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name}
                        // prevent default behavior of input
                        // onChange to instead grab the event object (e)
                        // grab input property from the (e) and store it in var name
                        onChange={(e) => setName(e.target.value)} 
                        required>
                    </input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required>
                    </input>
                </div>
                <div>
                    <label>Date:</label>
                    <Calender
                        onChange={setDate}
                        value={date}
                        required
                    />
                    <p>Selected Date: {date.toLocaleString()}</p>
                </div>
                <div>
                    <label htmlFor="service">Services: </label>
                    <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)} 
                        required>
                        <option value="" disabled>Select a service</option>
                        {services.map((service, i) => ( 
                            <option key={i} value={service}>{service}</option>
                        ))}
                    </select>
                </div>
                <div> 
                    <label htmlFor="stylist">Stylists: </label>
                    <select
                        id="stylist"
                        value={stylist}
                        onChange={(e) => setStylist(e.target.value)} 
                        >
                        <option value="" disabled>Select a stylist (optional) </option>
                        {stylists.map((stylist, i) => ( 
                            <option key={i} value={stylist}>{stylist}</option>
                        ))}
                    </select>
                        <button type='submit'>Book</button>
                </div>
            </form>
        </>
    )
}

export default Booking;