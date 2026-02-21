import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      {/* LOGO */}
      <Link to="/">
        <img src="/dearMinds-Logo.png" alt="Logo" className="logo" />
      </Link>

      {/* NAV */}
      <nav className="nav">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>

        {/* OUR SERVICES DROPDOWN */}
        <div className="dropdown">
          <span className="drop-link">OUR SERVICES</span>

          {/* FIRST DROPDOWN */}
          <div className="dropdown-menu">
            <div className="dropdown-sub">
              <Link to="/CLINIC_SERVICES">
                CLINIC SERVICES
                <span className="arrow">›</span>
              </Link>

              {/* SECOND (NESTED) DROPDOWN */}
              <div className="dropdown-submenu">
                <Link to="/phychological">PSYCHOLOGICAL ASSESSMENTS</Link>
                <Link to="/indivisual">INDIVIDUAL THERAPY</Link>
                <Link to="/grouptherapy">GROUP THERAPY</Link>
                <Link to="/parentaltherapy">PARENTAL SKILLS TRAINING</Link>
                <Link to="/Family_therapy">FAMILY THERAPY</Link>
              </div>
            </div>

            <Link to="/schoolProgram">SCHOOL MENTAL HEALTH PROGRAM</Link>
            <Link to="/corporate_program">CORPORATE MENTAL HEALTH PROGRAM</Link>
          </div>
        </div>

        <Link to="/maldives">DEARMINDS MALDIVES</Link>
        <Link to="/contact">CONTACT US</Link>
      </nav>

      {/* BUTTON */}
      <div className="nav-btn">
        <button onClick={() => navigate("/booking")} className="book-btn">
          Book Appointment
        </button>
      </div>
    </header>
  );
};

export default Header;
