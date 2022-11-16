export default function MonsterList({ filteredMonsters, openDetails }) {
  return (
    <section>
      <ul className="monster-list">
        {filteredMonsters.map((monster) => {
          return (
            // declared in this file, below
            <MonsterListItem
              key={monster.index}
              text={monster.name}
              monsterURL={monster.url}
              openDetails={openDetails}
            />
          );
        })}
      </ul>
    </section>
  );
}

function MonsterListItem({ text, monsterURL, openDetails }) {
  return <li onClick={() => openDetails(monsterURL)}>{text}</li>;
}
