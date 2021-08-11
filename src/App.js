import React, { useState } from "react";
import "./App.css";
import LetterList from "./components/LetterList";
import FilterForm from "./components/FilterForm";
import MainContent from "./components/MainContent";

function App() {
  const [monsterList, setMonsterList] = useState("");
  const [monsterInfo, setMonsterInfo] = useState("");

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const dndAPI = "https://www.dnd5eapi.co/api/";
  const monstersUrl = "monsters/";

  /**
   * fetches monster data from the The 5th Edition Dungeons and Dragons API -- https://www.dnd5eapi.co/ -- to be used in Letter.js to filter out all of the monsters whose names do not start with the letter the user clicks on.
   * @param   letter     String containing the letter used to filter out the appropriate monster names, argument derived from a prop dictating the text of the li in the LetterList
   * @return  [Array]    An array containing objects of the monster data (index, name, and url) of the filtered monster list
   */
  async function getMonstersByLetterName(letter) {
    const response = await fetch(`${dndAPI}${monstersUrl}`);
    const monstersData = await response.json();

    let filteredMonsters = monstersData.results.filter(
      (item) => item.index.charAt(0) === letter
    );

    // console.log(filteredMonsters);
    setMonsterList(filteredMonsters);
    return monsterList;
  }

  async function getMonstersByCR(challengeRating) {
    const response = await fetch(
      `${dndAPI}${monstersUrl}?challenge_rating=${challengeRating}`
    );
    const crData = await response.json();

    console.log(crData);
    setMonsterList(crData);
    return monsterList;
  }

  /**
   * fetches monster data from the The 5th Edition Dungeons and Dragons API -- https://www.dnd5eapi.co/ -- to be used in MonsterList.js to get detailed information about the monster the user specifies. The API provides a useful 'index' key for each of the monsters whose value matches the specific url of the corresponding monster, so this function uses that index to find the appropriate monster url.
   * @param   monsterIndex     String containing the index of the monster in question, argument derived from MonsterList.js's index prop which is taken from aforementioned monster index
   * @return  {object}    An object corresponding to the monster that was fetched from the API
   */
  async function getMonsterInfo(monsterIndex) {
    const infoResponse = await fetch(`${dndAPI}${monstersUrl}${monsterIndex}`);
    const monsterData = await infoResponse.json();

    console.log(monsterData);
    setMonsterInfo(monsterData);
    return monsterInfo;
  }

  return (
    <div className="App">
      <h1>5th Edition Dungeons & Dragons Monster Guide</h1>
      <LetterList letters={alphabet} onClick={getMonstersByLetterName} />
      <FilterForm onCRChange={getMonstersByCR} />
      <MainContent
        monsterList={monsterList}
        onClick={getMonsterInfo}
        monsterInfo={monsterInfo}
      />
    </div>
  );
}

export default App;
