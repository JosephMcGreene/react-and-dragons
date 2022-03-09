import React, { useState } from "react";
import MonsterList from "./MonsterList";
import MonsterInfoCard from "./MonsterInfoCard";

function MainContent({ filteredMonList, dndAPI }) {
  const [monsterDetails, setMonsterDetails] = useState({});

  async function getMonsterDetails(monsterIndex) {
    const response = await fetch(`${dndAPI}/api/monsters/${monsterIndex}`);
    const details = await response.json();

    console.log(details);
    setMonsterDetails(details);
    return monsterDetails;
  }

  return (
    <main>
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
        ""
      )}
    </main>
  );
}

export default MainContent;
