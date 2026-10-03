function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "👤",
      title: "Enter Information",
      description:
        "Provide basic information such as age, gender and symptom duration.",
    },
    {
      number: "02",
      icon: "🔎",
      title: "Select Symptoms",
      description:
        "Search for symptoms and select all the relevant symptoms you are experiencing.",
    },
    {
      number: "03",
      icon: "✦",
      title: "Get AI Analysis",
      description:
        "Gemini analyzes the information and returns a structured health-information response.",
    },
  ];

  return (
    <section
      className="how-section section"
      aria-labelledby="home-how-it-works-title"
    >
      <div className="container">

        <div className="section-header">
          <span className="section-label">
            How It Works
          </span>

          <h2
            id="home-how-it-works-title"
            className="section-title"
          >
            Three simple steps to get started
          </h2>

          <p className="section-description">
            The process is designed to be simple, clear and easy to follow.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div
              className="step-wrapper"
              key={step.number}
            >
              <article className="step-card">

                <div className="step-top">
                  <span className="step-number">
                    {step.number}
                  </span>

                  <span
                    className="step-icon"
                    aria-hidden="true"
                  >
                    {step.icon}
                  </span>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </article>

              {index < steps.length - 1 && (
                <div
                  className="step-connector"
                  aria-hidden="true"
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;