function DurationSelector({ duration, setDuration }) {
  return (
    <div className="form-group">
      <label htmlFor="duration">Duration</label>

      <select
        id="duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      >
        <option value="">Select duration</option>
        <option value="Less than 1 day">Less than 1 day</option>
        <option value="1–3 days">1–3 days</option>
        <option value="4–7 days">4–7 days</option>
        <option value="1–2 weeks">1–2 weeks</option>
        <option value="More than 2 weeks">More than 2 weeks</option>
        <option value="Recurring">Recurring / Comes and goes</option>
      </select>
    </div>
  );
}

export default DurationSelector;