import FilterSelect from "./FilterSelect";

function FilterForm({ onChange }) {
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
  const alignments = [
    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "True Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil",
    "Chaotic Evil",
  ];
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
  const sizes = ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"];
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
  const damageTypes = [
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

  return (
    <form className="filter-form">
      <FilterSelect filterName="Alphabetical" filters={alphabet} />
      <FilterSelect filterName="Challenge Rating" filters={challengeRatings} />
      <FilterSelect filterName="Alignment" filters={alignments} />
      <FilterSelect filterName="Language" filters={languages} />
      <FilterSelect filterName="Size" filters={sizes} />
      <FilterSelect filterName="Type" filters={types} />
      <FilterSelect filterName="Vulnerabilities" filters={damageTypes} />
    </form>
  );
}

export default FilterForm;
