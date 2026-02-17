import React from "react";

const Parental_training = () => {
  return (
    <>
      <section className="parental-banner">
        <h2>PARENTAL TRAINING</h2>
      </section>

      <section class="parental-section">
        <div class="container">
          <div class="left-content">
            <div class="image-wrapper">
              <img src="./parents-training.jpg" alt=" " />
            </div>

            <h2>
              What is <span>parental training?</span>
            </h2>

            <p>
              Parenting can be rewarding—but also overwhelming. Our Parental
              Skills Training provides a structured space for parents and
              caregivers to learn how to better understand, respond to, and
              support their children’s emotional and behavioral needs. It’s
              especially helpful for families with children dealing with
              neurodevelopmental, emotional, or behavioral concerns.
            </p>

            <h2>Approach</h2>

            <ul class="approach-list">
              <li>Parent-Child Interaction Therapy (PCIT)</li>
              <li>Collaborative & Proactive Solutions (CPS)</li>
              <li>Mindful Parenting Techniques</li>
              <li>Behavior Management Training</li>
            </ul>
          </div>

          <div class="therapy-right">
            <h2>Connect With Us</h2>

            <form class="therapy-form">
              <label>Name *</label>
              <input type="text" />

              <label>Phone Number *</label>
              <input type="tel" />

              <label>Email Address</label>
              <input type="email" />

              <label>Date</label>
              <input type="date" />

              <label>Time</label>
              <input type="time" />

              <label>Message</label>
              <textarea></textarea>

              <button type="submit">Contact Us</button>
            </form>
          </div>
        </div>
      </section>

      {/* --------------------------------------parental section---------------------------------------------- */}

      <section class="learn-section">
        <div class="learn-container">
          <div class="learn-image">
            <img src="./therapy-learn.jpg" alt="" />
          </div>

          <div class="learn-content">
            <h2>
              What You <span>Will Learn?</span>
            </h2>

            <ul class="learn-list">
              <li>
                Effective communication and positive discipline strategies
              </li>
              <li>Emotion coaching and regulation support</li>
              <li>Exploring emotions, thought patterns, and behavior</li>
              <li>Managing tantrums, aggression, or withdrawal</li>
              <li>Parenting neurodiverse children (ADHD, ASD, etc.)</li>
              <li>Handling transitions (school changes, divorce, grief)</li>
              <li>Fostering independence and emotional resilience</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="benefit-section">
        <div class="benefit-container">
          <div class="benefit-content">
            <h2>
              Who Can <span>Benefit?</span>
            </h2>

            <ul class="benefit-list">
              <li>Parents of toddlers, school-aged children, or teens</li>
              <li>New or expecting parents</li>
              <li>Foster or adoptive families</li>
              <li>Parents of children with special needs</li>
              <li>Grandparents or caregivers in co-parenting roles</li>
            </ul>
          </div>

          <div class="benefit-image">
            <img src="./benefits-pt.webp" alt=" " />
          </div>
        </div>
      </section>
    </>
  );
};

export default Parental_training;
