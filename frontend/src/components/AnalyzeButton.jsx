import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeSymptoms } from "../services/api";
import LoadingScreen from "./LoadingScreen";

function AnalyzeButton({
  age,
  gender,
  selectedSymptoms,
  duration,
  severity,
  additionalInfo,
}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    // ==============================
    // VALIDATION
    // ==============================

    if (!age) {
      alert("Please enter your age.");
      return;
    }

    if (!gender) {
      alert("Please select your gender.");
      return;
    }

    if (!selectedSymptoms || selectedSymptoms.length === 0) {
      alert("Please select at least one symptom.");
      return;
    }

    if (!duration) {
      alert("Please select the symptom duration.");
      return;
    }

    if (!severity) {
      alert("Please select the symptom severity.");
      return;
    }

    // ==============================
    // REQUEST DATA
    // ==============================

    const requestData = {
      age: Number(age),

      gender,

      symptoms: selectedSymptoms.map((symptom) => ({
        id: symptom.id,
        name: symptom.name,
        category: symptom.category,
      })),

      duration,

      severity,

      additionalInfo: additionalInfo || "",
    };

    console.log("=================================");
    console.log("SYMPTOMS CHECKER AI");
    console.log("=================================");
    console.log("Request data:", requestData);

    setLoading(true);

    try {
      // ==============================
      // CALL GEMINI BACKEND
      // ==============================

      const analysis = await analyzeSymptoms(requestData);

      console.log("=================================");
      console.log("AI ANALYSIS RECEIVED");
      console.log("=================================");
      console.log(analysis);

      if (!analysis) {
        throw new Error(
          "No AI analysis was returned by the server."
        );
      }

      if (!analysis.summary) {
        console.warn(
          "AI response does not contain a summary.",
          analysis
        );
      }

      // ==============================
      // SUCCESS
      // ==============================

      navigate("/results", {
        state: {
          age,
          gender,
          symptoms: selectedSymptoms,
          duration,
          severity,
          additionalInfo: additionalInfo || "",
          analysis,
        },
      });

    } catch (error) {

      // ==============================
      // ERROR
      // ==============================

      console.error("=================================");
      console.error("AI ANALYSIS FAILED");
      console.error("=================================");
      console.error(error);

      const errorMessage =
        error?.message ||
        "Unable to analyze your symptoms at the moment.";

      // Stop loading before navigation
      setLoading(false);

      // Send user to Results error screen
      navigate("/results", {
        state: {
          age,
          gender,
          symptoms: selectedSymptoms,
          duration,
          severity,
          additionalInfo: additionalInfo || "",
          analysis: null,
          error: errorMessage,
        },
      });

      return;
    }

    setLoading(false);
  };

  return (
    <>
      {/* =================================
          LOADING SCREEN
      ================================= */}

      {loading && <LoadingScreen />}

      {/* =================================
          ANALYZE BUTTON
      ================================= */}

      <div className="analyze-button-wrapper">

        <button
          type="button"
          className="analyze-button"
          onClick={handleAnalyze}
          disabled={loading}
        >

          {loading ? (
            <>
              <span className="analyze-spinner"></span>

              Analyzing Symptoms...
            </>
          ) : (
            <>
              <span>✨</span>

              Analyze Symptoms

              <span>→</span>
            </>
          )}

        </button>

      </div>
    </>
  );
}

export default AnalyzeButton;