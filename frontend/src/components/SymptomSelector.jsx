function SymptomSelector({
  symptoms,
  selectedSymptoms,
  toggleSymptom,
}) {
  if (symptoms.length === 0) {
    return (
      <div className="no-symptoms">
        <span>⌕</span>
        <p>No symptoms found.</p>
        <small>Try another search or category.</small>
      </div>
    );
  }

  return (
    <div className="symptom-grid">
      {symptoms.map((symptom) => {
        const selected = selectedSymptoms.some(
          (item) => item.id === symptom.id
        );

        return (
          <button
            key={symptom.id}
            type="button"
            className={
              selected
                ? "symptom-option selected"
                : "symptom-option"
            }
            onClick={() => toggleSymptom(symptom)}
          >
            <span className="symptom-check">
              {selected ? "✓" : "+"}
            </span>

            <span>{symptom.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export default SymptomSelector;