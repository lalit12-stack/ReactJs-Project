import React from "react";

import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Maldives = () => {
  return (
    <>
      <section className="maldives-banner">
        <h2>WELCOME TO DEARMINDS MALDIVES</h2>
      </section>
      <section className="maldives-section">
        <div className="maldives-container">
          {/* LEFT SIDE */}
          <div className="maldives-left">
            <img src="./maldives-.png" alt="Maldives" />

            <p>
              Mental well-being is universal, but the way we understand,
              express, and heal is deeply personal and cultural. <br />
              DearMinds Psychological Clinic is proud to extend its
              professional, compassionate services to the Maldivian community.{" "}
              <br /> We offer the same high standard of evidence-based
              psychological care that defines our practice in India, <br /> now
              delivered with sensitivity to the unique cultural, social, and
              linguistic context of the Maldives.
            </p>

            <ul>
              <li>Licensed Clinicians</li>
              <li>Culturally Sensitive Care</li>
              <li>Evidence-Based Therapy</li>
            </ul>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="maldives-form">
            <h2>Connect with Us</h2>

            <form>
              <label>
                <strong>Name *</strong>
              </label>
              <input type="text" />

              <label>
                <strong>Phone Number *</strong>
              </label>
              <input type="text" />

              <label>
                <strong>Email Address</strong>
              </label>
              <input type="email" />

              <label>
                <strong>Date</strong>
              </label>
              <input type="date" />

              <label>
                {" "}
                <strong>Time</strong>
              </label>
              <input type="time" />

              <label>
                {" "}
                <strong>Message</strong>
              </label>
              <textarea maxLength="180"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      {/* -------------------------------------maldives services------------------------------------------------------- */}
      <section className="services">
        <h2 className="section-title">Our Services for the Maldives</h2>
        <p className="section-subtitle">
          We currently offer virtual (online) sessions for clients across all
          atolls, with plans to open a physical branch in the near future.
        </p>

        <div className="container">
          <div className="services-cards">
            <div className="service-card">
              <h3>For Families & Parents</h3>
              <ul>
                <li>
                  <FaCheckCircle />
                  <strong>Family Therapy: </strong>
                  Improve dynamics, resolve conflict, and build healthier
                  relationships at home.
                </li>
                <li>
                  <FaCheckCircle />
                  <strong>Parenting Support: </strong>
                  Guidance for managing behavioral challenges and supporting
                  your child's emotional development.
                </li>
              </ul>
            </div>
            <div className="service-card">
              <h3>For Individuals & Couples</h3>
              <ul>
                <li>
                  <FaCheckCircle />
                  <strong> Individual Therapy: </strong>
                  One-on-one support for anxiety, depression, stress, trauma,
                  and life transitions.
                </li>
                <li>
                  <FaCheckCircle />
                  <strong> Couples Counselling: </strong>
                  Strengthen your relationship and improve communication.
                </li>
                <li>
                  <FaCheckCircle />
                  <strong>Teen & Adolescent Support: </strong> Help for young
                  people navigating social, academic, and emotional challenges.
                </li>
              </ul>
            </div>
            <div className="service-card">
              <h3>For Families & Parents</h3>
              <ul>
                <li>
                  <FaCheckCircle />
                  <strong> Corporate Wellness Programs:</strong>
                  EAPs, workshops, and leadership training for Maldivian
                  businesses.
                </li>
                <li>
                  <FaCheckCircle />
                  <strong> Programs :School Mental Health</strong>
                  Student counselling, teacher training, and parent workshops
                  for local schools.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------why maldives section----------------------------------------------- */}
      <section className="why-section">
        <div className="why-container">
          {/* Card */}
          <div className="why-card">
            {/* LEFT CONTENT */}
            <div className="why-content">
              <h2>Why Choose DearMinds Maldives?</h2>

              <ul>
                <li>
                  <strong>International Expertise, Local Understanding:</strong>
                  Our clinicians are licensed in multiple countries.
                </li>

                <li>
                  <strong>Culturally Attuned Care:</strong>
                  We respect and understand Maldivian culture.
                </li>

                <li>
                  <strong>Strict Confidentiality:</strong>
                  Your privacy is our utmost priority.
                </li>

                <li>
                  <strong>Accessible to All Atolls:</strong>
                  Online sessions make care accessible anywhere.
                </li>

                <li>
                  <strong>In-Person Clinic Opening Soon:</strong>
                  Physical clinic launching soon.
                </li>
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div className="why-image">
              <img src="./why-choose-maldives.webp" alt="why choose us" />
            </div>
          </div>
        </div>
      </section>
      {/* -----------------------------------------maldives supervisor section----------------------------------------- */}
      <section className="supervisors-section">
        <h2 className="supervisors-title">Our Supervisors</h2>

        <div className="supervisors-container">
          {/* LEFT IMAGE */}
          <div className="supervisors-image">
            <img src="./supervisor.jpg" alt="Supervisor" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="supervisors-content">
            <h3>Dr. Naseem Ahmad, M.Phil, Ph.D.</h3>

            <p className="sub-text">
              RCI Licensed Clinical Psychologist (India) | Licensed Psychologist
              (Maldives)
            </p>

            <p>
              "Having practiced in the Maldives, I understand the unique
              strengths and challenges of the community. My goal is to provide a
              safe, respectful space where healing feels familiar and
              accessible."
            </p>

            <p>
              Available for: Individual Supervision, Complex Case Consultations,
              and specialized training in the above areas.
            </p>
          </div>
        </div>
      </section>
      {/* ------------------------------------maldives-therapy------------------------------------------------------- */}
      <section className="therapy-section">
        <div className="therapy-container">
          <div className="therapy-card">
            {/* LEFT CONTENT */}
            <div className="therapy-content">
              <h1>Online Therapy Available Now</h1>

              <p className="therapy-para">
                We currently provide secure, confidential online therapy
                sessions for clients across the Maldives.
              </p>

              <h2>How It Works:</h2>

              <div className="therapy-list">
                <p>
                  <span>✔</span>
                  <strong> Book a Consultation:</strong> Schedule a convenient
                  time via phone or WhatsApp.
                </p>

                <p>
                  <span>✔</span>
                  <strong> Secure Video Session:</strong> Connect with your
                  therapist through encrypted video.
                </p>

                <p>
                  <span>✔</span>
                  <strong> Begin Your Journey:</strong> Receive professional
                  care from your home.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="therapy-image">
              <img src="./maldives-therapy.webp" alt="Online Therapy" />
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------maldives coming soon ----------------------------------------------- */}
      <section className="clinic-section">
        <div className="clinic-container">
          {/* LEFT IMAGE */}
          <div className="clinic-image">
            <img src="./coming-soon.jpg" alt="Coming Soon" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="clinic-content">
            <h2>In-Person Clinic Coming Soon</h2>

            <p>
              We are currently in the process of establishing a physical clinic
              in Malé to provide in-person services to the community.
            </p>

            <h3>Services to be offered:</h3>

            <ul className="clinic-list">
              <li>Individual and family therapy sessions</li>
              <li>Psychological assessments and testing</li>
              <li>Group therapy and workshops</li>
              <li>Corporate and school partnerships</li>
            </ul>
          </div>
        </div>
      </section>
      {/* -------------------------------maldives FAQ section------------------------------------------- */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-box">
          <div className="faq-item">
            <div className="faq-question">
              <a href="javascript:void(0)">
                Q: How do I know if therapy will work for me?
              </a>
              <i className="fa-solid fa-plus"></i>
            </div>
            <p className="faq-answer">
              Therapy is a collaborative process. Our clinicians work with you
              to understand your goals and create a personalized approach.
            </p>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <a href="javascript:void(0)">
                {" "}
                Q: Are your services confidential?
              </a>
              <i className="fa-solid fa-plus"></i>
            </div>
            <p className="faq-answer">
              Yes, all sessions are confidential and follow professional ethical
              standards.
            </p>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <a href="javascript:void(0)">
                Q: What languages do you offer services in?
              </a>
              <i className="fa-solid fa-plus"></i>
            </div>
            <p className="faq-answer">
              We offer services in English, Hindi, and regional languages.
            </p>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <a href="javascript:void(0)">Q: How much do sessions cost?</a>
              <i className="fa-solid fa-plus"></i>
            </div>
            <p className="faq-answer">
              Session costs vary depending on the type of therapy and duration.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-wrapper">
          {/* <!-- LEFT CONTENT --> */}
          <div className="cta-left">
            <h2>
              Start Your Healing
              <br />
              Journey Today
            </h2>
            <p>
              Take the first step toward mental well-being with professionals
              who understand your world.
            </p>
          </div>

          {/* <!-- RIGHT CARD --> */}
          <div className="cta-card">
            <p>
              <FaEnvelope />
              maldives@dearmindsclinic.com
            </p>

            <p>
              <FaWhatsapp />
              +960 932-5735
            </p>

            <p>
              <FaArrowRight />
              Coming Soon: Physical clinic in Malé
            </p>

            <button>Book a Consultation</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Maldives;
