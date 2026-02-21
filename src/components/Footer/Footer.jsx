import React from "react";
import { useNavigate } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* LEFT */}
        <div className="footer-col">
          <img src="dearMinds-Logo.png" alt="" />
          <p>
            107, First Floor, AMC Avenue, NIBM <br /> Annexe, Mohammed Wadi,
            Pune, India
          </p>
        </div>
        <div className="footer-contacts">
          <h2>Contact Us</h2>
          <p className="footer-contact">+91-9518955652</p> <br />
          <p className="footer-contact">+91-9792324804 </p> <br />
          <p className="footer-contact">Contact@dearmindsclinic.com</p>
        </div>
        <div className="footer-times">
          <h2>Time</h2>
          <p className="footer-time">Mon-Sat 10 AM to 6 PM</p>
          <p className="footer-time">Sun: 12Am to 6 PM</p>
        </div>
        <div className="footer-action">
          <h2>Take Actions</h2>
          <button className="footer-btn" onClick={() => navigate("/booking")}>
            Book an Appointment
          </button>
        </div>
      </div>
      <div className="footer-divider">
        <div className="footer-wrapper-divider"></div>
      </div>
      {/* ------------------------------------------footer bottom----------------------------------- */}
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund Policy</a>
        </div>

        <div className="footer-copy">
          Copyright © 2025. All rights reserved. by Acumese Tech
        </div>
      </div>
    </footer>
  );
};

export default Footer;
