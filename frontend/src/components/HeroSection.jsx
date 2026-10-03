import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {/* Background decorative shapes */}
      <div
        className="hero-background-shape hero-shape-one"
        aria-hidden="true"
      ></div>

      <div
        className="hero-background-shape hero-shape-two"
        aria-hidden="true"
      ></div>

      <div className="container hero-container">

        {/* ================= HERO CONTENT ================= */}
        <div className="hero-content">

          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true"></span>
            AI-Powered Health Information
          </div>

          <h1 id="hero-title" className="hero-title">
            Understand Your Symptoms
            <span> With AI Assistance</span>
          </h1>

          <p className="hero-description">
            Enter your symptoms and receive structured, easy-to-understand
            health information powered by artificial intelligence.
          </p>

          {/* Hero Actions */}
          <div className="hero-actions">
            <Link
              to="/checker"
              className="hero-primary-button"
            >
              <span>Start Symptom Check</span>
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/how-it-works"
              className="hero-secondary-button"
            >
              How It Works
            </Link>
          </div>

          {/* Trust Points */}
          <div className="hero-trust">
            <div className="trust-item">
              <span aria-hidden="true">✓</span>
              <span>Easy to use</span>
            </div>

            <div className="trust-item">
              <span aria-hidden="true">✓</span>
              <span>AI-assisted</span>
            </div>

            <div className="trust-item">
              <span aria-hidden="true">✓</span>
              <span>Structured results</span>
            </div>
          </div>
        </div>

        {/* ================= HERO VISUAL ================= */}
        <div className="hero-visual">

          {/* Main AI Card */}
          <div className="hero-card">

            <div className="hero-card-top">

              <div
                className="hero-card-icon"
                aria-hidden="true"
              >
                ✚
              </div>

              <div>
                <p className="hero-card-small">
                  SYMPTOMS AI
                </p>

                <h3>
                  Symptom Analysis
                </h3>
              </div>

              <div className="hero-status">
                <span aria-hidden="true"></span>
                Ready
              </div>

            </div>

            {/* Selected Symptoms */}
            <div className="hero-symptom-box">

              <p>Selected symptoms</p>

              <div className="hero-tags">
                <span>Fever</span>
                <span>Cough</span>
                <span>Fatigue</span>
              </div>

            </div>

            {/* AI Analysis */}
            <div className="hero-analysis">

              <div
                className="analysis-icon"
                aria-hidden="true"
              >
                ✦
              </div>

              <div className="analysis-content">
                <p>AI Analysis</p>

                <span>
                  Processing symptoms intelligently
                </span>
              </div>

              <div
                className="analysis-arrow"
                aria-hidden="true"
              >
                →
              </div>

            </div>

            {/* Progress Indicator */}
            <div
              className="hero-progress"
              aria-hidden="true"
            >
              <span></span>
            </div>

            {/* Card Footer */}
            <div className="hero-card-footer">
              <span>Secure input</span>
              <span aria-hidden="true">•</span>
              <span>Informational use</span>
            </div>

          </div>

          {/* ================= FLOATING CARD 1 ================= */}
          <div className="floating-card floating-card-one">

            <span aria-hidden="true">✦</span>

            <div>
              <strong>AI Powered</strong>
              <small>Smart analysis</small>
            </div>

          </div>

          {/* ================= FLOATING CARD 2 ================= */}
          <div className="floating-card floating-card-two">

            <span aria-hidden="true">✓</span>

            <div>
              <strong>Simple</strong>
              <small>Easy symptom selection</small>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;