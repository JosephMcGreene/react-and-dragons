import LoadingSpinner from "./LoadingSpinner";

export default function MonsterList({
  loading,
  filteredMonsters,
  openDetails,
}) {
  if (loading) return <LoadingSpinner />;

  return (
    <article>
      <ul className="monster-list">
        {filteredMonsters.map((monster) => {
          return (
            <li
              key={monster.index}
              className="monster-list-item"
              onClick={() => openDetails(monster.url)}
            >
              {monster.name}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
