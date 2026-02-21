import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Corporate_program = () => {
  return (
    <>
      <section className="Corporate-banner">
        <h2>Corporate mental health program</h2>
      </section>
      <section className="corporate-section2">
        {/* LEFT SIDE */}
        <div className="left-side">
          <img
            src="./CorporateImage.jpg "
            alt="therapy"
            className="corporate-img"
          />

          <div className="content2">
            <h2>
              Why Partner with <span>DearMinds?</span>
            </h2>

            <p>
              In today’s demanding work environment, employee well-being is the
              cornerstone of sustainable performance. Organizations that invest
              in mental health see measurable returns in productivity,
              retention, and innovation. Our program provides a strategic,
              clinical partnership to help you move from reactive support to a
              proactive, psychologically safe work culture. We provide the
              expertise to transform your workplace into a source of resilience
              and strength.
            </p>

            <ul>
              <li>
                <FaCheckCircle className="icon" /> <b>Evidence-Based:</b>
                Designed and delivered by RCI-licensed clinical psychologists.
              </li>
              <li>
                <FaCheckCircle className="icon" /> <b>Holistic: </b>Supports
                employees, managers, and overall organizational culture.
              </li>
              <li>
                <FaCheckCircle className="icon" /> <b>Flexible & Scalable:</b>
                Tailored for startups, SMEs, and large enterprises.
              </li>
              <li>
                <FaCheckCircle className="icon" />
                <b>Confidential & Discrete:</b>
                We uphold the highest clinical standards of ethics and privacy.
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-side">
          <div className="form-container">
            <h2 className="form-heading">Connect with Us</h2>

            <form>
              <label>Name *</label>
              <input type="text" />

              <label>Phone Number *</label>
              <input type="text" />

              <label>Email Address</label>
              <input type="email" />

              <label>Date</label>
              <input type="date" />

              <label>Time</label>
              <input type="time" />

              <label>Message</label>
              <textarea maxLength="180"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <section className="framework-section">
        {/* Center Heading */}
        <div className="framework-top">
          <h2>A Three-Pillar Framework for Organizational Wellbeing</h2>
          <p>
            Our program is built on a multi-tiered system of support that
            engages every level of your organization.
          </p>
        </div>

        {/* Left + Right Section */}
        <div className="framework-content">
          {/* Left Side */}
          <div className="framework-left">
            <h3>Pillar 1: For Employees – Support & Prevention</h3>

            <p>
              Our program is built on a multi-tiered system of support that
              engages every level of your organization.
            </p>

            <ul>
              <li>
                <strong>Employee Assistance Program (EAP):</strong> Confidential
                counselling.
              </li>
              <li>
                <strong>Preventive Workshops & Webinars:</strong> Stress &
                burnout sessions.
              </li>
              <li>
                <strong>Financial Wellness & Mindfulness</strong>
              </li>
              <li>
                <strong>Crisis Support:</strong> Immediate professional support.
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="framework-right">
            <img src=" ./Corporate2.webp" alt="Corporate team" />
          </div>
        </div>
      </section>
      {/* --------------------------------------------- Corporate section 3 ----------------------------------------------- */}
      <section className="pillar-section">
        <div className="pillar-container">
          {/* LEFT CONTENT */}
          <div className="pillar-left">
            <h2>
              Pillar 2: For Managers & Leaders -
              <span> Empowerment & Skills</span>
            </h2>

            <p>
              Equip your leadership with the skills to foster psychological
              safety and manage teams effectively.
            </p>

            <ul>
              <li>
                <FaCheckCircle className="check-icon" />
                Mental Health First Aid for Managers
              </li>

              <li>
                <FaCheckCircle className="check-icon" />
                Leading with Empathy & Psychological Safety
              </li>

              <li>
                <FaCheckCircle className="check-icon" />
                Managing Difficult Conversations
              </li>

              <li>
                <FaCheckCircle className="check-icon" />
                Leader Well-being Sessions
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="pillar-right">
            <img src="./Corporateimage3.webp" alt=" " />
          </div>
        </div>
      </section>
      {/* --------------------------------------------corporate section 4------------------------------------------------ */}
      <section className="organization-section">
        <div className="organization-container">
          {/* LEFT CONTENT */}
          <div className="organization-left">
            <h2>
              Pillar 3: For the Organization –<span> Strategy & Culture</span>
            </h2>

            <p>
              Embedding mental wellness into the very fabric of your company’s
              culture and policies.
            </p>

            <ul>
              <li>
                <FaCheckCircle className="check-icon" />
                <span>
                  <strong>Well-being Audits & Surveys:</strong> Anonymous
                  organizational pulse checks.
                </span>
              </li>

              <li>
                <FaCheckCircle className="check-icon" />
                <span>
                  <strong>Policy Consultation:</strong> Expert review and
                  development of HR policies.
                </span>
              </li>

              <li>
                <FaCheckCircle className="check-icon" />
                <span>
                  <strong>Culture & Change Management:</strong> Support during
                  mergers and restructuring.
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="organization-right">
            <img src="/Corporateimage4.jpg" alt="Organization Team" />
          </div>
        </div>
      </section>
      {/* --------------------------------------------corporate section 5----------------------------------------------------- */}
      <section className="challenges-section">
        <div className="challenges-container">
          {/* LEFT IMAGE */}
          <div className="challenges-left">
            <img src="/corporateimage.jpg" alt="Corporate Meeting" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="challenges-right">
            <h2>Key Organizational Challenges We Address</h2>

            <p>
              Our program is designed to tackle the most pressing issues in the
              modern workplace:
            </p>

            <ul>
              <li>
                <FaCheckCircle className="icon" /> Employee Burnout & Attrition
              </li>
              <li>
                <FaCheckCircle className="icon" /> Quiet Quitting & Low
                Engagement
              </li>
              <li>
                <FaCheckCircle className="icon" /> Workplace Conflict &
                Communication Breakdown
              </li>
              <li>
                <FaCheckCircle className="icon" /> Leadership Fatigue & Stress
              </li>
              <li>
                <FaCheckCircle className="icon" /> The Impact of Restructuring &
                Layoffs
              </li>
              <li>
                <FaCheckCircle className="icon" /> Crisis Response & Trauma
                Support
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* -------------------------------------------corporate section 6----------------------------------------------------- */}

      <section className="process-section3">
        <div className="process-container3">
          {/* LEFT CONTENT */}
          <div className="process-left">
            <h2>Who We Work With</h2>
            <p>Our programs are tailored for:</p>

            <ul>
              <li>
                <FaCheckCircle className="icon" />
                <span>Startups & SMEs</span>
              </li>

              <li>
                <FaCheckCircle className="icon" />
                <span>Large Enterprises & MNCs</span>
              </li>

              <li>
                <FaCheckCircle className="icon" />
                <span>IT/ITES & BPO Companies</span>
              </li>

              <li>
                <FaCheckCircle className="icon" />
                <span>Manufacturing & Industrial Plants</span>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="process-right">
            <img src="./corporateimage7.webp" alt="Handshake Partnership" />
          </div>
        </div>
      </section>
      {/* -----------------------------------------corporate FAQ------------------------------------------------------------- */}
    </>
  );
};

export default Corporate_program;
