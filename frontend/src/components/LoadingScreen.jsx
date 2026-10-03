function LoadingScreen() {
  return (
    <div className="ai-loading-overlay">
      <div className="ai-loading-card">

        <div className="ai-loading-icon">
          ✨
        </div>

        <h2>
          Analyzing Your Symptoms
        </h2>

        <p>
          Gemini AI is analyzing the information
          you provided and preparing your results.
        </p>

        <div className="ai-loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <small>
          Please wait a moment...
        </small>

      </div>
    </div>
  );
}

export default LoadingScreen;