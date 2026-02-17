import React from "react";

const Group_therapy = () => {
  return (
    <>
      <section className="Family-banner">
        <h2>GROUP THERAPY</h2>
      </section>

      <section class="group-section">
        <div class="group-container">
          <div class="group-left">
            <img src="./group-therapy.jpg" alt=" " class="group-image" />

            <h2 class="heading">
              What is <span>Group Therapy?</span>
            </h2>

            <p class="text">
              Group therapy brings together individuals experiencing similar
              emotional, psychological, or interpersonal challenges in a safe,
              structured setting led by a trained therapist. It provides a
              powerful space to connect, reflect, and grow with others, offering
              mutual support, insight, and a sense of belonging.
            </p>

            <h3 class="sub-heading">
              What Happens in a <span>Group Session?</span>
            </h3>

            <ul class="styled-list">
              <li>
                A small group (usually 6–10 members) meets with one or two
                therapists.
              </li>
              <li>
                Sessions focus on open dialogue, emotional expression, and
                learning from shared experiences.
              </li>
              <li>
                Group members listen, give feedback, and support each other’s
                progress under professional guidance.
              </li>
              <li>
                Confidentiality, respect, and emotional safety are core values.
              </li>
            </ul>

            <p class="text">
              Group therapy may focus on topics such as anxiety, grief,
              self-esteem, interpersonal skills, trauma recovery, or stress
              management.
            </p>
          </div>

          <div class="group-right">
            <div class="form-card">
              <h2 class="form-heading">Connect With Us</h2>

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
                <textarea rows="4"></textarea>

                <button type="submit">Book Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------Group therapy 3 ------------------------------------------- */}
      <section class="group-therapy-section">
        <div class="container">
          <div class="left">
            <img src="./group-therapy2.webp" alt=" " />
          </div>

          <div class="right">
            <h2>Why Choose Group Therapy?</h2>

            <ul class="therapy-list">
              <li>Feel less alone in your struggles</li>
              <li>Develop social and communication skills</li>
              <li>Gain diverse perspectives and feedback</li>
              <li>Build accountability and motivation</li>
              <li>Learn from shared experiences</li>
              <li>Practice empathy and self-awareness in real time</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Group_therapy;
