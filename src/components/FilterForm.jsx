// import { useState } from "react";

export default function FilterForm({ monsterList, onSearch }) {
  // const [selectedLetter, setSelectedLetter] = useState("");
  // const alphabet = [
  //   "A",
  //   "B",
  //   "C",
  //   "D",
  //   "E",
  //   "F",
  //   "G",
  //   "H",
  //   "I",
  //   "J",
  //   "K",
  //   "L",
  //   "M",
  //   "N",
  //   "O",
  //   "P",
  //   "Q",
  //   "R",
  //   "S",
  //   "T",
  //   "U",
  //   "V",
  //   "W",
  //   "X",
  //   "Y",
  //   "Z",
  // ];

  // const challengeRatings = [
  //   0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  //   18, 19, 20, 21, 22, 23, 24, 30,
  // ];

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

  // const [selectedLanguage, setSelectedLanguage] = useState("");
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

  // const [selectedSize, setSelectedSize] = useState("");
  // const sizes = ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"];

  // const [selectedType, setSelectedType] = useState("");
  // const types = [
  // 	"Aberration",
  // 	"Beast",
  // 	"Celestial",
  // 	"Construct",
  // 	"Dragon",
  // 	"Elemental",
  // 	"Fey",
  // 	"Fiend",
  // 	"Giant",
  // 	"Humanoid",
  // 	"Monstrosity",
  // 	"Ooze",
  // 	"Plant",
  // 	"Undead",
  // ];

  // const [selectedVulnerabilities, setSelectedVulnerabilities] = useState("");
  // const vulnerabilities = [
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

  // function handleSubmit(event, filterType, filter) {
  //   event.preventDefault();
  //   onSearch(filterType, filter);
  // }

  return (
    <form
      className="filter-form"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event, "Submitted!");
      }}
    >
      {/* <input
				placeholder="Search Name"
				className="input-and-select search-bar"
				value={searchInput}
				onChange={(event) => setSearchInput(event.target.value)}
			/> */}
      {/* <FilterSelect
        filterName="Challenge Rating"
        filterOptions={challengeRatings}
        placeholder="-- Challenge Rating --"
        value={challengeRating}
        onChange={(event) => {
          setFilterType("challenge_rating");
          setFilter(event.target.value);
          setChallengeRating(event.target.value);
        }}
      /> */}
      {/* <FilterSelect
        filterName="Alignment"
        filterOptions={alignments}
        placeholder="-- Alignment --"
        value={alignment}
        onChange={(event) => {
          setFilterType("alignment");
          setFilter(event.target.value);
          setAlignment(event.target.value);
        }}
      /> */}
      {/* <FilterSelect
        filterName="Language"
        filterOptions={languages}
        value={selectedLanguage}
        onChange={(event) => setSelectedLanguage(event.target.value)}
      />
			<FilterSelect
        filterName="Size"
        filterOptions={sizes}
        value={selectedSize}
        onChange={(event) => setSelectedSize(event.target.value)}
      />
			<FilterSelect
        filterName="Type"
        filterOptions={types}
        value={selectedType}
        onChange={(event) => setSelectedType(event.target.value)}
      />
			<FilterSelect
        filterName="Vulnerabilities"
        filterOptions={vulnerabilities}
        value={selectedVulnerabilities}
        onChange={(event) =>
          setSelectedVulnerabilities(event.target.value.toLowerCase())
        }
      /> */}
      <button type="submit" className="submit-button">
        Search
      </button>
    </form>
  );
}

// function FilterSelect({ filterName, filterOptions, value, onChange }) {
//   return (
//     <select value={value} onChange={onChange} className="input-and-select">
//       <option value=""> -- {filterName} -- </option>

//       {filterOptions.map((filterItem) => (
//         <option key={filterItem} value={filterItem}>
//           {filterItem}
//         </option>
//       ))}
//     </select>
//   );
// }
