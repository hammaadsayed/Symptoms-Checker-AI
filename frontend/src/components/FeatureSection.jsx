function FeatureSection() {
  const features = [
    {
      icon: "🔎",
      title: "Easy Symptom Search",
      description:
        "Search and select symptoms quickly from organized health categories.",
    },
    {
      icon: "✦",
      title: "AI-Assisted Analysis",
      description:
        "Gemini AI helps organize the information you provide into a clear response.",
    },
    {
      icon: "📋",
      title: "Structured Results",
      description:
        "View possible explanations, general guidance and warning signs in one place.",
    },
  ];

  return (
    <section
      className="features-section section"
      aria-labelledby="features-title"
    >
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">
            Why SymptomsAI
          </span>

          <h2
            id="features-title"
            className="section-title"
          >
            A simpler way to understand your symptoms
          </h2>

          <p className="section-description">
            Designed to make symptom information easier to explore and
            understand with the help of generative AI.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="features-grid">
          {features.map((feature) => (
            <article
              className="feature-card"
              key={feature.title}
            >
              <div
                className="feature-icon"
                aria-hidden="true"
              >
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <div
                className="feature-arrow"
                aria-hidden="true"
              >
                →
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeatureSection;