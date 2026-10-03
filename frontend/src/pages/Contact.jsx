import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/home.css";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="home-page">

      <Navbar />

      <main>

        {/* ================= CONTACT HERO ================= */}

        <section className="contact-page-hero">
          <div className="container">

            <div className="contact-page-hero-content">

              <span className="section-label">
                Contact SymptomsAI
              </span>

              <h1>
                We'd love to
                <span> hear from you</span>
              </h1>

              <p>
                Have a question, suggestion or feedback about SymptomsAI?
                Get in touch and let us know how we can improve the project.
              </p>

            </div>

          </div>
        </section>


        {/* ================= CONTACT CONTENT ================= */}

        <section className="contact-page-section section">
          <div className="container">

            <div className="contact-page-grid">

              {/* Information */}

              <div className="contact-info">

                <span className="section-label">
                  Get In Touch
                </span>

                <h2>
                  Let us know what you think
                </h2>

                <p>
                  SymptomsAI is a college AI project designed to explore how
                  generative AI can organize and present symptom-related
                  information.
                </p>


                <div className="contact-info-items">

                  <div className="contact-info-item">

                    <div
                      className="contact-info-icon"
                      aria-hidden="true"
                    >
                      ✉
                    </div>

                    <div>
                      <h3>
                        Project Feedback
                      </h3>

                      <p>
                        Share suggestions or ideas that could improve the
                        SymptomsAI experience.
                      </p>
                    </div>

                  </div>


                  <div className="contact-info-item">

                    <div
                      className="contact-info-icon"
                      aria-hidden="true"
                    >
                      💡
                    </div>

                    <div>
                      <h3>
                        Suggestions
                      </h3>

                      <p>
                        Tell us about features or improvements you would like
                        to see in the project.
                      </p>
                    </div>

                  </div>


                  <div className="contact-info-item">

                    <div
                      className="contact-info-icon"
                      aria-hidden="true"
                    >
                      ✦
                    </div>

                    <div>
                      <h3>
                        AI Project
                      </h3>

                      <p>
                        Learn more about how SymptomsAI uses AI-assisted
                        information generation.
                      </p>
                    </div>

                  </div>

                </div>

              </div>


              {/* Contact Form */}

              <div className="contact-form-card">

                <form
                  className="contact-form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    alert(
                      "Thank you for your message! This contact form is currently a frontend demonstration."
                    );
                  }}
                >

                  <div className="contact-form-group">

                    <label htmlFor="contact-name">
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />

                  </div>


                  <div className="contact-form-group">

                    <label htmlFor="contact-email">
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />

                  </div>


                  <div className="contact-form-group">

                    <label htmlFor="contact-subject">
                      Subject
                    </label>

                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="What would you like to discuss?"
                      required
                    />

                  </div>


                  <div className="contact-form-group">

                    <label htmlFor="contact-message">
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows="6"
                      placeholder="Write your message..."
                      required
                    ></textarea>

                  </div>


                  <button
                    type="submit"
                    className="contact-submit-button"
                  >
                    Send Message
                    <span aria-hidden="true">→</span>
                  </button>

                </form>

              </div>

            </div>

          </div>
        </section>


        {/* ================= DISCLAIMER ================= */}

        <section className="contact-disclaimer">
          <div className="container">

            <div className="contact-disclaimer-card">

              <div
                className="contact-disclaimer-icon"
                aria-hidden="true"
              >
                !
              </div>

              <div>

                <h3>
                  Important Information
                </h3>

                <p>
                  SymptomsAI is an informational AI project. Messages sent
                  through this demonstration form are not connected to a
                  healthcare provider and should not be used for urgent
                  medical concerns.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* ================= CTA ================= */}

        <section className="contact-page-cta section">
          <div className="container">

            <div className="contact-page-cta-card">

              <div>

                <span className="section-label">
                  Explore SymptomsAI
                </span>

                <h2>
                  Ready to explore your symptoms?
                </h2>

                <p>
                  Use the symptom checker to provide information for
                  AI-assisted health information.
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

export default Contact;