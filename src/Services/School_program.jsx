import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const School_program = () => {
  return (
    <>
      <section className="School-banner">
        <h2>School mental Health Program</h2>
      </section>
      <section className="mental-section">
        <div className="mental-container">
          {/* LEFT SIDE */}
          <div className="mental-left">
            <img
              src="/school-class.png"
              alt="Mental Wellness"
              className="mental-image"
            />

            <h2 className="mental-heading">
              Why Partner with <span>DearMinds?</span>
            </h2>

            <p className="mental-para">
              Today’s students navigate unprecedented academic pressure, social
              challenges, and digital saturation. Schools are no longer just
              centers of academic learning; they are the frontline of student
              well-being. Our program moves beyond crisis response to create a
              proactive, integrated, and sustainable culture of mental wellness
              within your institution. We provide the clinical expertise and
              structured framework to help your students not just survive, but
              thrive.
            </p>

            <ul className="mental-list">
              <li>
                Evidence-Based: Designed by RCI-licensed clinical psychologists.
              </li>
              <li>Holistic: Supports students, educators, and parents.</li>
              <li>Flexible: On-site, online, and hybrid models available.</li>
              <li>
                Confidential & Ethical: We uphold the highest standards of
                student privacy.
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="mental-right">
            <h3 className="form-title">Connect With Us</h3>

            <form className="contact-form">
              <label>Name *</label>
              <input type="text" placeholder="Enter your name" />

              <label>Phone Number *</label>
              <input type="text" placeholder="Enter phone number" />

              <label>Email Address</label>
              <input type="email" placeholder="Enter email address" />

              <label>Date</label>
              <input type="date" />

              <label>Message</label>
              <textarea placeholder="Write your message"></textarea>

              <button type="submit" className="submit-btn">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* ------------------------------framework---------------------------------------------------------------- */}
      <section className="framework-section">
        {/* Center Heading */}
        <div className="framework-top">
          <h2>A Three-Pillar Framework for Sustainable Impact</h2>
          <p>
            Our program is built on a multi-tiered system of support that
            engages every level of your school community.
          </p>
        </div>

        <div className="framework-container">
          {/* LEFT SIDE */}
          <div className="framework-left">
            <h3>
              Pillar 1: For Students – Building Resilience & Providing Support
            </h3>

            <p>
              Direct services to ensure every student is seen, heard, and
              supported.
            </p>

            <ul className="main-list">
              <li>
                <span>Mental Health Check-ins & Screenings:</span>
                Anonymous, age-appropriate screenings to identify students at
                risk.
              </li>

              <li>
                <span>Individual Counseling:</span>
                Confidential one-on-one sessions with clinicians.
              </li>

              <li>
                <span>Preventive Workshops & Groups:</span>

                {/* Nested list */}
                <ul className="sub-list">
                  <li>Managing Exam Stress & Performance Anxiety</li>
                  <li>Building Healthy Relationships & Navigating Conflict</li>
                  <li>Digital Wellness & Social Media Balance</li>
                </ul>
              </li>

              <li>
                <span>Peer Mentorship Program:</span>
                Training student leaders to become certified allies.
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="framework-right">
            <img src="./schoolimage.webp" alt=" " />
          </div>
        </div>
      </section>
      {/* --------------------------------------------school section 3-------------------------------------------------- */}
      <section className="pillar-section">
        <div className="pillar-container">
          {/* Left Image */}
          <div className="pillar-image">
            <img src=" ./Schoolimage3.webp" alt="Leadership Training" />
          </div>

          {/* Right Content */}
          <div className="pillar-content">
            <h2>Pillar 2: For Educators - Training & Empowerment</h2>

            <p>
              Equipping your staff with the knowledge and skills to be effective
              supporters.
            </p>

            <ul>
              <li>
                <FaCheckCircle className="check-icon" />
                <span>
                  <strong> Teacher Sensitization Workshops:</strong> Training to
                  recognize early warning signs of emotional distress, burnout,
                  and learning difficulties.
                </span>
              </li>

              <li>
                <FaCheckCircle className="check-icon" />
                <span>
                  <strong> Psychological First Aid (PFA):</strong> Practical
                  skills for educators to provide immediate, calming support to
                  a student in crisis.
                </span>
              </li>

              <li>
                <FaCheckCircle className="check-icon" />
                <span>
                  <strong> Classroom Management Strategies:</strong> Expert
                  consultation on creating inclusive, psychologically safe
                  learning environments that reduce behavioral issues.
                </span>
              </li>

              <li>
                <FaCheckCircle className="check-icon" />
                <span>
                  <strong> Educator Well-being Sessions:</strong> dedicated to
                  preventing burnout and promoting self-care among your staff.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --------------------------------------------scholl image----------------------------------------------------- */}
      <section className="parent-section">
        <div className="parent-container">
          {/* LEFT CONTENT */}
          <div className="parent-content">
            <h2>Pillar 3: For Parents – Partnership & Guidance</h2>

            <p>
              Bridging the gap between school and home to create a consistent
              support system.
            </p>

            <ul>
              <li>
                <FaCheckCircle className="check-icon" />
                <span>
                  <strong>Awareness Workshops:</strong> Topics include:
                </span>
              </li>

              <li>
                <FaCheckCircle className="check-icon" />
                <span>Understanding Teen Mental Health: Beyond Moodiness</span>
              </li>

              <li>
                <FaCheckCircle className="check-icon" />
                <span>Parenting in the Digital Age</span>
              </li>

              <li>
                <FaCheckCircle className="check-icon" />
                <span>
                  <strong> Managing Academic Pressure:</strong> Supporting
                  Without Stressing
                </span>
              </li>

              <li>
                <FaCheckCircle className="check-icon" />
                <span>
                  <strong>Support for Specific Concerns:</strong> Guidance
                  sessions for parents of children with learning difficulties,
                  behavioral challenges, or social anxiety
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="parent-image">
            <img src="./Schoolimage4.jpg" alt="Parent Support" />
          </div>
        </div>
      </section>

      {/* ---------------------------------------school section 5---------------------------------------------------- */}
      <section className="issues-section">
        <div className="issues-container">
          {/* LEFT IMAGE */}
          <div className="issues-image">
            <img src=" ./Schoolimage5.jpg" alt="Students Writing Exam" />
          </div>

          {/* RIGHT CARD */}
          <div className="issues-card">
            <h2>Key Issues We Address</h2>

            <p>
              Our program is designed to tackle the most pressing challenges in
              education today:
            </p>

            <ul>
              <li>
                <FaCheckCircle className="check-icon" /> Extreme Academic
                Pressure & Burnout
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Hostel-related
                Isolation & Homesickness
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Students
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Teachers and School
                Staff
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Parents and Caregivers
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> School Leadership and
                Administrators
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> Special Education and
                Support Teams
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* -------------------------------------------school image------------------------------------------------ */}
      <section className="process-section">
        <div className="process-container">
          {/* Left Content */}
          <div className="process-content">
            <h2 className="process-heading">
              Our Process: How We Partner With You
            </h2>

            <ul className="process-list">
              <li>
                <strong>Needs Assessment:</strong> We begin with a confidential
                meeting with leadership and a survey to understand your school's
                unique culture and challenges.
              </li>

              <li>
                <strong>Customized Proposal:</strong> We present a tailored
                program outlining services, timelines, and investment for your
                institution.
              </li>

              <li>
                <strong> Seamless Implementation:</strong> Our licensed
                clinicians integrate with your team to deliver services with
                minimal disruption.
              </li>

              <li>
                <strong> Ongoing Review & Reporting:</strong> We provide
                anonymous, aggregate reports on well-being trends and program
                impact, ensuring continuous improvement.
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="process-image">
            <img src="./Schoolimage6.jpg" alt="Students in classroom" />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------school section 7----------------------------------------------------- */}
      <section className="work-section">
        <div className="work-container">
          {/* Left Image */}
          <div className="work-image">
            <img src="./Schoolimage7.webp" alt="Students in classroom" />
          </div>

          {/* Right Content Card */}
          <div className="work-card">
            <h2 className="work-heading">Who we work with</h2>

            <p className="work-para">Our programs are tailored for:</p>

            <ul className="work-list">
              <li>CBSE, ICSE, IB, IGCSE, and State Board Schools</li>
              <li>Coaching Institutes (NEET, JEE, CUET preparation)</li>
              <li>Residential Schools & Hostels</li>
              <li>International Schools</li>
              <li>University Campus Programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------School section 7------------------------------------------- */}
      {/* <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-heading">Frequently Asked Questions</h2>

          <div className="faq-box">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span className="faq-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                  <p>{faq.question}</p>
                </div>

                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default School_program;
