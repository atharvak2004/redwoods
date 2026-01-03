import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import TransactionPage from "./pages/TransactionPage.jsx";
import BusinessPage from "./pages/BusinessPage.jsx";
import RealEstateAdvisory from "./pages/RealEstateAdvisory.jsx";
import RenewableEnergy from "./pages/RenewableEnergy.jsx";
import HeritageHospitality from "./pages/HeritageHospitality.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/business/real-estate-advisory" element={<RealEstateAdvisory />} />
        <Route path="/business/renewable-energy" element={<RenewableEnergy />} />
        <Route path="/business/heritage-hospitality" element={<HeritageHospitality />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
