import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

import "../styles/home.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <main>
        {/* =========================================
            HERO
        ========================================= */}

        <HeroSection />

        {/* =========================================
            FEATURES
        ========================================= */}

        <FeatureSection />

        {/* =========================================
            HOW IT WORKS
        ========================================= */}

        <HowItWorks />

        {/* =========================================
            FINAL CTA
        ========================================= */}

        <section className="cta-section">
          <div className="container">
            <div className="cta-card">

              <div className="cta-content">
                <span className="section-label">
                  Get Started
                </span>

                <h2>
                  Ready to explore your symptoms?
                </h2>

                <p>
                  Start the symptom checker and provide the
                  information you want the AI to analyze.
                </p>
              </div>

              <Link
                to="/checker"
                className="cta-button"
              >
                Start Symptom Check
                <span>→</span>
              </Link>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;