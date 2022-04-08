import { useState } from "react";

export default function FilterForm({ onFilter }) {
  const [selections, setSelections] = useState([]);
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
  const challengeRatings = [
    "0.125",
    "0.25",
    "0.5",
    "1",
    "2",
    "3",
    "4",
    "5",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "30",
  ];
  // const alignments = [
  //   "Any",
  //   "Lawful Good",
  //   "Neutral Good",
  //   "Chaotic Good",
  //   "Lawful Neutral",
  //   "True Neutral",
  //   "Chaotic Neutral",
  //   "Lawful Evil",
  //   "Neutral Evil",
  //   "Chaotic Evil",
  //   "Unaligned",
  // ];
  // const languages = [
  //   "All",
  //   "Abyssal",
  //   "Celestial",
  //   "Common",
  //   "Deep Speech",
  //   "Draconic",
  //   "Dwarvish",
  //   "Elvish",
  //   "Giant",
  //   "Gnomish",
  //   "Goblin",
  //   "Halfling",
  //   "Infernal",
  //   "Orc",
  //   "Primodrial",
  //   "Sylvan",
  //   "Telepathy",
  //   "Undercommon",
  // ];
  // const sizes = ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"];
  // const types = [
  //   "Aberration",
  //   "Beast",
  //   "Celestial",
  //   "Construct",
  //   "Dragon",
  //   "Elemental",
  //   "Fey",
  //   "Fiend",
  //   "Giant",
  //   "Humanoid",
  //   "Monstrosity",
  //   "Ooze",
  //   "Plant",
  //   "Undead",
  // ];
  // const damageTypes = [
  //   "Acid",
  //   "Bludgeoning",
  //   "Cold",
  //   "Fire",
  //   "Force",
  //   "Lightning",
  //   "Necrotic",
  //   "Piercing",
  //   "Poison",
  //   "Psychic",
  //   "Radiant",
  //   "Slashing",
  //   "Thunder",
  // ];

  function handleSubmit(event) {
    event.preventDefault();

    onFilter(selections);
  }

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <FilterSelect
        filterName="Alphabetical"
        filterOptions={alphabet}
        value={selections}
        onChange={(event) => setSelections([...selections, event.target.value])}
      />
      <FilterSelect
        filterName="Challenge Rating"
        filterOptions={challengeRatings}
        value={selections}
        onChange={(event) => setSelections([...selections, event.target.value])}
      />
      {/* <FilterSelect filterName="Alignment" filters={alignments} />
      <FilterSelect filterName="Language" filters={languages} />
      <FilterSelect filterName="Size" filters={sizes} />
      <FilterSelect filterName="Type" filters={types} />
      <FilterSelect filterName="Vulnerabilities" filters={damageTypes} /> */}

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
