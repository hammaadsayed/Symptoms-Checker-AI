import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* ================= FOOTER BRAND ================= */}
        <div className="footer-brand">

          <Link
            to="/"
            className="footer-logo"
            aria-label="SymptomsAI Home"
          >
            <span
              className="logo-icon"
              aria-hidden="true"
            >
              ✚
            </span>

            <span>
              Symptoms<span>AI</span>
            </span>
          </Link>

          <p>
            An AI-assisted platform designed to help users explore symptom
            information in a simple and structured way.
          </p>

        </div>

        {/* ================= FOOTER LINKS ================= */}
        <div className="footer-links">

          <div>
            <h4>Explore</h4>

            <Link to="/">
              Home
            </Link>

            <Link to="/checker">
              Symptom Checker
            </Link>

            <Link to="/how-it-works">
              How It Works
            </Link>
          </div>

          <div>
            <h4>Information</h4>

            <Link to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>
          </div>

        </div>

      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="container footer-bottom">

        <p>
          © 2026 SymptomsAI. All rights reserved.
        </p>

        <p className="footer-disclaimer">
          For informational purposes only. Not a substitute for professional
          medical advice.
        </p>

      </div>

    </footer>
  );
}

export default Footer;