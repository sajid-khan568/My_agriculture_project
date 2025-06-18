import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        {/* Logo / Brand Name - Responsive Text */}
        <Link
          className="navbar-brand fw-bold text-wrap"
          style={{ whiteSpace: "normal", maxWidth: "200px" }}
          to="/"
        >
          🌾 Gour krashi seva kendra
        </Link>

        {/* Hamburger Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
