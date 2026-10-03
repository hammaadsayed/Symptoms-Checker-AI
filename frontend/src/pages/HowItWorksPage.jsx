import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/home.css";
import "../styles/how-it-works.css";

function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      icon: "👤",
      title: "Enter Your Information",
      description:
        "Provide basic information such as your age, gender, symptom duration and severity.",
    },
    {
      number: "02",
      icon: "🔎",
      title: "Select Your Symptoms",
      description:
        "Search through organized symptom categories and select the symptoms that are relevant to you.",
    },
    {
      number: "03",
      icon: "📝",
      title: "Add More Details",
      description:
        "Provide any additional information that may help the AI understand the context of your symptoms.",
    },
    {
      number: "04",
      icon: "✦",
      title: "AI Analyzes Information",
      description:
        "Gemini AI processes the information you provide and generates structured health information.",
    },
    {
      number: "05",
      icon: "📋",
      title: "Review Your Results",
      description:
        "Explore possible explanations, general guidance, warning signs and information about when to seek care.",
    },
  ];

  return (
    <div className="home-page">
      <Navbar />

      <main>

        {/* ================= HERO ================= */}

        <section className="how-page-hero">
          <div className="container">
            <div className="how-page-hero-content">

              <span className="section-label">
                How It Works
              </span>

              <h1>
                From symptoms to
                <span> structured information</span>
              </h1>

              <p>
                SymptomsAI guides you through a simple process to organize
                your symptom information and receive an AI-assisted,
                easy-to-understand response.
              </p>

              <div className="how-page-actions">

                <Link
                  to="/checker"
                  className="hero-primary-button"
                >
                  <span>Start Symptom Check</span>
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  to="/about"
                  className="hero-secondary-button"
                >
                  About SymptomsAI
                </Link>

              </div>

            </div>
          </div>
        </section>


        {/* ================= PROCESS ================= */}

        <section className="how-page-steps section">
          <div className="container">

            <div className="section-header">

              <span className="section-label">
                The Process
              </span>

              <h2 className="section-title">
                Five simple steps
              </h2>

              <p className="section-description">
                Follow these steps to provide your information and explore
                the AI-generated health information.
              </p>

            </div>


            <div className="how-page-step-list">

              {steps.map((step) => (
                <article
                  className="how-page-step-card"
                  key={step.number}
                >

                  <div className="how-page-step-number">
                    {step.number}
                  </div>

                  <div
                    className="how-page-step-icon"
                    aria-hidden="true"
                  >
                    {step.icon}
                  </div>

                  <div className="how-page-step-content">

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* ================= AI ASSISTANCE ================= */}

        <section className="how-page-ai section">
          <div className="container">

            <div className="how-page-ai-card">

              <div className="how-page-ai-content">

                <span className="section-label">
                  AI Assistance
                </span>

                <h2>
                  What happens during AI analysis?
                </h2>

                <p>
                  Once you submit your information, the backend sends the
                  provided details to Gemini AI. The AI then organizes the
                  information into a structured response.
                </p>


                <div className="how-page-ai-points">

                  <div>
                    <span aria-hidden="true">✓</span>

                    <p>
                      Your selected symptoms and provided details are
                      considered together.
                    </p>
                  </div>


                  <div>
                    <span aria-hidden="true">✓</span>

                    <p>
                      The response is organized into understandable sections.
                    </p>
                  </div>


                  <div>
                    <span aria-hidden="true">✓</span>

                    <p>
                      Warning signs and guidance are included where relevant.
                    </p>
                  </div>


                  <div>
                    <span aria-hidden="true">✓</span>

                    <p>
                      The result is presented as general health information,
                      not a confirmed diagnosis.
                    </p>
                  </div>

                </div>

              </div>


              <div
                className="how-page-ai-visual"
                aria-hidden="true"
              >

                <div className="how-page-ai-circle"></div>

                <div className="how-page-ai-icon">
                  ✦
                </div>

                <div className="how-page-ai-badge">
                  Gemini AI
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= IMPORTANT INFORMATION ================= */}

        <section className="how-page-important">
          <div className="container">

            <div className="how-page-important-card">

              <div
                className="how-page-important-icon"
                aria-hidden="true"
              >
                !
              </div>

              <div>

                <h3>
                  Important to understand
                </h3>

                <p>
                  SymptomsAI provides AI-assisted health information for
                  informational purposes. It does not confirm a medical
                  diagnosis, prescribe treatment or replace advice from a
                  qualified healthcare professional.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* ================= CTA ================= */}

        <section className="how-page-cta section">
          <div className="container">

            <div className="how-page-cta-card">

              <div>

                <span className="section-label">
                  Get Started
                </span>

                <h2>
                  Ready to explore your symptoms?
                </h2>

                <p>
                  Start the symptom checker and provide the information
                  you want the AI to analyze.
                </p>

              </div>


              <Link
                to="/checker"
                className="cta-button"
              >
                <span>Start Symptom Check</span>
                <span aria-hidden="true">→</span>
              </Link>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default HowItWorksPage;