import { useLocation, useNavigate } from "react-router-dom";
import "../styles/results.css";

function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    age,
    gender,
    symptoms = [],
    duration,
    severity,
    additionalInfo,
    analysis,
    error,
  } = location.state || {};

  // =========================================
  // NO RESULT DATA
  // =========================================

  if (!location.state) {
    return (
      <div className="results-page">
        <div className="results-empty">
          <div className="empty-icon">🩺</div>

          <h1>No Analysis Found</h1>

          <p>
            Please go to the symptom checker and analyze
            your symptoms first.
          </p>

          <button
            type="button"
            className="results-primary-btn"
            onClick={() => navigate("/checker")}
          >
            Go to Symptom Checker
          </button>
        </div>
      </div>
    );
  }

  // =========================================
  // RETRY AI ANALYSIS
  // =========================================

  const handleTryAgain = () => {
    navigate("/checker", {
      state: {
        age,
        gender,
        symptoms,
        duration,
        severity,
        additionalInfo,
        retry: true,
      },
    });
  };

  // =========================================
  // NEW ANALYSIS
  // =========================================

  const handleNewAnalysis = () => {
    navigate("/checker", {
      state: {
        reset: true,
      },
    });
  };

  // =========================================
  // MAIN RESULTS PAGE
  // =========================================

  return (
    <div className="results-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="results-hero">
        <div className="results-hero-content">

          <div className="results-badge">
            ✨ AI HEALTH INFORMATION
          </div>

          <h1>
            Symptom Analysis Results
          </h1>

          <p>
            Review the information generated from the
            symptoms you provided.
          </p>

        </div>
      </section>


      {/* =====================================
          MAIN CONTAINER
      ===================================== */}

      <main className="results-container">

        {/* =====================================
            PATIENT INFORMATION
        ===================================== */}

        <section className="result-card">

          <div className="result-card-header">

            <div className="result-icon">
              👤
            </div>

            <div>
              <h2>Patient Information</h2>
              <p>
                Information provided for this analysis
              </p>
            </div>

          </div>


          <div className="patient-result-grid">

            <div className="result-info-box">
              <span>Age</span>
              <strong>{age}</strong>
            </div>

            <div className="result-info-box">
              <span>Gender</span>
              <strong>{gender}</strong>
            </div>

            <div className="result-info-box">
              <span>Duration</span>
              <strong>{duration}</strong>
            </div>

            <div className="result-info-box">
              <span>Severity</span>

              <strong
                className={`severity-${String(
                  severity || ""
                ).toLowerCase()}`}
              >
                {severity}
              </strong>
            </div>

          </div>

        </section>


        {/* =====================================
            SELECTED SYMPTOMS
        ===================================== */}

        <section className="result-card">

          <div className="result-card-header">

            <div className="result-icon">
              🩺
            </div>

            <div>
              <h2>Selected Symptoms</h2>

              <p>
                Symptoms provided for analysis
              </p>
            </div>

          </div>


          <div className="result-symptoms">

            {symptoms.length > 0 ? (
              symptoms.map((symptom, index) => (
                <span
                  className="result-symptom-chip"
                  key={symptom?.id || index}
                >
                  {typeof symptom === "object"
                    ? symptom.name
                    : symptom}
                </span>
              ))
            ) : (
              <p className="no-data">
                No symptoms selected.
              </p>
            )}

          </div>

        </section>


        {/* =====================================
            ADDITIONAL INFORMATION
        ===================================== */}

        {additionalInfo && (
          <section className="result-card">

            <div className="result-card-header">

              <div className="result-icon">
                📝
              </div>

              <div>
                <h2>Additional Information</h2>

                <p>
                  Additional details provided by the user
                </p>
              </div>

            </div>


            <div className="additional-result-box">
              <p>{additionalInfo}</p>
            </div>

          </section>
        )}


        {/* =====================================
            AI ANALYSIS
        ===================================== */}

        {analysis ? (
          <>

            {/* ---------------------------------
                AI SUMMARY
            --------------------------------- */}

            <section className="ai-result-card">

              <div className="ai-result-icon">
                ✨
              </div>

              <div className="ai-result-content">

                <span className="ai-label">
                  GEMINI AI ANALYSIS
                </span>

                <h2>
                  AI Health Information
                </h2>

                <p>
                  {analysis.summary}
                </p>

                <div className="ai-status">

                  <span className="status-dot"></span>

                  Analysis generated successfully

                </div>

              </div>

            </section>


            {/* ---------------------------------
                POSSIBLE EXPLANATIONS
            --------------------------------- */}

            <section className="result-card">

              <div className="result-card-header">

                <div className="result-icon">
                  🔍
                </div>

                <div>

                  <h2>
                    Possible Explanations
                  </h2>

                  <p>
                    These are possibilities, not confirmed
                    diagnoses.
                  </p>

                </div>

              </div>


              <div className="possible-explanations">

                {analysis.possible_explanations?.length > 0 ? (
                  analysis.possible_explanations.map(
                    (item, index) => (
                      <div
                        className="explanation-item"
                        key={index}
                      >

                        <h3>
                          {item.name}
                        </h3>

                        <p>
                          {item.explanation}
                        </p>

                      </div>
                    )
                  )
                ) : (
                  <p className="no-data">
                    No possible explanations were provided.
                  </p>
                )}

              </div>

            </section>


            {/* ---------------------------------
                GENERAL GUIDANCE
            --------------------------------- */}

            <section className="result-card">

              <div className="result-card-header">

                <div className="result-icon">
                  💡
                </div>

                <div>

                  <h2>
                    General Guidance
                  </h2>

                  <p>
                    General non-prescription health guidance
                  </p>

                </div>

              </div>


              <ul className="guidance-list">

                {analysis.general_guidance?.length > 0 ? (
                  analysis.general_guidance.map(
                    (item, index) => (
                      <li key={index}>

                        <span>✓</span>

                        <p>
                          {item}
                        </p>

                      </li>
                    )
                  )
                ) : (
                  <li>
                    <span>✓</span>
                    <p>
                      No general guidance was provided.
                    </p>
                  </li>
                )}

              </ul>

            </section>


            {/* ---------------------------------
                WARNING SIGNS
            --------------------------------- */}

            <section className="result-card warning-card">

              <div className="result-card-header">

                <div className="result-icon">
                  ⚠️
                </div>

                <div>

                  <h2>
                    Warning Signs
                  </h2>

                  <p>
                    Symptoms that may require urgent attention
                  </p>

                </div>

              </div>


              <ul className="warning-list">

                {analysis.warning_signs?.length > 0 ? (
                  analysis.warning_signs.map(
                    (item, index) => (
                      <li key={index}>

                        <span>!</span>

                        <p>
                          {item}
                        </p>

                      </li>
                    )
                  )
                ) : (
                  <li>
                    <span>!</span>

                    <p>
                      No specific warning signs were provided.
                    </p>
                  </li>
                )}

              </ul>

            </section>


            {/* ---------------------------------
                WHEN TO SEEK CARE
            --------------------------------- */}

            <section className="result-card care-card">

              <div className="result-card-header">

                <div className="result-icon">
                  🏥
                </div>

                <div>

                  <h2>
                    When to Seek Medical Care
                  </h2>

                  <p>
                    Guidance about professional medical care
                  </p>

                </div>

              </div>


              <p>
                {analysis.when_to_seek_care}
              </p>

            </section>


            {/* ---------------------------------
                DISCLAIMER
            --------------------------------- */}

            <div className="results-disclaimer">

              <strong>
                ⚕️ Medical Information Disclaimer:
              </strong>

              <span>
                {" "}
                {analysis.disclaimer}
              </span>

            </div>

          </>
        ) : (

          /* =====================================
              AI ERROR / UNAVAILABLE
          ===================================== */

          <section className="result-card ai-error-card">

            <div className="results-empty">

              <div className="empty-icon">
                ⚠️
              </div>

              <h1>
                AI Analysis Unavailable
              </h1>

              <p>
                {error ||
                  "We couldn't retrieve the AI analysis at the moment. Please try again."}
              </p>


              <div className="error-actions">

                <button
                  type="button"
                  className="results-primary-btn"
                  onClick={handleTryAgain}
                >
                  🔄 Try Again
                </button>

                <button
                  type="button"
                  className="results-secondary-btn"
                  onClick={handleNewAnalysis}
                >
                  ✨ Start New Analysis
                </button>

              </div>

            </div>

          </section>

        )}


        {/* =====================================
            ACTION BUTTONS
        ===================================== */}

        <div className="results-actions">

          <button
            type="button"
            className="results-secondary-btn"
            onClick={() => navigate("/checker")}
          >
            ← Edit Symptoms
          </button>


          <button
            type="button"
            className="results-primary-btn"
            onClick={handleNewAnalysis}
          >
            ✨ New Analysis
          </button>


          <button
            type="button"
            className="results-secondary-btn"
            onClick={() => navigate("/")}
          >
            🏠 Back to Home
          </button>

        </div>


        {/* =====================================
            BOTTOM DISCLAIMER
        ===================================== */}

        <p className="results-disclaimer">

          <strong>Important:</strong>{" "}

          This tool provides general health information
          and is not a substitute for professional medical
          diagnosis or treatment.

        </p>

      </main>

    </div>
  );
}

export default Results;