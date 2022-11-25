import { useState } from "react";
//Internal
import MonsterList from "./MonsterList";
import MonsterInfoCard from "./info-card/MonsterInfoCard";

export default function MainContent({ filteredMonsters }) {
  const [showMonsterCard, setShowMonsterCard] = useState(false);
  const [monsterDetails, setMonsterDetails] = useState({});

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

  return (
    <main className="main-content">
      <MonsterList
        filteredMonsters={filteredMonsters}
        openDetails={(monsterURL) => getMonsterDetails(monsterURL)}
      />

      {showMonsterCard && (
        <MonsterInfoCard
          monsterDetails={monsterDetails}
          closeMonsterCard={() => setShowMonsterCard(false)}
        />
      )}
    </main>
  );
}
