import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Form submitted successfully ✅");
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          message: "",
        });
      } else {
        alert("Something went wrong ❌");
      }

      console.log(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <>
      {/* Banner */}
      <section className="contact-banner">
        <h1>Contact Us</h1>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          {/* LEFT SIDE */}
          <div className="contact-left">
            <h2 className="section-heading">Pay Now for a Consultation</h2>

            <div className="contact-card">
              <div className="card-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <h3>Phone Number</h3>
                <p>
                  +91-9518955652 <br />
                  +91-9792324804
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <p>Contact@dearmindsclinic.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Visit at</h3>
                <p>
                  107, First Floor, AMC Avenue, NIBM Annexe <br />
                  Mohammed Wadi, Pune, India
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  placeholder="Phone *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="email"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <div className="form-row">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />

                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>

              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="submit-btn">
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
