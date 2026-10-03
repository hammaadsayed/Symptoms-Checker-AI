function AdditionalInfo({ additionalInfo, setAdditionalInfo }) {
  return (
    <div className="form-group additional-info">
      <label htmlFor="additional-info">
        Additional Information
      </label>

      <textarea
        id="additional-info"
        rows="5"
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
        placeholder="Add any other information you think may be relevant..."
      />

      <small>
        Do not enter passwords, financial information, or other sensitive
        information.
      </small>
    </div>
  );
}

export default AdditionalInfo;