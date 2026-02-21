import React from "react";
import { Link } from "react-router-dom";
// import { Mail, MessageCircle, Phone } from "lucide-react";
import {
  FaBrain,
  FaSchool,
  FaUniversity,
  FaUserCheck,
  FaUserTie,
} from "react-icons/fa";
import { FaCheckCircle, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";
import { FaBriefcase, FaHeart, FaUserGraduate, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// import { img2 } from "./assets/img/clinic2.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Home-wrapper">
        <section className="Home">
          <h2 className="Home-title">
            Healing Begins with <span>being heard</span>
          </h2>

          <div className="Home-action">
            <button
              className="primary"
              onClick={() => navigate("/schoolProgram")}
            >
              REFER A SCHOOL
            </button>
            <button
              className="outline"
              onClick={() => navigate("/corporate_program")}
            >
              REFER A ORGANISATION
            </button>

            {/* CONTACT US */}
            <button className="outline" onClick={() => navigate("/contact")}>
              CONTACT US
            </button>
          </div>
          {/* ------------------------------------------------home content ------------------------------------------------------------ */}
          <section className="Home-content">
            <h2>Welcome to DearMinds</h2>
            <p>
              At DearMinds, we believe that mental health is more than the
              absence of illness—it’s the foundation for living
              <br />
              fully, learning with curiosity, and working with purpose.
            </p>
            <p>
              Rooted in science and guided by compassion, we provide
              confidential, evidence-based psychological services
              <br />
              for individuals, schools, and organizations in India and the
              Maldives.
            </p>
            <p>
              No judgment. No labels. Just a safe space to understand yourself,
              heal, and grow.
            </p>
            {/* -----------------------------Hero Services------------------------------- -------------------------------------*/}
            <section className="services-section">
              <h2>Our Core Services</h2>

              <div className="services-container">
                {/* CARD 1 */}
                <div className="service-card1">
                  <div className="card-header">
                    <div className="icon-box">
                      <FaBrain />
                    </div>
                    <h3>Clinic Services</h3>
                  </div>

                  <p>
                    Personalized mental health support for children,
                    adolescents, and adults:
                  </p>

                  <ul>
                    <li>
                      <FaCheckCircle />
                      Psychological Assessments
                    </li>
                    <li>
                      <FaCheckCircle />
                      Counselling & Psychotherapy
                    </li>
                    <li>
                      <FaCheckCircle />
                      Anxiety, Depression, Trauma, Grief
                    </li>
                    <li>
                      <FaCheckCircle />
                      Relationship Stress Burnout
                    </li>
                  </ul>

                  <div className="btn-wrapper">
                    <Link to="/CLINIC_SERVICES">
                      <button className="card-btn">Learn More</button>
                    </Link>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="service-card1">
                  <div className="card-header">
                    <div className="icon-box">
                      <FaSchool />
                    </div>
                    <h3>School Mental Health Program</h3>
                  </div>

                  <p>
                    Helping students thrive academically, socially, and
                    emotionally:
                  </p>

                  <ul>
                    <li>
                      <FaCheckCircle />
                      Student mental health check-ins
                    </li>
                    <li>
                      <FaCheckCircle />
                      Teacher & parent sensitization
                    </li>
                    <li>
                      <FaCheckCircle />
                      Peer advocacy programs
                    </li>
                    <li>
                      <FaCheckCircle />
                      Support for coaching students
                    </li>
                  </ul>

                  <div className="btn-wrapper">
                    <button onClick={() => navigate("/schoolProgram")}>
                      Learn About School program
                    </button>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="service-card1">
                  <div className="card-header">
                    <div className="icon-box">
                      <FaUserTie />
                    </div>
                    <h3>Corporate Mental Health Program</h3>
                  </div>

                  <p>
                    Creating workplaces that are emotionally intelligent and
                    resilient:
                  </p>

                  <ul>
                    <li>
                      <FaCheckCircle />
                      Employee Assistance Programs (EAP)
                    </li>
                    <li>
                      <FaCheckCircle />
                      Stress & wellness workshops
                    </li>
                    <li>
                      <FaCheckCircle />
                      Leadership coaching
                    </li>
                    <li>
                      <FaCheckCircle />
                      Crisis support audits
                    </li>
                  </ul>

                  <div className="btn-wrapper">
                    <button onClick={() => navigate("/corporate_program")}>
                      Learn About Corporate program
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/*----------------------------------- more Services Training & workshop-------------------------------- */}

            <div className="training">
              <div className="training-wrapper">
                <div className="training-card">
                  <img className="training-img" src="./clinic2.jpg" alt="" />

                  <div className="training-content">
                    <h3>Clinical Supervision & Training</h3>
                    <p className="training-para">
                      We support the supporters. DearMinds is committed to
                      nurturing the next generation of mental health
                      professionals. We offer confidential, affordable
                      supervision to help you grow in your practice.
                    </p>

                    <ul className="training-list">
                      <li>
                        <FaCheckCircle className="list-icon" />
                        Individual Clinical Supervision: One-on-one guidance for
                        psychologists, counselors, and therapists.
                      </li>
                      <li>
                        <FaCheckCircle className="list-icon" />
                        Learn collaboratively with peers in a small group
                        setting.
                      </li>
                      <li>
                        <FaCheckCircle className="list-icon" />
                        Case Consultations: Get expert insights on specific
                        client challenges.
                      </li>
                      <li>
                        <FaCheckCircle className="list-icon" />
                        Our supervision is provided by RCI-licensed senior
                        clinical psychologists with extensive experience.
                      </li>
                    </ul>

                    <button className="training-button">
                      Learn More About Supervision
                    </button>
                  </div>
                </div>

                {/* // card2 */}
                <div className="workshop-card">
                  <img className="workshop-img" src="./clinic3.jpg" alt="" />

                  <div className="workshop-content">
                    <h3>Psychology Workshops & Events</h3>
                    <p className="workshop-para">
                      What you'll learn: Evidence-based techniques to identify
                      anxiety triggers, calm your nervous system, and reduce
                      overwhelm. Parenting the Neurodiverse Child
                    </p>

                    <ul className="workshop-list">
                      <li>
                        <FaCheckCircle className="list-icon" />
                        Individual Clinical Supervision: One-on-one guidance for
                        psychologists, counselors, and therapists.
                      </li>
                      <li>
                        <FaCheckCircle className="list-icon" />
                        For Parents and caregivers
                      </li>
                      <li>
                        <FaCheckCircle className="list-icon" />
                        What you’ll learn: Strategies to support your child’s
                        unique needs, manage big emotions, and strengthen your
                        connection.
                      </li>

                      <li>
                        {" "}
                        <FaCheckCircle className="list-icon" />
                        Upcoming Workshops
                      </li>
                    </ul>

                    <button className="workshop-button">
                      To Know More Workshops
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------------------------cummunity-------------------------------------------- */}
            <section class="community">
              <div class="wrapper">
                <h2>Community Support & Partnerships</h2>

                <p class="community-para">
                  Believing in accessible care for all. We are dedicated to
                  making mental wellness support available to every community.
                </p>

                <div class="community-cards">
                  <div class="card">
                    <div class="card-top">
                      <div class="icon-box">
                        <FaBrain />
                      </div>
                      <h3>Financial Aid</h3>
                    </div>

                    <p class="card-text">
                      We offer sliding-scale fees and special discounts for
                      students and individuals from low socio-economic
                      backgrounds.
                    </p>

                    <button class="card-btn">Read More</button>
                  </div>

                  <div class="card">
                    <div class="card-top">
                      <div class="icon-box">
                        <FaUniversity />
                      </div>
                      <h3>Academic Collaborations</h3>
                    </div>

                    <p class="card-text">
                      We partner with universities and colleges to provide
                      on-campus counselling services, workshops, and clinical
                      training.
                    </p>

                    <button class="card-btn">Read More</button>
                  </div>

                  <div class="card">
                    <div class="card-top">
                      <div class="icon-box">
                        <FaUserCheck />
                      </div>
                      <h3>Self-Assessment Tools</h3>
                    </div>

                    <p class="card-text">
                      Explore our curated library of free, anonymous
                      self-assessments to better understand your well-being.
                    </p>

                    <button class="card-btn">Read More</button>
                  </div>
                </div>
              </div>
            </section>

            {/* ----------------------------------  maldives section-------------------------------  */}
            <section className="maldives-section1">
              <div className="maldives-container">
                {/* LEFT SIDE */}
                <div className="maldives-left">
                  <h2>DearMinds Maldives</h2>

                  <p className="top-para">
                    We are now extending our care to the Maldivian community
                    through online services and soon, a local clinic:
                  </p>

                  <ul className="maldives-list">
                    <li>
                      <FaCheckCircle className="check-icon" /> Online therapy &
                      assessments for individuals, couples, and families
                    </li>
                    <li>
                      <FaCheckCircle className="check-icon" /> School and
                      corporate mental health programs
                    </li>
                    <li>
                      <FaCheckCircle className="check-icon" /> Multilingual,
                      culturally attuned care
                    </li>
                  </ul>

                  <div className="contact-row">
                    <strong>
                      <FaEnvelope /> Contact@dearmindsclinic.com
                    </strong>
                    <strong>
                      <FaWhatsapp /> +91-9518955652
                    </strong>
                    <strong>
                      <FaPhone /> +960 932-5735
                    </strong>
                  </div>

                  <button
                    className="maldives-btn"
                    onClick={() => navigate("/maldives")}
                  >
                    Discover DearMinds Maldives
                  </button>
                </div>

                {/* RIGHT SIDE */}
                <div className="maldives-right">
                  <img src="./maldives.webp" alt="Maldives" />
                </div>
              </div>
            </section>

            {/*---------------------------------------- --------------------------- online therapy (home page)---------------------------------- */}
            <section className="therapy-section1">
              <div className="therapy-wrapper1">
                <h1 className="therapy-title1">Online Therapy</h1>

                <p className="therapy-desc1">
                  We believe everyone deserves access to quality mental health
                  care, no matter where you are. DearMinds offers secure,
                  confidential, and effective online therapy sessions for
                  clients across India and the Maldives.
                </p>

                <div className="therapy-card1">
                  {/* Left Content */}
                  <div className="therapy-list1">
                    <ul>
                      <li>
                        <FaCheckCircle className="check-icon" />
                        Accessibility: Get help from anywhere - your home,
                        office, or hostel room.
                      </li>

                      <li>
                        <FaCheckCircle className="check-icon" />
                        Convenience: Save time on commuting and fit therapy into
                        your busy schedule.
                      </li>

                      <li>
                        <FaCheckCircle className="check-icon" />
                        Comfort: Engage in therapy from a space where you feel
                        safe and relaxed.
                      </li>

                      <li>
                        <FaCheckCircle className="check-icon" />
                        Same Quality Care: Experience the same evidence-based
                        approaches and expert clinicians as our in-person
                        sessions.
                      </li>

                      <li>
                        <FaCheckCircle className="check-icon" />
                        All you need is a stable internet connection and a
                        private space.
                      </li>
                    </ul>
                  </div>

                  {/* Right Content */}
                  <div className="therapy-image-box">
                    <img src="./online-therapy.jpg" alt="Online Therapy" />

                    <button
                      className="therapy-btn1"
                      onClick={() => navigate("/booking")}
                    >
                      Book Your Online Session Now
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/* -------------------------------director section-------------------------- */}
            <section className="directors-section">
              <h2 className="director-title">From Our Directors</h2>

              <div className="director-wrapper">
                {/* LEFT IMAGE */}
                <div className="director-image">
                  <img src="Dr.-naseen.jpg" alt="Dr. Naseem Ahmad" />
                </div>

                {/* RIGHT CONTENT */}
                <div className="director-content">
                  <h3 className="director-name">Dr. Naseem Ahmad</h3>
                  <h4 className="director-role">Founder & Clinical Director</h4>

                  <p className="director-qualification">
                    M.Phil Clinical Psychology (IHBAS) | Ph.D. Psychology
                    (University of Delhi)
                  </p>

                  <p className="director-license">
                    Licensed Clinical Psychologist – India, Maldives, & Qatar
                  </p>

                  <div className="director-quote">
                    <p>
                      “At DearMinds, we envision a world where mental health
                      support is not a privilege, but a right—accessible,
                      stigma-free, and culturally respectful. My journey across
                      clinical systems in India and internationally has shown me
                      that healing begins when a person feels heard without
                      judgment. DearMinds was created to offer that space,
                      backed by science, delivered with empathy.”
                    </p>
                  </div>
                </div>
              </div>

              {/* -------------------------------this is a director 2 section--------------------- */}
              <div className="director-wrapper reverse">
                <div className="director-content">
                  <h3 className="director-name">Ms. Nihaara Abdulla Jamal</h3>
                  <h4 className="director-role">
                    Co-founder & Director, Operations & Outreach
                  </h4>
                  <p className="director-qualification">
                    MBA (Entrepreneurship) | M.S. Clinical Psychology (IMU,
                    Malaysia)
                  </p>
                  <div className="director-quote">
                    <p>
                      “Mental well-being is deeply connected to how we live,
                      learn, and work. At DearMinds, we are building bridges:
                      between emotional health and daily life, between schools
                      and families, and between workplaces and empathy. From
                      Pune to the Maldives, our goal is to meet people where
                      they are—with kindness, clarity, and professionalism.”
                    </p>
                  </div>
                </div>

                <div className="director-image">
                  <img
                    className="director-nihaara"
                    src="nihara.jpg"
                    alt="Ms. Nihaara Abdulla Jamal"
                  />
                </div>
              </div>
              {/* -----------------------------------career section---------------------------------- */}
              <section className="career-section">
                <div className="container">
                  <h2 className="career-heading">
                    Work With Us at <br />
                    WELLBEING AND <br />
                    PSYCHOLOGICAL RESEARCH FOUNDATION
                  </h2>

                  <div className="career-content">
                    <div className="career-left">
                      <p className="career-para">
                        We welcome passionate, qualified mental health
                        professionals to join our mission. Open to:
                      </p>

                      <ul className="career-list">
                        <li>
                          <FaUser className="icon" />
                          Clinical Psychologists (RCI-licensed)
                        </li>

                        <li>
                          <FaBriefcase className="icon" />
                          School Counsellors & Trainers
                        </li>

                        <li>
                          <FaHeart className="icon" />
                          Therapists (CBT, trauma-focused, etc.)
                        </li>

                        <li>
                          <FaUserGraduate className="icon" />
                          Interns & Researchers
                        </li>
                      </ul>
                    </div>

                    <div className="career-right">
                      <p className="right-email">careers@dearmindsclinic.com</p>

                      <p className="right-contact">
                        Contact at DearMinds:
                        <br />
                        careers@dearmindsclinic.com
                      </p>

                      <button
                        className="apply-btn"
                        onClick={() => navigate("/contact")}
                      >
                        APPLY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default Home;
