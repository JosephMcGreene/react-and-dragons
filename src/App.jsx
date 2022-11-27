import React, { useState, useEffect } from "react";
//Internal
import "./scss/App.scss";
//Components
import FilterForm from "./components/FilterForm";
import MainContent from "./components/MainContent";

export default function App() {
  const [masterMonsterList, setMasterMonsterList] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const monstersEndpoint = "/api/monsters";

  useEffect(() => {
    const controller = new AbortController();

    /**
     * Retrieves an array of JSON objects with basic data on all DnD 5th edition base rulebook monsters. Object key-value pairs include
     * index: {String} monster name, but all lower case
     * name: {String} monster name
     * url: {String} endpoint extension used to retrieve further details on the monster
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

        //filteredMonsters is used to render the list, and the master list is used as reference, so both need the monster info
        setMasterMonsterList(monstersJSON.results);
        setFilteredMonsters(monstersJSON.results);
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
  }, []);

  async function filterMonsters(filterType, filterValue) {
    if (filterType === "alphabet") {
      setFilteredMonsters(
        masterMonsterList.filter(
          (item) => item.index.charAt(0) === filterValue.toLowerCase()
        )
      );
      return;
    }

    if (filterType === "challenge_rating") {
      const response = await fetch(
        `https://www.dnd5eapi.co${monstersEndpoint}?${filterType}=${filterValue}`
      );
      const gottenMonsters = await response.json();

      setFilteredMonsters(gottenMonsters.results);
      return;
    }
  }

  return (
    <div className="App">
      <h1 className="main-heading">
        Dungeons & Dragons 5th Edition <br /> Monster Guide
      </h1>

      <FilterForm
        onSubmit={(filterType, filterValue) =>
          filterMonsters(filterType, filterValue)
        }
      />

      <hr />

      <MainContent filteredMonsters={filteredMonsters} />
    </div>
  );
}
