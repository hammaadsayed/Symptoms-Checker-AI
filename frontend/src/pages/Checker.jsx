import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import PatientInfo from "../components/PatientInfo";
import SymptomSearch from "../components/SymptomSearch";
import SymptomSelector from "../components/SymptomSelector";
import SymptomCategory from "../components/SymptomCategory";
import SelectedSymptoms from "../components/SelectedSymptoms";
import DurationSelector from "../components/DurationSelector";
import SeveritySelector from "../components/SeveritySelector";
import AdditionalInfo from "../components/AdditionalInfo";
import AnalyzeButton from "../components/AnalyzeButton";

import symptoms from "../data/symptoms";
import categories from "../data/categories";

import "../styles/checker.css";

function Checker() {
  const location = useLocation();

  // =========================================
  // INITIAL FORM STATE
  // =========================================

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const [duration, setDuration] = useState("");
  const [severity, setSeverity] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  // =========================================
  // HANDLE ROUTER STATE
  // =========================================

  useEffect(() => {
    const state = location.state;

    if (!state) {
      return;
    }

    // =======================================
    // NEW ANALYSIS
    // =======================================

    if (state.reset) {
      setAge("");
      setGender("");

      setSearch("");
      setActiveCategory("All");

      setSelectedSymptoms([]);

      setDuration("");
      setSeverity("");
      setAdditionalInfo("");

      return;
    }

    // =======================================
    // TRY AGAIN
    // Restore previous information
    // =======================================

    if (state.retry) {
      setAge(state.age || "");
      setGender(state.gender || "");

      setSelectedSymptoms(
        Array.isArray(state.symptoms)
          ? state.symptoms
          : []
      );

      setDuration(state.duration || "");
      setSeverity(state.severity || "");
      setAdditionalInfo(state.additionalInfo || "");

      setSearch("");
      setActiveCategory("All");
    }
  }, [location.state]);

  // =========================================
  // FILTER SYMPTOMS
  // =========================================

  const filteredSymptoms = useMemo(() => {
    return symptoms.filter((symptom) => {
      const matchesCategory =
        activeCategory === "All" ||
        symptom.category === activeCategory;

      const matchesSearch = symptom.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  // =========================================
  // TOGGLE SYMPTOM
  // =========================================

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((current) => {
      const alreadySelected = current.some(
        (item) => item.id === symptom.id
      );

      if (alreadySelected) {
        return current.filter(
          (item) => item.id !== symptom.id
        );
      }

      return [...current, symptom];
    });
  };

  // =========================================
  // REMOVE SELECTED SYMPTOM
  // =========================================

  const removeSymptom = (id) => {
    setSelectedSymptoms((current) =>
      current.filter(
        (symptom) => symptom.id !== id
      )
    );
  };

  // =========================================
  // UI
  // =========================================

  return (
    <div className="checker-page">

      <Navbar />

      <main>

        {/* =====================================
            HERO
        ===================================== */}

        <section className="checker-hero">

          <div className="container">

            <div className="checker-hero-content">

              <span className="section-label">
                AI-Powered Symptom Checker
              </span>

              <h1>
                Tell us what
                <span> you're experiencing.</span>
              </h1>

              <p>
                Select your symptoms and provide some basic
                information. We'll use this information to
                generate an AI-assisted health-information
                response.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================
            MAIN CHECKER
        ===================================== */}

        <section className="checker-main section">

          <div className="container">

            <div className="checker-layout">

              {/* =================================
                  FORM
              ================================= */}

              <div className="checker-form">

                {/* =================================
                    PATIENT INFORMATION
                ================================= */}

                <PatientInfo
                  age={age}
                  gender={gender}
                  setAge={setAge}
                  setGender={setGender}
                />


                {/* =================================
                    SYMPTOMS
                ================================= */}

                <section className="checker-section-card">

                  <div className="checker-section-heading">

                    <span className="checker-step">
                      02
                    </span>

                    <div>

                      <h2>
                        Select Symptoms
                      </h2>

                      <p>
                        Search or browse the available
                        symptom categories.
                      </p>

                    </div>

                  </div>


                  {/* SEARCH */}

                  <SymptomSearch
                    search={search}
                    setSearch={setSearch}
                  />


                  {/* CATEGORY */}

                  <SymptomCategory
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                  />


                  {/* SYMPTOM OPTIONS */}

                  <SymptomSelector
                    symptoms={filteredSymptoms}
                    selectedSymptoms={selectedSymptoms}
                    toggleSymptom={toggleSymptom}
                  />


                  {/* SELECTED SYMPTOMS */}

                  <SelectedSymptoms
                    selectedSymptoms={selectedSymptoms}
                    removeSymptom={removeSymptom}
                  />

                </section>


                {/* =================================
                    ADDITIONAL DETAILS
                ================================= */}

                <section className="checker-section-card">

                  <div className="checker-section-heading">

                    <span className="checker-step">
                      03
                    </span>

                    <div>

                      <h2>
                        Additional Details
                      </h2>

                      <p>
                        These details help provide
                        better context.
                      </p>

                    </div>

                  </div>


                  <div className="details-grid">

                    <DurationSelector
                      duration={duration}
                      setDuration={setDuration}
                    />

                    <SeveritySelector
                      severity={severity}
                      setSeverity={setSeverity}
                    />

                  </div>


                  <AdditionalInfo
                    additionalInfo={additionalInfo}
                    setAdditionalInfo={setAdditionalInfo}
                  />

                </section>


                {/* =================================
                    ANALYZE
                ================================= */}

                <AnalyzeButton
                  age={age}
                  gender={gender}
                  selectedSymptoms={selectedSymptoms}
                  duration={duration}
                  severity={severity}
                  additionalInfo={additionalInfo}
                />

              </div>


              {/* =================================
                  SIDE INFORMATION CARD
              ================================= */}

              <aside className="checker-side-card">

                <div className="side-card-icon">
                  ✦
                </div>

                <h3>
                  AI-Assisted Analysis
                </h3>

                <p>
                  Your selected information will be
                  sent securely to the backend for
                  AI-assisted analysis.
                </p>


                <div className="side-feature">
                  <span>✓</span>
                  Structured response
                </div>

                <div className="side-feature">
                  <span>✓</span>
                  Possible explanations
                </div>

                <div className="side-feature">
                  <span>✓</span>
                  General guidance
                </div>

                <div className="side-feature">
                  <span>✓</span>
                  Warning signs
                </div>


                <div className="side-warning">

                  <strong>
                    Important
                  </strong>

                  <p>
                    This tool is for informational
                    purposes and should not replace
                    professional medical evaluation.
                  </p>

                </div>

              </aside>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Checker;