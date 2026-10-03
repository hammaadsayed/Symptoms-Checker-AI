import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* =========================================
            LOGO
        ========================================= */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="SymptomsAI Home"
        >
          <span className="logo-icon">✚</span>

          <span className="logo-text">
            Symptoms<span>AI</span>
          </span>
        </Link>

        {/* =========================================
            NAVIGATION
        ========================================= */}

        <nav
          className={`navbar-menu ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/checker"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Symptom Checker
          </NavLink>

          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            How It Works
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          {/* Mobile CTA */}

          <Link
            to="/checker"
            className="navbar-mobile-button"
            onClick={closeMenu}
          >
            Start Checking
            <span>→</span>
          </Link>
        </nav>

        {/* =========================================
            DESKTOP CTA
        ========================================= */}

        <Link
          to="/checker"
          className="navbar-button"
          onClick={closeMenu}
        >
          Start Checking
          <span>→</span>
        </Link>

        {/* =========================================
            MOBILE MENU BUTTON
        ========================================= */}

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;