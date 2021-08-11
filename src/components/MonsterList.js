import MonsterListItem from "./MonsterListItem";

function MonsterList({ monsterList, onClick }) {
  return (
    <section>
      <ul className="monster-list">
        {/* The following map renders a list of the monsters whose names begin with the letter the user clicked on. */}
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
