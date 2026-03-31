import { Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./Home"; // Import the new Home page
import CreativeDetail from "./pages/CreativeDetail"; 
import ParadigmDetail from "./pages/ParadigmDetail";
import EnlightenmentDetail from "./pages/EnlightenmentDetail";
import VersionDetail from "./pages/VersionDetail";
import MissionDetail from "./pages/MissionDetail";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreativeDetail" element={<CreativeDetail />} />
        <Route path="/ParadigmDetail" element={<ParadigmDetail />} />
        <Route path="/EnlightenmentDetail" element={<EnlightenmentDetail />} />
        <Route path="/VersionDetail" element={<VersionDetail />} />
        <Route path="/MissionDetail" element={<MissionDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}
