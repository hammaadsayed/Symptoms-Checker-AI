function SelectedSymptoms({ selectedSymptoms, removeSymptom }) {
  return (
    <div className="selected-wrapper">
      <div className="selected-heading">
        <h3>Selected Symptoms</h3>
        <span>{selectedSymptoms.length} selected</span>
      </div>

      {selectedSymptoms.length === 0 ? (
        <div className="selected-empty">
          Select one or more symptoms above.
        </div>
      ) : (
        <div className="selected-list">
          {selectedSymptoms.map((symptom) => (
            <div className="selected-chip" key={symptom.id}>
              <span>{symptom.name}</span>

              <button
                type="button"
                onClick={() => removeSymptom(symptom.id)}
                aria-label={`Remove ${symptom.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectedSymptoms;