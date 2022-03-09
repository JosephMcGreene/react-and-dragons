function FilterSelect({ filterName, filters }) {
  return (
    <select>
      <option value="">-- {filterName} --</option>

      {filters.map((filterItem) => (
        <option key={filterItem} value={filterItem}>
          {filterItem}
        </option>
      ))}
    </select>
  );
}

export default FilterSelect;