import React from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
  return (
    <div>
      <h1>Dashboard Overview</h1>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Bookings</h3>
          <p>12</p>
        </div>

        <div className="stat-card">
          <h3>Upcoming Sessions</h3>
          <p>3</p>
        </div>

        <div className="stat-card">
          <h3>Completed Sessions</h3>
          <p>9</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
