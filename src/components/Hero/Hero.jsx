import React from "react";
import { Brain, Mail, MessageCircle, Phone, CheckCircle } from "lucide-react";
// import { img2 } from "./assets/img/clinic2.jpg";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <section className="hero">
        <h2 className="hero-title">
          Healing Begins with <span>being heard</span>
        </h2>

        <div className="hero-action">
          <button className="primary">REFER A SCHOOL</button>
          <button className="outline">REFER A ORGANISATION</button>
          <button className="outline">CONTACT US</button>
        </div>

        <section className="hero-content">
          <h2>Welcome to DearMinds</h2>
          <p>
            At DearMinds, we believe that mental health is more than the absence
            of illness—it’s the foundation for living
            <br />
            fully, learning with curiosity, and working with purpose.
          </p>
          <p>
            Rooted in science and guided by compassion, we provide confidential,
            evidence-based psychological services
            <br />
            for individuals, schools, and organizations in India and the
            Maldives.
          </p>
          <p>
            No judgment. No labels. Just a safe space to understand yourself,
            heal, and grow.
          </p>
          {/* -----------------------------Hero Services------------------------------- */}
          <section className="hero-Service">
            <h1 className="service-title">Our Core Services</h1>

            <div className="service-cards">
              {/* CARD 1 */}
              <div className="Service-Card">
                <div className="service-header">
                  <div className="service-icon">
                    <Brain size={30} color="#fff" />
                  </div>
                  <h3>Clinic Services</h3>
                </div>

                <p className="service-desc">
                  Personalized mental health support for children, adolescents,
                  and adults:
                </p>

                <ul className="service-list">
                  <li>
                    {" "}
                    <CheckCircle className="icon" />
                    Psychological Assessments
                  </li>
                  <li>
                    {" "}
                    <CheckCircle className="icon" />
                    Counselling & Psychotherapy
                  </li>
                  <li>
                    {" "}
                    <CheckCircle className="icon" />
                    Anxiety, Depression, Trauma, Grief
                  </li>
                  <li>
                    {" "}
                    <CheckCircle className="icon" />
                    Relationship Stress & Burnout
                  </li>
                </ul>

                <button className="service-btn">Explore Clinic Services</button>
              </div>

              {/* CARD 2 */}
              <div className="Service-Card">
                <div className="service-header">
                  <div className="service-icon">
                    <span>🏫</span>
                  </div>
                  <h3>School Mental Health Program</h3>
                </div>

                <p className="service-desc">
                  Helping students thrive academically, socially, and
                  emotionally:
                </p>

                <ul className="service-list">
                  <li>
                    {" "}
                    <CheckCircle className="icon" />
                    Student mental health check-ins
                  </li>
                  <li>
                    {" "}
                    <CheckCircle className="icon" />
                    Teacher & parent sensitization
                  </li>
                  <li>
                    {" "}
                    <CheckCircle className="icon" />
                    Peer mental health advocacy
                  </li>
                  <li>
                    {" "}
                    <CheckCircle className="icon" />
                    Support for coaching students
                  </li>
                </ul>

                <button className="service-btn">
                  Learn about School Programs
                </button>
              </div>

              {/* CARD 3 */}
              <div className="Service-Card">
                <div className="service-header">
                  <div className="service-icon">
                    <span>👔</span>
                  </div>
                  <h3>Corporate Mental Health Program</h3>
                </div>

                <p className="service-desc">
                  Creating workplaces that are emotionally intelligent and
                  resilient:
                </p>

                <ul className="service-list">
                  <li>
                    <CheckCircle className="icon" />
                    Employee Assistance Programs
                  </li>
                  <li>
                    {" "}
                    <CheckCircle className="icon" />
                    Stress & wellness workshops
                  </li>
                  <li>
                    {" "}
                    <CheckCircle className="icon" />
                    Leadership & manager coaching
                  </li>
                  <li>
                    {" "}
                    <CheckCircle className="icon" />
                    Crisis support & audits
                  </li>
                </ul>

                <button className="service-btn">Explore more about it</button>
              </div>
            </div>
          </section>
          {/*----------------------------------- more Services Training & workshop-------------------------------- */}
          .
          <div className="training">
            <div className="training-wrapper">
              <div className="training-card">
                <img className="training-img" src="./clinic2.jpg" alt="" />

                <div className="training-content">
                  <h3>Clinical Supervision & Training</h3>
                  <p className="training-para">
                    We support the supporters. DearMinds is committed to
                    nurturing the next generation of mental health
                    professionals. We offer confidential, affordable supervision
                    to help you grow in your practice.
                  </p>

                  <ul className="training-list">
                    <li>
                      <span>Individual Clinical Supervision:</span> One-on-one
                      guidance for psychologists, counselors, and therapists.
                    </li>
                    <li>
                      <span>Group Supervision:</span> Learn collaboratively with
                      peers in a small group setting.
                    </li>
                    <li>
                      <span>Case Consultations:</span> Get expert insights on
                      specific client challenges.
                    </li>
                    <li>
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
                      Individual Clinical Supervision: One-on-one guidance for
                      psychologists, counselors, and therapists.
                    </li>
                    <li>For Parents and caregivers</li>
                    <li>
                      What you’ll learn: Strategies to support your child’s
                      unique needs, manage big emotions, and strengthen your
                      connection.
                    </li>
                    <li>Upcoming Workshops</li>
                  </ul>

                  <button className="workshop-button">
                    To Know More Workshops
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------cummunity-------------------------------------------- */}
          <section className="community-section">
            <div className="community-title">
              <h3>Community Support & Partnerships</h3>
            </div>
            <p className="community-desc">
              Believing in accessible care for all. We are dedicated to making
              mental wellness support available to every community{" "}
              <b>Read more..</b>
            </p>

            <div className="community-cards">
              {/* Card 1 */}
              <div className="community-card">
                <div className="community-card-header">
                  <div className="cummunity-card-icon">
                    <Brain size={30} color="#fff" />
                  </div>
                  <h3 className="community-card-title">Financial Aid</h3>
                </div>
                <p className="community-card-text">
                  We partner with universities and colleges to provide on-campus
                  counselling services, workshops, and clinical training for
                  students.
                </p>
                <button className="community-card-btn">Read More</button>
              </div>

              {/* -----card2---------------- */}
              <div className="community-card">
                <div className="community-card-header">
                  <div className="community-card-icon">
                    <Brain size={30} color="#fff" />
                  </div>
                  <h3 className="community-card-title">
                    Academic Collaborations
                  </h3>
                </div>
                <p className="community-card-text">
                  We partner with universities and colleges to provide on-campus
                  counselling, workshops, and clinical training for students.
                </p>
                <button className="community-card-btn">Read More</button>
              </div>

              {/* Card 3 */}
              <div className="community-card">
                <div className="community-card-header">
                  <div className="service-icon">
                    <Brain size={30} color="#fff" />
                  </div>
                  <h3 className="community-card-title">
                    Self-Assessment Tools
                  </h3>
                </div>
                <p className="community-card-text">
                  Explore our curated library of free, anonymous
                  self-assessments to better understand your well-being.
                </p>
                <button className="community-card-btn">Read More</button>
              </div>
            </div>
          </section>
          {/* ----------------------------------  maldives section-------------------------------  */}
          <div className="maldives-section">
            <div className="maldives-wrapper">
              <div className="maldives-content">
                <h2>DearMinds Maldives</h2>
                <p>
                  We are now extending our care to the Maldivian community
                  through online services and soon, a local <br /> clinic:
                </p>

                <ul>
                  <li>
                    Online therapy & assessments for individuals, couples, and
                    families
                  </li>
                  <li>School and corporate mental health programs</li>
                  <li>Multilingual, culturally attuned care</li>
                </ul>

                <div className="maldives-contact">
                  <span>
                    <Mail size={18} />
                    contact@dearmindsclinic.com
                  </span>
                  <span>
                    <MessageCircle size={18} />
                    +91 95189 55652
                  </span>
                  <span>
                    <Phone size={18} />
                    +960 932 5735
                  </span>
                </div>
                <div className="maldives-btn">
                  <button>Discover DearMinds Maldives</button>
                </div>
                <div className="maldives-image">
                  <img src="maldives.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/*---------------------------------------- ---------------------------therapy---------------------------------- */}
          <section className="therapy-section">
            <div className="therapy-wrapper">
              <h1 className="therapy-title">Online Therapy</h1>

              <p className="therapy-desc">
                We believe everyone deserves access to quality mental health
                care, no matter where you are. DearMinds offers secure,
                confidential, and effective online therapy sessions for clients
                across India and the Maldives.
              </p>

              <div className="therapy-card">
                {/* Left Content */}
                <div className="therapy-list">
                  <ul>
                    <li>
                      Accessibility: Get help from anywhere - your home, office,
                      or hostel room.
                    </li>

                    <li>
                      Convenience: Save time on commuting and fit therapy into
                      your busy schedule.
                    </li>

                    <li>
                      Comfort: Engage in therapy from a space where you feel
                      safe and relaxed.
                    </li>

                    <li>
                      Same Quality Care: Experience the same evidence-based
                      approaches and expert clinicians as our in-person
                      sessions.
                    </li>

                    <li>
                      All you need is a stable internet connection and a private
                      space.
                    </li>
                  </ul>
                </div>

                {/* Right Content */}
                <div className="therapy-image-box">
                  <img src="./online-therapy.jpg" alt="Online Therapy" />

                  <button className="therapy-btn">
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
                    judgment. DearMinds was created to offer that space, backed
                    by science, delivered with empathy.”
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
                    between emotional health and daily life, between schools and
                    families, and between workplaces and empathy. From Pune to
                    the Maldives, our goal is to meet people where they are—with
                    kindness, clarity, and professionalism.”
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
            <div className="career-section">
              <div className="career-wrapper">
                <div className="career-title">
                  <h2>
                    Work With Us at WELLBEING AND <br /> PSYCHOLOGICAL RESEARCH{" "}
                    <br />
                    FOUNDATION
                  </h2>
                </div>
                {/* -------------------------career content--------------------------------- */}
                <div className="career-content">
                  <div className="career-card">
                    <p>
                      We welcome passionate, qualified mental health <br />
                      professionals to join our mission. Open to:
                    </p>

                    <ul className="career-list">
                      <li>Clinical Psychologists (RCI-licensed)</li>
                      <li>School Counsellors & Trainers</li>
                      <li>Therapists (CBT, trauma-focused, etc.)</li>
                      <li>Interns & Researchers</li>
                    </ul>
                    {/* <div className="career-content-right">
                      <h3>careers@dearmindsclinic.com</h3>
                      <p>
                        Contact at DearMinds: <br />
                        <span>careers@dearmindsclinic.com</span>
                      </p>
                      <button>APPLY NOW</button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Hero;
