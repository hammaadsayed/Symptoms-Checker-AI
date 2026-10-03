function SymptomSearch({ search, setSearch }) {
  return (
    <div className="symptom-search-wrapper">
      <label htmlFor="symptom-search">Search Symptoms</label>

      <div className="symptom-search">
        <span>⌕</span>

        <input
          id="symptom-search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a symptom..."
        />

        {search && (
          <button
            type="button"
            className="search-clear"
            onClick={() => setSearch("")}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

export default SymptomSearch;