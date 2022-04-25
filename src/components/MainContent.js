import React, { useState } from "react";

import MonsterList from "./MonsterList";
import MonsterInfoCard from "./info-card/MonsterInfoCard";

export default function MainContent({ filteredMonList }) {
  const [monsterDetails, setMonsterDetails] = useState({});

  async function getMonsterDetails(monsterIndex) {
    const response = await fetch(`${dndAPI}${monstersUrl}/${monsterIndex}`);
    const details = await response.json();

    console.log(details);
    setMonsterDetails(details);
  }

  return (
    <main className="main-content">
      {filteredMonList.length > 0 ? (
        <MonsterList
          filteredMonList={filteredMonList}
          onClick={getMonsterDetails}
        />
      ) : (
        ""
      )}
      {filteredMonList.length > 0 ? (
        <MonsterInfoCard monsterInfo={monsterDetails} />
      ) : (
        <span>Let's look up some Monsters!</span>
      )}
    </main>
  );
}
