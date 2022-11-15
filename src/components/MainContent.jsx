import React, { useState } from "react";

import MonsterList from "./MonsterList";
import MonsterInfoCard from "./info-card/MonsterInfoCard";

export default function MainContent({
  filteredMonsters,
  getMonsterDetails,
  monsterDetails,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="main-content">
      <MonsterList
        filteredMonsters={filteredMonsters}
        openDetails={(url) => {
          getMonsterDetails(url);
          setShowModal(true);
        }}
      />

      {showModal && (
        <MonsterInfoCard
          monsterDetails={monsterDetails}
          closeModal={() => setShowModal(false)}
        />
      )}
    </main>
  );
}
