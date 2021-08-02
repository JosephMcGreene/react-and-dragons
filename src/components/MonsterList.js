import MonsterListItem from "./MonsterListItem";

function MonsterList({ monsterList, onClick }) {
  return (
    <section>
      <ul className="monster-list">
        {monsterList.map((item) => {
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
