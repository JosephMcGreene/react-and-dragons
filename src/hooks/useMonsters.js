import { useState, useEffect } from "react";

export default function useMonsters() {
  const [loading, setLoading] = useState(false);
  const [masterMonsterList, setMasterMonsterList] = useState([]);
  const [filteredMonsterList, setFilteredMonsterList] = useState([]);
  const [monsterDetails, setMonsterDetails] = useState({});
  const [showMonsterCard, setShowMonsterCard] = useState(false);

  const monstersEndpoint = "/api/monsters";

  useEffect(() => {
    getMonsterList();
  }, []);

  /**
   * Retrieves an array of JSON objects with basic data on all DnD 5th edition base rulebook monsters. Each object's key-value pairs include
   *
   * index: {string} monster name, but all lower case
   * name: {string} monster name
   * url: {string} endpoint extension used to retrieve further details on the monster
   */
  async function getMonsterList() {
    try {
      setLoading(true);
      // prettier-ignore
      const monsterData = await fetch(`https://www.dnd5eapi.co${monstersEndpoint}`);
      const monstersJSON = await monsterData.json();

      //filteredMonsters is used to render the list, and the master list is used as reference, so both need the monster info
      setMasterMonsterList(monstersJSON.results);
      setFilteredMonsterList(monstersJSON.results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  /**
   * Retrieves a JSON object with detailed information on a monster specified using its API endpoint
   *
   * @param {string} monsterURL Endpoint that specifies which monster to request info about.
   */
  async function getMonsterDetails(monsterURL) {
    try {
      setLoading(true);
      const response = await fetch(`https://www.dnd5eapi.co${monsterURL}`);
      const details = await response.json();
      setMonsterDetails(details);
      setShowMonsterCard(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  /**
   * Takes in user-specified details about the monsters they want and filters the monsters that correspond to those details out of the master list of monsters.
   * @param {string}           filterType   Type of filter the user is searching, either alphabetical or challenge rating.
   * @param {string | number}  filterValue  Value of the filter type, a letter for alphabetical or number for challenge rating.
   * @returns
   */
  async function filterMonsters(filterType, filterValue) {
    if (filterType === "alphabet") {
      setLoading(true);
      setFilteredMonsterList(
        masterMonsterList.filter(
          (item) => item.index.charAt(0) === filterValue.toLowerCase()
        )
      );
      setLoading(false);
      return;
    }

    if (filterType === "challenge_rating") {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.dnd5eapi.co${monstersEndpoint}?${filterType}=${filterValue}`
        );
        const gottenMonsters = await response.json();

        setFilteredMonsterList(gottenMonsters.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
      return;
    }
  }

  return [
    masterMonsterList,
    filteredMonsterList,
    monsterDetails,
    showMonsterCard,
    getMonsterDetails,
    filterMonsters,
    setShowMonsterCard,
    loading,
  ];
}
