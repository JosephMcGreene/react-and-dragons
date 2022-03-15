export default function MonsterList({ filteredMonList, onClick }) {
  return (
    <section>
      <ul className="monster-list">
        {filteredMonList.map((item) => {
          return (
            <MonsterListItem
              key={item.index}
              index={item.index}
              text={item.name}
              onClick={onClick}
            />
          );
        })}
      </ul>
    </section>
  );
}

function MonsterListItem({ text, index, onClick }) {
  return (
    <li onClick={() => onClick(index)}>
      <a href="#monsterScrollTo">{text}</a>
    </li>
  );
}
