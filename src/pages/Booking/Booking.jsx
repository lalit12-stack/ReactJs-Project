import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    date: "",
    slot: "",
    name: "",
    mobile: "",
  });

  // Input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Proper submit handler with API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending data:", formData);

    try {
      const response = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Booking Submitted Successfully ✅");

        // reset form
        setFormData({
          date: "",
          slot: "",
          name: "",
          mobile: "",
        });

        // optional redirect
        navigate("/");
      } else {
        alert("Booking failed ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error ❌");
    }
  };

  return (
    <div className="overlay">
      <div className="modal-wrapper">
        <div className="modal-card">
          <span className="close-btn" onClick={() => navigate("/")}>
            <FaTimes />
          </span>

          <h2>Book Your Slot</h2>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group">
                <label>Select Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Selected Slot</label>
                <select
                  name="slot"
                  value={formData.slot}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose below</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                </select>
              </div>
            </div>

            <div className="row">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="confirm-btn">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
