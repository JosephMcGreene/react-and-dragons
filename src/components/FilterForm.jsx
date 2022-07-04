import { useState } from "react";

export default function FilterForm({ onSearch }) {
	// const [selectedCR, setSelectedCR] = useState("");
	// const challengeRatings = [
	// 	0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
	// 	18, 19, 20, 21, 22, 23, 24, 30,
	// ];

	// const [selectedAlignment, setSelectedAlignment] = useState("");
	// const alignments = [
	// 	"Any",
	// 	"Lawful Good",
	// 	"Neutral Good",
	// 	"Chaotic Good",
	// 	"Lawful Neutral",
	// 	"True Neutral",
	// 	"Chaotic Neutral",
	// 	"Lawful Evil",
	// 	"Neutral Evil",
	// 	"Chaotic Evil",
	// 	"Unaligned",
	// ];

	// // const [selectedLanguage, setSelectedLanguage] = useState("");
	// // const languages = [
	// //   "All",
	// //   "Abyssal",
	// //   "Celestial",
	// //   "Common",
	// //   "Deep Speech",
	// //   "Draconic",
	// //   "Dwarvish",
	// //   "Elvish",
	// //   "Giant",
	// //   "Gnomish",
	// //   "Goblin",
	// //   "Halfling",
	// //   "Infernal",
	// //   "Orc",
	// //   "Primodrial",
	// //   "Sylvan",
	// //   "Telepathy",
	// //   "Undercommon",
	// // ];

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

	// const [filterSelections, setFilterSelections] = useState({});

	const [searchInput, setSearchInput] = useState("");
	function handleSubmit(event) {
		event.preventDefault();
		onSearch(searchInput);
	}

	return (
		<form className="filter-form" onSubmit={handleSubmit}>
			<input
				placeholder="Search Name"
				className="input-and-select search-bar"
				value={searchInput}
				onChange={(event) => setSearchInput(event.target.value)}
			/>
			{/* <FilterSelect
        filterName="Challenge Rating"
        filterOptions={challengeRatings}
        value={selectedCR}
        onChange={(event) => setSelectedCR(event.target.value)}
      />
			<FilterSelect
        filterName="Alignment"
        filterOptions={alignments}
        value={selectedAlignment}
        onChange={(event) => setSelectedAlignment(event.target.value)}
      />
			<FilterSelect
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
			<input type="submit" value="Search" className="button" />
		</form>
	);
}

// function FilterSelect({ filterName, filterOptions, value, onChange }) {
// 	return (
// 		<select value={value} onChange={onChange} className="input-and-select">
// 			<option value="">-- {filterName} --</option>

// 			{filterOptions.map((filterItem) => (
// 				<option key={filterItem} value={filterItem}>
// 					{filterItem}
// 				</option>
// 			))}
// 		</select>
// 	);
// }
