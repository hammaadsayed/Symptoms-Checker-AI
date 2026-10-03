function SymptomCategory({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={
            activeCategory === category
              ? "category-button active"
              : "category-button"
          }
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default SymptomCategory;