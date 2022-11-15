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
  const monstersUrl = "/api/monsters";

  const [monsterList, setMonsterList] = useState([]);
  const [monsterDetails, setMonsterDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMonsterList();
  }, []);

  async function getMonsterList() {
    setLoading(true);
    const monsterData = await fetch(`${dndAPI}${monstersUrl}`);
    const monstersJSON = await monsterData.json();
    setMonsterList(monstersJSON.results);
    setLoading(false);
  }

  async function getMonsterDetails(url) {
    const response = await fetch(`${dndAPI}${url}`);
    const details = await response.json();
    setMonsterDetails(details);
  }

  return (
    <div className="App">
      <h1>
        Dungeons & Dragons 5th Edition <br /> Monster Guide
      </h1>

      <FilterForm
        monsterList={monsterList}
        onSearch={(filteredMonsters) => setMonsterList(filteredMonsters)}
      />
      <MainContent
        filteredMonsters={monsterList}
        monsterDetails={monsterDetails}
        getMonsterDetails={(url) => getMonsterDetails(url)}
      />
    </div>
  );
}
