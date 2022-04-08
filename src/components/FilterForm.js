// TODO Add state for all filters

import { useState } from "react";

export default function FilterForm({ monsterData, onFilter }) {
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

  const [selectedCR, setSelectedCR] = useState();
  const challengeRatings = [
    0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 30,
  ];

  const [selectedAlignment, setSelectedAlignment] = useState("");
  const alignments = [
    "Any",
    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "True Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil",
    "Chaotic Evil",
    "Unaligned",
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const languages = [
    "All",
    "Abyssal",
    "Celestial",
    "Common",
    "Deep Speech",
    "Draconic",
    "Dwarvish",
    "Elvish",
    "Giant",
    "Gnomish",
    "Goblin",
    "Halfling",
    "Infernal",
    "Orc",
    "Primodrial",
    "Sylvan",
    "Telepathy",
    "Undercommon",
  ];

  const [selectedSize, setSelectedSize] = useState("");
  const sizes = ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"];

  const [selectedType, setSelectedType] = useState("");
  const types = [
    "Aberration",
    "Beast",
    "Celestial",
    "Construct",
    "Dragon",
    "Elemental",
    "Fey",
    "Fiend",
    "Giant",
    "Humanoid",
    "Monstrosity",
    "Ooze",
    "Plant",
    "Undead",
  ];

  const [selectedVulnerabilities, setSelectedVulnerabilities] = useState("");
  const vulnerabilities = [
    "Acid",
    "Bludgeoning",
    "Cold",
    "Fire",
    "Force",
    "Lightning",
    "Necrotic",
    "Piercing",
    "Poison",
    "Psychic",
    "Radiant",
    "Slashing",
    "Thunder",
  ];

  const [filterSelections, setFilterSelections] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    setFilterSelections({
      letterFilter: selectedLetter.toLowerCase(),
      crFilter: selectedCR,
      alignmentFilter: selectedAlignment,
      languageFilter: selectedLanguage,
      sizeFilter: selectedSize,
      typeFilter: selectedType,
      vulernabiityFilter: selectedVulnerabilities,
    });

    onFilter(filterSelections);
  }

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <FilterSelect
        filterName="Alphabetical"
        filterOptions={alphabet}
        value={selectedLetter}
        onChange={(event) => setSelectedLetter(event.target.value)}
      />
      <FilterSelect
        filterName="Challenge Rating"
        filterOptions={challengeRatings}
        value={selectedCR}
        onChange={(event) => setSelectedCR(event.target.value)}
      />
      {/* <FilterSelect filterName="Alignment" filterOptions={alignments} />
      <FilterSelect filterName="Language" filterOptions={languages} />
      <FilterSelect filterName="Size" filterOptions={sizes} />
      <FilterSelect filterName="Type" filterOptions={types} />
      <FilterSelect filterName="Vulnerabilities" filterOptions={vulnerabilities} /> */}

      <input type="submit" value="Apply Filters" className="button" />
    </form>
  );
}

function FilterSelect({ filterName, filterOptions, value, onChange }) {
  return (
    <select value={value} onChange={onChange} className="input-and-select">
      <option value="">-- {filterName} --</option>

      {filterOptions.map((filterItem) => (
        <option key={filterItem} value={filterItem}>
          {filterItem}
        </option>
      ))}
    </select>
  );
}
