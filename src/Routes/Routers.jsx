import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Maldives from "../pages/Maldives/Maldives";
import Service from "../pages/Service/Service";

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

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/maldives" element={<Maldives />} />
        <Route path="/service" element={<Service />} />

        <Route path="/corporate_program" element={<CorporateProgram />} />
        <Route path="/schoolProgram" element={<School_program />} />
        <Route path="/phychological" element={<Phychological />} />
        <Route path="/indivisual" element={<Indivisual_therapy />} />
        <Route path="/grouptherapy" element={<Group_therapy />} />
        <Route path="/parentaltherapy" element={<Parental_training />} />
        <Route path="/Family_therapy" element={<Family_therapy />} />
        <Route path="/Clinic_service" element={<Clinic_service />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
