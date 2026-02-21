import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Indivisual_therapy = () => {
  return (
    <>
      <section className="indivisual-banner">
        <h2>INDIVISUAL THERAPY</h2>
      </section>
      <section class="therapy-section">
        <div class="therapy-container">
          <div class="therapy-left">
            <img
              src="./individual-therapy.webp"
              alt="Therapy Session"
              class="therapy-img"
            />

            <h2>
              What is <span>Individual Therapy?</span>
            </h2>

            <p>
              Individual therapy is a collaborative and confidential process
              where you meet one-on-one with a qualified mental health
              professional to explore your inner world—your thoughts, emotions,
              behaviors, and personal challenges.
            </p>

            <p>
              Whether you're navigating anxiety, depression, trauma, stress, or
              personal growth, therapy helps you build insight, emotional
              strength, and healthier coping strategies.
            </p>
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

      {/* ------------------------------------------------therapy session-------------------------------------------------------------- */}
      <section class="therapy-session3">
        <div class="therapy-session-container3">
          <div class="therapy-session-img">
            <img src="./therapy-session2.webp" alt="" />
          </div>

          <div class="therapy-session-content3">
            <h2>What Happens in a Therapy Session?</h2>

            <p>
              Each session is designed to be a safe, compassionate, and
              judgment-free space where your story is heard and held with
              respect. Here's what to expect:
            </p>

            <ul class="therapy-list3">
              <li>
                You speak with your therapist in a private, supportive setting
                (in-person or online).
              </li>
              <li>
                The therapist listens actively and offers empathy, validation,
                and psychological insight.
              </li>
              <li>
                Together, you explore your experiences, emotions, thought
                patterns, and behavior.
              </li>
              <li>
                The focus is on building self-awareness and discovering new,
                more helpful perspectives.
              </li>
              <li>
                Based on your goals, your therapist may introduce evidence-based
                strategies.
              </li>
              <li>
                Therapy moves at your pace, and no topic is too big or small.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="therapy-section2">
        <div class="therapy-card2">
          <div class="therapy-content2">
            <h2>Goals of Individual Therapy</h2>

            <ul class="therapy-list2">
              <li>
                <FaCheckCircle className="check-icon" />
                Understand and process complex emotions
              </li>
              <li>
                <FaCheckCircle className="check-icon" />
                Learn healthier coping skills
              </li>
              <li>
                <FaCheckCircle className="check-icon" />
                Improve communication and relationships
              </li>
              <li>
                <FaCheckCircle className="check-icon" />
                Manage stress, anxiety, depression, and trauma
              </li>
              <li>
                <FaCheckCircle className="check-icon" />
                Build self-esteem and emotional resilience
              </li>
              <li>
                <FaCheckCircle className="check-icon" />
                Therapy moves at your pace
              </li>
              <li>
                <FaCheckCircle className="check-icon" />
                Gain clarity during life transitions
              </li>

              <li>
                {" "}
                <FaCheckCircle className="check-icon" />
                Support healing from past experiences
              </li>
            </ul>
          </div>

          <div class="therapy-image">
            <img src="./therapy-goal.jpg" alt="" />
          </div>
        </div>
      </section>

      <section class="approach-section">
        <div class="approach-container">
          <div class="approach-image">
            <img src="./therapy-approach.webp" alt="" />
          </div>

          <div class="approach-content">
            <h2>Our Approach</h2>

            <p class="approach-intro">
              At DearMinds, our therapists are trained in a range of therapeutic
              modalities, including:
            </p>

            <ul class="approach-list">
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Psychodynamic Therapy</li>
              <li>Mindfulness-Based Approaches</li>
              <li>Solution-Focused Therapy</li>
              <li>Trauma-Informed Care</li>
              <li>Humanistic and Integrative Methods</li>
            </ul>

            <p class="approach-footer">
              Each therapy journey is tailored to your unique needs, with the
              aim of creating real, lasting change.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Indivisual_therapy;
