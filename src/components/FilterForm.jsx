import { useState } from "react";

export default function FilterForm({ onSubmit }) {
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const [selectedLetter, setSelectedLetter] = useState("");
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [challengeRating, setChallengeRating] = useState("");
  const challengeRatings = [
    0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 19, 20, 21, 22, 23, 24, 30,
  ];

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
          filterName="Alphabetical"
          placeholder="--Alphabetical--"
          options={alphabet}
          value={selectedLetter}
          onChange={(event) => {
            setFilterType("alphabet");
            setFilterValue(event.target.value);
            setSelectedLetter(event.target.value);
          }}
        />
        <FilterSelect
          filterName="Challenge Rating"
          placeholder="--Challenge Rating--"
          options={challengeRatings}
          value={challengeRating}
          onChange={(event) => {
            setFilterType("challenge_rating");
            setFilterValue(event.target.value);
            setChallengeRating(event.target.value);
          }}
        />
      </div>

      <button type="submit" className="submit-button">
        Search
      </button>
    </form>
  );
}

function FilterSelect({ filterName, options, value, onChange }) {
  return (
    <select value={value} onChange={onChange} className="input-and-select">
      <option value=""> -- {filterName} -- </option>

      {options.map((filterItem) => (
        <option key={filterItem} value={filterItem}>
          {filterItem}
        </option>
      ))}
    </select>
  );
}
