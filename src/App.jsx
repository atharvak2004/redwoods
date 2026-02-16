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
import RealEstateDevelopment from "./pages/RealEstateDevelopment.jsx";
import RealEstateServices from "./pages/RealEstateServices.jsx";
import KhodriSolar from "./pages/KhodriSolar.jsx";
import DadajalalpurSolar from "./pages/DadajalalpurSolar.jsx";
import DhakraniSolar from "./pages/DhakraniSolar.jsx";
import BarsanaMahal from "./pages/BarsanaMahal.jsx";
import ShuklaTalab from "./pages/ShuklaTalab.jsx";
import PilibhitHouse from "./pages/PilibhitHouse.jsx";

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
        <Route path="/real-estate/development" element={<RealEstateDevelopment />} />
        <Route path="/real-estate/advisory" element={<RealEstateServices />} />
        <Route path="/renewable-energy/khodri-solar" element={<KhodriSolar />} />
        <Route path="/renewable-energy/dadajalalpur-solar" element={<DadajalalpurSolar />} />
        <Route path="/renewable-energy/dhakrani-solar" element={<DhakraniSolar />} />
        <Route path="/heritage-hospitality/barsana-mahal" element={<BarsanaMahal />} />
        <Route path="/heritage-hospitality/shukla-talab" element={<ShuklaTalab />} />
        <Route path="/heritage-hospitality/pilibhit-house" element={<PilibhitHouse />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
