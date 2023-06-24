import React, { useState, useEffect } from "react";
//Internal
import "./scss/App.scss";
//Components
import FilterForm from "./components/FilterForm";
import MainContent from "./components/MainContent";
import LoadingSpinner from "./components/LoadingSpinner";
import MonsterInfoCard from "./components/info-card/MonsterInfoCard";

export default function App() {
  const [masterMonsterList, setMasterMonsterList] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [showMonsterCard, setShowMonsterCard] = useState(false);
  const [monsterDetails, setMonsterDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const monstersEndpoint = "/api/monsters";

  useEffect(() => {
    const controller = new AbortController();

    /**
     * Retrieves an array of JSON objects with basic data on all DnD 5th edition base rulebook monsters. Each object's key-value pairs include
     * index: {String} monster name, but all lower case
     * name: {String} monster name
     * url: {String} endpoint extension used to retrieve further details on the monster
     */
    async function getMonsterList() {
      try {
        setLoading(true);
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
        setLoading(false);
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

  /**
   * Retrieves a JSON object with detailed information on a monster specified using its API endpoint
   * @param {String} monsterURL the endpoint that specifies which monster to request info about
   */
  async function getMonsterDetails(monsterURL) {
    try {
      const response = await fetch(`https://www.dnd5eapi.co${monsterURL}`);
      const details = await response.json();
      setMonsterDetails(details);
      setShowMonsterCard(true);
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * takes in user-specified details about the monsters they want and filters the monsters that correspond to those details out of the master list of monsters
   * @param {String} filterType             the type of filter the user is searching, either alphabetical or challenge rating
   * @param {String || Number} filterValue  the value of the filter type, a letter for alphabetical or number for challenge rating
   * @returns
   */
  async function filterMonsters(filterType, filterValue) {
    if (filterType === "alphabet") {
      setLoading(true);
      setFilteredMonsters(
        masterMonsterList.filter(
          (item) => item.index.charAt(0) === filterValue.toLowerCase()
        )
      );
      setLoading(false);
      return;
    }

    if (filterType === "challenge_rating") {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.dnd5eapi.co${monstersEndpoint}?${filterType}=${filterValue}`
        );
        const gottenMonsters = await response.json();

        setFilteredMonsters(gottenMonsters.results);
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
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

      <MainContent
        filteredMonsters={filteredMonsters}
        openDetails={(monsterURL) => getMonsterDetails(monsterURL)}
      />

      {showMonsterCard && (
        <MonsterInfoCard
          monsterDetails={monsterDetails}
          closeMonsterCard={() => setShowMonsterCard(false)}
        />
      )}

      {loading && <LoadingSpinner />}
    </div>
  );
}
