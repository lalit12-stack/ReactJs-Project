import { Outlet, Link, useNavigate } from "react-router-dom";
import "./UserDashboard.css";

const UserLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userToken");
    navigate("/user-login");
  };

  return (
    <div className="user-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>User Panel</h2>

        <Link to="/user-dashboard">Dashboard</Link>
        <Link to="/user-profile">Profile</Link>
        <Link to="/user-bookings">My Bookings</Link>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
