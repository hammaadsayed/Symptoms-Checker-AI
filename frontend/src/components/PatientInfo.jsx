function PatientInfo({ age, gender, setAge, setGender }) {
  return (
    <section className="checker-section-card">
      <div className="checker-section-heading">
        <span className="checker-step">01</span>

        <div>
          <h2>Patient Information</h2>
          <p>Provide basic information for better context.</p>
        </div>
      </div>

      <div className="patient-grid">
        <div className="form-group">
          <label htmlFor="age">Age</label>

          <input
            id="age"
            type="number"
            min="1"
            max="120"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>

          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other / Prefer not to say</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default PatientInfo;