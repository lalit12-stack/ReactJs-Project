import React from "react";

const Family_therapy = () => {
  return (
    <>
      <section className="Family-banner">
        <h2>FAMILY THERAPY</h2>
      </section>

      <div className="family-section">
        {/* LEFT SIDE */}
        <div className="family-left">
          <img src="./family-therapy.jpg" alt="" className="family-image" />

          <h2>
            What is <span>family therapy?</span>
          </h2>

          <p>
            Family therapy is a specialized form of psychotherapy that addresses
            the dynamics, communication patterns, and emotional needs within a
            family unit. It’s ideal for families experiencing conflict,
            parenting struggles, grief, behavioral concerns, or adjustment
            issues.
          </p>

          <h3>
            What Happens in <span>a Session?</span>
          </h3>

          <ul className="family-list">
            <li>Family members meet together with the therapist</li>
            <li>
              Sessions explore how individual behaviors affect the family system
            </li>
            <li>
              Goals include improving communication, resolving conflict, and
              fostering emotional connection
            </li>
            <li>
              The therapist facilitates open dialogue, guides conflict
              resolution, and promotes healthier relationships
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="family-right">
          <h2 className="form-title">Connect With Us</h2>

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

            <button type="submit">Contact Us</button>
          </form>
        </div>
      </div>

      <section class="family-therapy">
        <div class="container">
          <div class="left">
            <img src="./common-reason.webp" alt="" />
          </div>

          <div class="right">
            <h2>Common Reasons for Family Therapy</h2>

            <ul class="custom-list">
              <li>Parent-child conflict</li>
              <li>Divorce, remarriage, or blended family adjustments</li>
              <li>Sibling rivalry or behavioral concerns</li>
              <li>Communication breakdowns</li>
              <li>Coping with illness, trauma, or loss</li>
              <li>Cultural or generational clashes</li>
            </ul>

            <h2>Approaches to Family Therapy</h2>

            <ul class="custom-list">
              <li>Structural Family Therapy</li>
              <li>Systemic Therapy</li>
              <li>Emotionally Focused Family Therapy</li>
              <li>Psychoeducation for neurodiverse families</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Family_therapy;
