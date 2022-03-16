// ! Overall Goals:
// !   - [X]Responsive
// !   - [ ]All filters up and functional
// !   - [ ]Intuitive layout
// !   - [X]Reasonably visually appealing
// TODO !! 1. Add all needed info to info card component
// TODO !!    - Add proficiencies (probably to SecondaryInfo)
// TODO !! 2. Format layout to suit the additional info (See MonsterInfoCard.js)
// TODO Add functionality to all filters
// TODO Styles:
// TODO   - conditional classNames?
// TODO Error Handling

import React, { useState, useEffect } from "react";
import "./scss/App.scss";
import SearchBar from "./components/SearchBar";
import FilterForm from "./components/FilterForm";
import MainContent from "./components/MainContent";

export default function App() {
  const [monsterData, setMonsterData] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const dndAPI = "https://www.dnd5eapi.co";
  const monstersUrl = "/api/monsters/";

  useEffect(() => {
    /**
     * Fetches a list of monsters from the D&D 5th Edition API and stores the info in state as monsterData
     */
    async function getMonsters() {
      const response = await fetch(`${dndAPI}${monstersUrl}`);
      const monstersList = await response.json();

      setMonsterData(monstersList.results);
    }
    getMonsters();
  }, []);

  /**
   * Filters out and returns an array of monsters whose names start with the letter the user clicks on in LetterList
   *
   * @param  {String} letter The letter that the names of the monsters in the new array will start with
   * @return  {Array} An array containing the filtered monsters
   */
  function filterByLetter(letter) {
    let monsByLetter = monsterData.filter(
      (item) => item.index.charAt(0) === letter.toLowerCase()
    );

    setFilteredMonsters(monsByLetter);
  }

  return (
    <div className="App">
      <h1>
        Dungeons & Dragons 5th Edition <br /> Monster Guide
      </h1>

      <SearchBar />
      <FilterForm monsterData={monsterData} onFilter={filterByLetter} />
      <MainContent
        filteredMonList={filteredMonsters}
        dndAPI={dndAPI}
        monstersUrl={monstersUrl}
      />
    </div>
  );
}
