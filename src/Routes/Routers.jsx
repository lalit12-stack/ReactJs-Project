import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Maldives from "../pages/Maldives/Maldives";
import Service from "../pages/Service/Service";
import Booking from "../pages/Booking/Booking";
import BookingList from "../pages/Booking/BookingList";

import AdminLogin from "../pages/Admin/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";

import CorporateProgram from "../Services/Corporate_program";
import School_program from "../Services/School_program";
import Phychological from "../Services/Phychological";
import Indivisual_therapy from "../Services/Indivisual_therapy";
import Group_therapy from "../Services/Group_therapy";
import Parental_training from "../Services/Parental_training";
import Family_therapy from "../Services/Family_therapy";
import Clinic_service from "../Services/Clinic_service";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// ✅ User Panel
import UserLayout from "../layout/UserLayout";
import UserDashboard from "../pages/UserPanel/UserDashboard";
import UserProfile from "../pages/UserPanel/UserProfile";
import UserBookings from "../pages/UserPanel/UserBookings";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🌍 Public Website Routes */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/maldives" element={<Maldives />} />
                <Route path="/service" element={<Service />} />

                <Route
                  path="/corporate_program"
                  element={<CorporateProgram />}
                />
                <Route path="/schoolProgram" element={<School_program />} />
                <Route path="/phychological" element={<Phychological />} />
                <Route path="/indivisual" element={<Indivisual_therapy />} />
                <Route path="/grouptherapy" element={<Group_therapy />} />
                <Route
                  path="/parentaltherapy"
                  element={<Parental_training />}
                />
                <Route path="/Family_therapy" element={<Family_therapy />} />
                <Route path="/CLINIC_SERVICES" element={<Clinic_service />} />

                <Route path="/booking" element={<Booking />} />
                <Route path="/bookings" element={<BookingList />} />

                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* 👤 User Panel Routes (No Header/Footer) */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="bookings" element={<UserBookings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
