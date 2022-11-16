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
//Internal
import "./scss/App.scss";
//Components
import FilterForm from "./components/FilterForm";
import MainContent from "./components/MainContent";

export default function App() {
  const dndAPI = "https://www.dnd5eapi.co";
  const monstersEndpoint = "/api/monsters";

  const [monsterList, setMonsterList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    /**
     * Retrieves an array of JSON objects with basic data on all DnD 5th edition base rulebook monsters. Object key-value pairs include
     * index: {String}, monster name, but all lower case
     * name: {String}, monster name
     * url: {String} ext used to retrieve further details on the monster
     */
    async function getMonsterList() {
      try {
        const monsterData = await fetch(`${dndAPI}${monstersEndpoint}`, {
          signal: controller.signal,
        });
        const monstersJSON = await monsterData.json();

        setMonsterList(monstersJSON.results);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("successfully aborted");
        } else {
          console.error(err);
        }
      }
    }
    getMonsterList();

    return () => {
      controller.abort();
    };
  }, [monstersEndpoint]);

  return (
    <div className="App">
      <h1>
        Dungeons & Dragons 5th Edition <br /> Monster Guide
      </h1>

      <FilterForm
        monsterList={monsterList}
        onSearch={(filteredMonsters) => setMonsterList(filteredMonsters)}
      />
      <MainContent dndApi={dndAPI} filteredMonsters={monsterList} />
    </div>
  );
}
