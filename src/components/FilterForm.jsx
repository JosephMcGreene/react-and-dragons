import { useState } from "react";

export default function FilterForm({ onSubmit }) {
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const [selectedLetter, setSelectedLetter] = useState("");
  // prettier-ignore
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  const [challengeRating, setChallengeRating] = useState("");
  // prettier-ignore
  const challengeRatings = [0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 30];

  function handleFilterChange(eventTargetValue, filterType, stateCallback) {
    setFilterType(filterType);
    setFilterValue(eventTargetValue);
    stateCallback(eventTargetValue);
  }

  return (
    <form
      className="filter-form"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(filterType, filterValue);
      }}
    >
      <div className="filter-container">
        <FilterSelect
          name="Alphabetical"
          placeholder="--Alphabetical--"
          options={alphabet}
          value={selectedLetter}
          // prettier-ignore
          onChange={(event) => handleFilterChange(event.target.value, "alphabet", setSelectedLetter)}
        />
        <FilterSelect
          name="Challenge Rating"
          placeholder="--Challenge Rating--"
          options={challengeRatings}
          value={challengeRating}
          // prettier-ignore
          onChange={(event) => handleFilterChange(event.target.value, "challenge_rating", setChallengeRating)}
        />
      </div>

      <button type="submit" className="submit-button">
        Search
      </button>
    </form>
  );
}

function FilterSelect({ name, options, value, onChange }) {
  return (
    <select value={value} onChange={onChange} className="input-and-select">
      <option value=""> -- {name} -- </option>

      {options.map((filterItem, index) => (
        <option key={filterItem + index} value={filterItem}>
          {filterItem}
        </option>
      ))}
    </select>
  );
}
