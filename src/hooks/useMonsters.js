import { useState, useEffect } from "react";

export default function useMonsters() {
  const [loading, setLoading] = useState(false);
  const [masterMonsterList, setMasterMonsterList] = useState([]);
  const [filteredMonsterList, setFilteredMonsterList] = useState([]);

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
        setFilteredMonsterList(monstersJSON.results);
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
   * takes in user-specified details about the monsters they want and filters the monsters that correspond to those details out of the master list of monsters
   * @param {String} filterType             the type of filter the user is searching, either alphabetical or challenge rating
   * @param {String || Number} filterValue  the value of the filter type, a letter for alphabetical or number for challenge rating
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

  return [masterMonsterList, filteredMonsterList, filterMonsters, loading];
}
