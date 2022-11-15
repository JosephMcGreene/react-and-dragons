export default function MonsterList({ filteredMonsters, openDetails }) {
  return (
    <section>
      <ul className="monster-list">
        {filteredMonsters.map((item) => {
          return (
            // declared in this file, below
            <MonsterListItem
              key={item.index}
              text={item.name}
              url={item.url}
              openDetails={openDetails}
            />
          );
        })}
      </ul>
    </section>
  );
}

function MonsterListItem({ text, url, openDetails }) {
  return <li onClick={() => openDetails(url)}>{text}</li>;
}
