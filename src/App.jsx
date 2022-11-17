import React, { useState, useEffect } from "react";
//Internal
import "./scss/App.scss";
//Components
import FilterForm from "./components/FilterForm";
import MainContent from "./components/MainContent";

export default function App() {
  const [monsterList, setMonsterList] = useState([]);

  const monstersEndpoint = "/api/monsters";

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
        const monsterData = await fetch(
          `https://www.dnd5eapi.co${monstersEndpoint}`,
          {
            signal: controller.signal,
          }
        );
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
      <MainContent filteredMonsters={monsterList} />
    </div>
  );
}
