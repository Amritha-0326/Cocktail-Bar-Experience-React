// src/components/layout/Navbar.jsx
import { Link } from "react-router-dom";
import "../../styles/global.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
      </ul>
    </nav>
  );
}
