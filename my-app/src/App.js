import { useState } from 'react'
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservaions"
import './App.css'
import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
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
    </Routes>
    </>
  )
}

export default App