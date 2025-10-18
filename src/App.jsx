// Hooks
import useMonsters from "./hooks/useMonsters";
// Internal
import "./css/App.scss";
// Components
import FilterForm from "./components/FilterForm";
import LoadingSpinner from "./components/LoadingSpinner";
import MonsterList from "./components/MonsterList";
import MonsterInfoCard from "./components/info-card/MonsterInfoCard";

export default function App() {
  const [
    masterMonsterList,
    filteredMonsterList,
    monsterDetails,
    showMonsterCard,
    getMonsterDetails,
    filterMonsters,
    setShowMonsterCard,
    loading,
  ] = useMonsters();

  return (
    <div className="App">
      <main className="main-content">
        <h1 className="main-heading">
          Dungeons & Dragons 5<sup>th</sup> Edition Monster Guide
        </h1>

        <FilterForm
          onSubmit={(filterType, filterValue) =>
            filterMonsters(filterType, filterValue)
          }
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
    </div>
  );
}
