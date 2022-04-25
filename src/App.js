// ! Overall Goals:
// !   - [X]Responsive
// !   - [ ]All filters up and functional
// !   - [ ]Intuitive layout
// !   - [X]Reasonably visually appealing
// TODO Add functionality to Search Bar
// TODO Add functionality to all filters, see FilterForm.js
// TODO Styles:
// TODO   - conditional classNames?
// TODO Error Handling

import React, { useState, useEffect } from "react";
import "./scss/App.scss";
import SearchBar from "./components/SearchBar";
import FilterForm from "./components/FilterForm";
import MainContent from "./components/MainContent";

export default function App() {
  const dndAPI = "https://www.dnd5eapi.co";
  const monstersUrl = "/api/monsters";

  const [monsterList, setMonsterList] = useState([]);
  useEffect(() => {
    /**
     * Fetches a list of monsters from the D&D 5th Edition API and stores the info in state as monsterList
     */
    async function getMonsterList() {
      const listResponse = await fetch(`${dndAPI}${monstersUrl}`);
      const monsterJSON = await listResponse.json();
      await setMonsterList(monsterJSON.results);
    }
    getMonsterList();
  }, []);

  /**
   * Uses the monsterList to fetch data for and create a master array of all detailed info for every monster on the API.
   */
  const [monsterData, setMonsterData] = useState([]);
  useEffect(() => {
    let bigMonArray = [];
    monsterList.forEach(async (monster) => {
      const response = await fetch(`${dndAPI}${monster.url}`);
      const data = await response.json();
      await bigMonArray.push(data);
    });
    setMonsterData(bigMonArray);
  }, [monsterList]);

  const [filteredMonsters, setFilteredMonsters] = useState([]);

  /**
   * Filters out and returns an array of monsters whose names start with the letter the user clicks on in the alphabet filter
   *
   * @param  {Object} filters The letter that the names of the monsters in the new array will start with
   * @return  {Array} An array containing the filtered monsters
   */
  function filter(filters) {
    let newMonArray = [];
    let monsterKeys = Object.keys(filters);
    let monsterValues = Object.values(filters);

    for (let i = 0; i <= monsterData.length; i++) {
      for (const property in monsterData[i]) {
        if (
          monsterKeys.includes(property) &&
          monsterValues.includes(monsterData[i][property]) &&
          !newMonArray.includes(monsterData[i])
        ) {
          newMonArray.push(monsterData[i]);
        }
      }
    }

    setFilteredMonsters(newMonArray);
    console.log(newMonArray);
  }

  return (
    <div className="App">
      <h1>
        Dungeons & Dragons 5th Edition <br /> Monster Guide
      </h1>

      <SearchBar />
      <FilterForm onFilter={filter} />
      <MainContent filteredMonList={filteredMonsters} />
    </div>
  );
}
