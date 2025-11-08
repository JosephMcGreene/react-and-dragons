// Hooks
import useMonsters from "./hooks/useMonsters";
// Internal
import "./css/App.scss";
// Components
import FilterForm from "./components/FilterForm";
import MonsterList from "./components/MonsterList";
import MonsterInfoCard from "./components/info-card/MonsterInfoCard";

export default function App() {
  const [
    filteredMonsterList,
    monsterDetails,
    showMonsterCard,
    getMonsterDetails,
    filterMonsters,
    setShowMonsterCard,
    loading,
  ] = useMonsters();

  return (
    <main className="main-content App">
      <h1 className="main-heading">
        Dungeons & Dragons 5<sup>th</sup> Edition Monster Guide
      </h1>

      <FilterForm
        // prettier-ignore
        onSubmit={(filterType, filterValue) => filterMonsters(filterType, filterValue)}
      />

      <hr />

      <MonsterList
        loading={loading}
        filteredMonsters={filteredMonsterList}
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
