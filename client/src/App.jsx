import React from "react";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <h1>Sam's Cuts</h1>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/staff">Staff</Link> | 
          <Link to="/booking">Booking</Link> | 
          <Link to="/services">Services</Link> | 
          <Link to="/admin">Admin</Link>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App;