import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/home.css";
import "../styles/about.css";

function About() {
  return (
    <div className="home-page">

      <Navbar />

      <main>

        {/* ================= ABOUT HERO ================= */}
        <section className="about-page-hero">
          <div className="container">

            <div className="about-page-content">

              <span className="section-label">
                About SymptomsAI
              </span>

              <h1>
                Making symptom information
                <span> simpler to understand</span>
              </h1>

              <p>
                SymptomsAI is an AI-assisted health information platform
                designed to help users explore their symptoms and understand
                general health information in a simple and structured format.
              </p>

              <div className="about-page-actions">
                <Link
                  to="/checker"
                  className="hero-primary-button"
                >
                  Start Symptom Check
                  <span>→</span>
                </Link>

                <Link
                  to="/how-it-works"
                  className="hero-secondary-button"
                >
                  How It Works
                </Link>
              </div>

            </div>

          </div>
        </section>


        {/* ================= WHAT IS SYMPTOMS AI ================= */}
        <section className="about-info-section section">
          <div className="container">

            <div className="section-header">
              <span className="section-label">
                What We Do
              </span>

              <h2 className="section-title">
                AI-assisted symptom information
              </h2>

              <p className="section-description">
                SymptomsAI helps organize the information users provide and
                presents it in an easier-to-understand format.
              </p>
            </div>


            <div className="about-info-grid">

              <article className="about-info-card">
                <div
                  className="about-info-icon"
                  aria-hidden="true"
                >
                  ✦
                </div>

                <h3>
                  AI-Assisted Analysis
                </h3>

                <p>
                  The platform uses Gemini AI to analyze the information
                  provided by the user and generate structured health
                  information.
                </p>
              </article>


              <article className="about-info-card">
                <div
                  className="about-info-icon"
                  aria-hidden="true"
                >
                  🔎
                </div>

                <h3>
                  Easy Symptom Exploration
                </h3>

                <p>
                  Users can search and select symptoms from organized
                  categories, making it easier to describe the information
                  they want to explore.
                </p>
              </article>


              <article className="about-info-card">
                <div
                  className="about-info-icon"
                  aria-hidden="true"
                >
                  📋
                </div>

                <h3>
                  Structured Information
                </h3>

                <p>
                  Results are organized into sections such as possible
                  explanations, general guidance, warning signs and when to
                  seek professional care.
                </p>
              </article>

            </div>

          </div>
        </section>


        {/* ================= HOW WE HELP ================= */}
        <section className="about-purpose-section section">
          <div className="container">

            <div className="about-purpose-card">

              <div className="about-purpose-content">

                <span className="section-label">
                  Our Purpose
                </span>

                <h2>
                  Information first. Clear guidance. Responsible AI.
                </h2>

                <p>
                  SymptomsAI is designed as an informational tool. Its purpose
                  is to help users organize and understand symptom-related
                  information before deciding what to do next.
                </p>

                <p>
                  The platform does not replace a qualified healthcare
                  professional and does not provide confirmed medical
                  diagnoses or personalized prescriptions.
                </p>

                <Link
                  to="/checker"
                  className="cta-button"
                >
                  Explore Symptom Checker
                  <span>→</span>
                </Link>

              </div>


              <div
                className="about-purpose-visual"
                aria-hidden="true"
              >

                <div className="about-purpose-icon">
                  ✚
                </div>

                <div className="about-purpose-badge">
                  <span>✦</span>
                  AI Assisted
                </div>

                <div className="about-purpose-circle"></div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= DISCLAIMER ================= */}
        <section className="about-disclaimer-section">
          <div className="container">

            <div className="about-disclaimer-card">

              <span
                className="about-disclaimer-icon"
                aria-hidden="true"
              >
                !
              </span>

              <div>
                <h3>
                  Important Information
                </h3>

                <p>
                  SymptomsAI provides general health information for
                  informational purposes only. AI-generated information should
                  not be considered a medical diagnosis or a substitute for
                  professional medical advice. If symptoms are severe,
                  worsening, or concerning, seek appropriate medical care.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default About;