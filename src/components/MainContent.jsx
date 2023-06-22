//Internal
import MonsterList from "./MonsterList";

export default function MainContent({ filteredMonsters, openDetails }) {
  return (
    <main className="main-content">
      <MonsterList
        filteredMonsters={filteredMonsters}
        openDetails={(monsterURL) => openDetails(monsterURL)}
      />
    </main>
  );
}
