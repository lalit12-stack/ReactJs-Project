import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data.data);
      });
  }, []);

  const filteredBookings = bookings.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase()),
  );

  const deleteBooking = async (id) => {
    await fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
    });

    setBookings(bookings.filter((b) => b._id !== id));
  };

  const todayBookings = bookings.filter(
    (b) => new Date(b.date).toDateString() === new Date().toDateString(),
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button className="logout-btn">Logout</button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="card-container">
        <div className="dashboard-card">
          <h3>Total Bookings</h3>
          <p>{bookings.length}</p>
        </div>

        <div className="dashboard-card">
          <h3>Today's Bookings</h3>
          <p>{todayBookings.length}</p>
        </div>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by name..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <table className="booking-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Slot</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredBookings.map((b) => (
            <tr key={b._id}>
              <td>{b.name}</td>
              <td>{b.date}</td>
              <td>{b.slot}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteBooking(b._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
