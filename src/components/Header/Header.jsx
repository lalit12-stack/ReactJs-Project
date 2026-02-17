import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      {/* LOGO */}
      <div className="logo">
        <img src="dearMinds-Logo.png" alt="DearMinds Logo" />
      </div>

      {/* NAV */}
      <nav className="nav">
        <Link to="/Home">HOME</Link>
        <Link to="/About">ABOUT US</Link>

        {/* OUR SERVICES DROPDOWN */}
        <div className="dropdown">
          <span className="drop-link">OUR SERVICES</span>

          {/* FIRST DROPDOWN */}
          <div className="dropdown-menu">
            <div className="dropdown-sub">
              <span>
                CLINIC SERVICES
                <span className="arrow">›</span>
              </span>

              {/* SECOND (NESTED) DROPDOWN */}
              <div className="dropdown-submenu">
                <Link to="/assessment">PSYCHOLOGICAL ASSESSMENTS</Link>
                <Link to="/individual-care">INDIVIDUAL THERAPY</Link>
                <Link to="/group-therapy">GROUP THERAPY</Link>
                <Link to="/parental-training">PARENTAL SKILLS TRAINING</Link>
                <Link to="/family-therapy">FAMILY THERAPY</Link>
              </div>
            </div>

            <Link to="/school-mental-health">SCHOOL MENTAL HEALTH PROGRAM</Link>
            <Link to="/corporate-mental-health">
              CORPORATE MENTAL HEALTH PROGRAM
            </Link>
          </div>
        </div>

        <Link to="/Maldives">DEARMINDS MALDIVES</Link>
        <Link to="/Contact">CONTACT US</Link>
      </nav>

      {/* BUTTON */}
      <div className="nav-btn">
        <button>Book Appointment</button>
      </div>
    </header>
  );
};

export default Header;
