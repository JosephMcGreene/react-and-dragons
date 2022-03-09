import MonsterListItem from "./MonsterListItem";

function MonsterList({ filteredMonList, onClick }) {
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

export default MonsterList;
