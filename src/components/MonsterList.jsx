export default function MonsterList({ filteredMonsters, openDetails }) {
  return (
    <section>
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
    </section>
  );
}
