function SeveritySelector({ severity, setSeverity }) {
  const options = [
    {
      value: "Mild",
      description: "Noticeable but manageable",
    },
    {
      value: "Moderate",
      description: "Interferes with normal activities",
    },
    {
      value: "Severe",
      description: "Significantly affecting you",
    },
  ];

  return (
    <div className="severity-wrapper">
      <div className="form-label">Severity</div>

      <div className="severity-grid">
        {options.map((option) => (
          <button
            type="button"
            key={option.value}
            className={
              severity === option.value
                ? "severity-option active"
                : "severity-option"
            }
            onClick={() => setSeverity(option.value)}
          >
            <span className="severity-radio">
              {severity === option.value ? "●" : "○"}
            </span>

            <span>
              <strong>{option.value}</strong>
              <small>{option.description}</small>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SeveritySelector;