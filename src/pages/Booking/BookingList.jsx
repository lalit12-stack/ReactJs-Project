import React, { useEffect, useState } from "react";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  /* GET bookings */
  const getBookings = async () => {
    const res = await fetch("http://localhost:5000/booking");
    const data = await res.json();

    if (data.success) {
      setBookings(data.data);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  /* DELETE booking */
  const deleteBooking = async (id) => {
    const res = await fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.success) {
      alert("Deleted ✅");
      getBookings(); // refresh list
    }
  };

  /* UPDATE booking */
  const updateBooking = async (id) => {
    const newName = prompt("Enter new name");

    if (!newName) return;

    const res = await fetch(`http://localhost:5000/booking/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Updated ✅");
      getBookings();
    }
  };

  return (
    <div>
      <h2>All Bookings</h2>

      {bookings.map((booking) => (
        <div
          key={booking._id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <p>Name: {booking.name}</p>
          <p>Date: {booking.date}</p>
          <p>Slot: {booking.slot}</p>
          <p>Mobile: {booking.mobile}</p>

          <button onClick={() => updateBooking(booking._id)}>Update</button>

          <button onClick={() => deleteBooking(booking._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
