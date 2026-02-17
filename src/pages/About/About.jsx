import React from "react";

const About = () => {
  return (
    <>
      <section className="About-banner">
        <h2>ABOUT US</h2>
      </section>

      <div className="About-story">
        <div className="About-container">
          <div className="About-content">
            <h2>
              Our Story: Why <span>DearMinds Exists</span>
            </h2>
            <p>
              In many homes, schools, and workplaces today, emotional struggles
              remain hidden. Children battle <br /> anxiety in silence. Teens
              lose motivation under pressure. Adults feel stuck between burnout
              and <br />
              responsibility. Many never reach out due to fear, stigma, or lack
              of access. <br /> DearMinds was born to bridge this gap. <br />{" "}
              Founded by a team of internationally licensed clinicians, we exist
              to make psychological care feel safe,
              <br /> approachable, and effective. We’re not just here to respond
              to crises—we’re here to nurture resilience, <br />
              build understanding, and walk beside you through life’s emotional
              journeys.
            </p>
          </div>
          <div className="About-image">
            <img src="./about-story.png" alt="" />
          </div>
        </div>
      </div>

      {/* --------------------------------misiion-vision------------------------------------------- */}

      <section className="mv-section">
        <div className="mv-container">
          {/* LEFT IMAGE */}
          <div className="mv-image">
            <img src="./mission-vision.webp" alt="" />
          </div>

          {/* ------------------------------------------------vision content-------------------------------------- */}
          <div className="mv-content">
            <h2>
              Our <span>Vision</span>
            </h2>
            <p>
              " To create a society where mental health is prioritized, and no
              individual or institution is held back by stigma, shame, or
              silence.
            </p>
            <h4>We envision a world where:</h4>
            <ul>
              <li>Children can talk about emotions without fear</li>
              <li>Schools embed mental wellness into their ecosystem</li>
              <li>Workplaces foster compassion, not just productivity</li>
              <li>Mental health support is a basic right, not a privilege</li>
            </ul>
          </div>

          {/* ---------------------------------------mision content----------------------------------- */}
          <div className="mv-content">
            <h2>
              Our <span>Mission</span>
            </h2>

            <p>At DearMinds, our mission is to:</p>

            <ul>
              <li>
                Deliver{" "}
                <strong>high-quality, personalized psychological care</strong>{" "}
                for individuals across all life stages
              </li>
              <li>
                Empower <strong>schools</strong> to create emotionally safe,
                inclusive, and mentally healthy classrooms
              </li>
              <li>
                Partner with <strong>organizations</strong> to build emotionally
                intelligent, resilient teams
              </li>
              <li>
                Advocate for a culture where seeking support is{" "}
                <strong>normalized and respected</strong>
              </li>
            </ul>
            <p>
              We integrate compassion with clinical expertise to provide not
              just therapy—but transformation.
            </p>
          </div>
        </div>
      </section>

      {/* -----------------------------------------team section-------------------------------------------    */}
      <section className="team-section">
        <h2 className="team-heading">
          Meet the Minds Behind <span>DearMinds</span>
        </h2>

        <div className="team-container">
          {/* Card 1 */}
          <div className="team-card">
            <img src="./team1.jpg" alt="" />

            <div className="team-info">
              <h3>DR. NASEEM AHMAD</h3>
              <p>M.PHIL CLINICAL PSYCHOLOGY | PH.D PSYCHOLOGY</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="team-card">
            <img src="./team2.jpg" alt="" />

            <div className="team-info">
              <h3>MS. NIHAARA ABDULLA JAMAL</h3>
              <p>MBA | M.S CLINICAL PSYCHOLOGY</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="team-card">
            <img src="./team3.jpg" alt="" />

            <div className="team-info">
              <h3>MS. SANCHITA</h3>
              <p>MA PSYCHOLOGY | Ph.D (On-going)</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="team-card">
            <img src="./team4.jpg" alt="" />

            <div className="team-info">
              <h3>DR. RAM MOHAN GURJAR</h3>
              <p>NEUROPSYCHIATRIST MD PSYCHIATRY</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
