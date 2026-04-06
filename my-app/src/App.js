
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations"
import VIPMembership from "./pages/VIPMembership";
import './App.css'
import "./styles/global.css";
import {useLocation, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("fade-out");
  }, [location]);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/vip" element={<VIPMembership />} />
    </Routes>
    </>
  )
}

export default App