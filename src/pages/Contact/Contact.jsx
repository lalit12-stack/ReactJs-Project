import { FaArrowRight, FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
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

            {/* Card 1 */}
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

            {/* Card 2 */}
            <div className="contact-card">
              <div className="card-icon">
                <FaEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <p>Contact@dearmindsclinic.com</p>
              </div>
            </div>

            {/* Card 3 */}
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
            <form>
              <div className="form-row">
                <input type="text" placeholder="Name *" />
                <input type="text" placeholder="Phone *" />
              </div>

              <input type="email" placeholder="Email" />

              <div className="form-row">
                <input type="date" />
                <input type="time" />
              </div>

              <textarea placeholder="Message"></textarea>

              <button className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
