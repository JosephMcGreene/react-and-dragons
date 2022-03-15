// TODO Styles:
// TODO   - !! Remake LetterList.js as a FilterSelect.js
// TODO   - conditional classNames?
// TODO   - animations?

// TODO See MonsterInfoCard.js
// TODO Add Search bar + more filter options

import React, { useState, useEffect } from "react";
import "./scss/App.scss";
import SearchBar from "./components/SearchBar";
import FilterForm from "./components/FilterForm";
import MainContent from "./components/MainContent";

function App() {
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
      let monstersList = await response.json();

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
      (item) => item.index.charAt(0) === letter
    );

    setFilteredMonsters(monsByLetter);
    return filteredMonsters;
  }

  return (
    <div className="App">
      <h1>
        Dungeons & Dragons 5th Edition <br /> Monster Guide
      </h1>

      <SearchBar />
      <FilterForm monsterData={monsterData} onChange={filterByLetter} />
      <MainContent
        filteredMonList={filteredMonsters}
        dndAPI={dndAPI}
        monstersUrl={monstersUrl}
      />
    </div>
  );
}

export default App;
