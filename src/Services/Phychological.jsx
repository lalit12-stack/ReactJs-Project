import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Phychological = () => {
  return (
    <>
      <section className="phychological-banner">
        <h2>PSYCHOLOGICAL ASSESSMENT</h2>
      </section>
      {/* ------------------ Psychological Section ------------------ */}
      <section className="assessment-section">
        <div className="container">
          {/* LEFT SIDE */}
          <div className="left">
            <img
              src="Psychological-Assessments.jpg"
              alt="Psychological Assessment"
              className="assessment-img"
            />

            <h2 className="main-heading">
              What is a <span>Psychological Assessment?</span>
            </h2>

            <p className="description">
              Psychological assessments involve the use of scientific tools and
              clinical interviews to gain a deeper understanding of a person’s
              emotional, cognitive, behavioral, and developmental functioning.
              They are often the first step toward clarifying concerns,
              receiving a diagnosis, or developing a personalized intervention
              plan.
            </p>

            <h3 className="sub-heading">Our Approach</h3>

            <ul className="custom-list">
              <li>Comprehensive clinical interviews</li>
              <li>Standardized psychological testing</li>
              <li>Personalized treatment planning</li>
              <li>Detailed feedback and recommendations</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="right">
            <div className="form-box">
              <h2>Connect With Us</h2>

              <form>
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" placeholder="Enter your name" />

                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter phone number"
                />

                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email address"
                />

                <label htmlFor="date">Date</label>
                <input type="date" id="date" />

                <label htmlFor="time">Time</label>
                <input type="time" id="time" />

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Write your message"
                ></textarea>

                <button type="submit">Contact Us</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------phychological indivisual  therapy----------------------------------------------------------- */}
      <section className="assess-section-two">
        <div className="assess-container">
          {/* LEFT IMAGE */}
          <div className="assess-left">
            <img
              src="individual-therapy2.webp"
              alt="Assessment"
              className="assess-img"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="assess-right">
            <h2 className="assess-heading">What Do We Assess?</h2>

            <p className="assess-para">
              We conduct comprehensive assessments for:
            </p>

            <ul className="assess-list">
              <li>Cognitive Functioning (IQ, attention, memory)</li>
              <li>
                Neurodevelopmental Disorders (e.g., ADHD, Autism Spectrum)
              </li>
              <li>Learning Disabilities (e.g., Dyslexia, Dysgraphia)</li>
              <li>Emotional & Personality Profiling</li>
              <li>Mental Health Diagnoses (e.g., Depression, Anxiety, PTSD)</li>
              <li>School Readiness & Academic Evaluations</li>
              <li>Career & Aptitude Testing</li>
            </ul>
          </div>
        </div>
      </section>

      {/*  */}
      {/* ---------------------------------------benefits of phychological therapy--------------------------------------------- */}
      <section className="benefit-section2">
        <div className="benefit-card2">
          {/* LEFT CONTENT */}
          <div className="benefit-content2">
            <h2>Who Can Benefit?</h2>

            <div className="benefit-list">
              <span>
                <FaCheckCircle /> Parents seeking clarity on their child’s
                development
              </span>
              <span>
                <FaCheckCircle /> Students facing academic difficulties
              </span>
              <span>
                <FaCheckCircle /> Adults needing diagnosis or second opinion
              </span>
              <span>
                <FaCheckCircle /> Individuals wanting to explore their abilities
                or personality
              </span>
              <span>
                <FaCheckCircle /> Therapists/psychiatrists seeking referral
                evaluations
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="benefit-image">
            <img src="./benefits-pt.webp" alt=" " />
          </div>
        </div>
      </section>
    </>
  );
};

export default Phychological;
