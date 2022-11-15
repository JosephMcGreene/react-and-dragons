import React, { useState } from "react";

import MonsterList from "./MonsterList";
import MonsterInfoCard from "./info-card/MonsterInfoCard";

export default function MainContent({ monsterList }) {
  const [monsterDetails, setMonsterDetails] = useState({});

  return (
    <main className="main-content">
      {monsterList ? <MonsterList filteredMonsters={monsterList} /> : ""}
    </main>
  );
}
