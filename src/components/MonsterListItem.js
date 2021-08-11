function MonsterListItem({ text, index, onClick }) {
  return (
    <li onClick={() => onClick(index)}>
      <a href="#monsterScrollTo">{text}</a>
    </li>
  );
}

export default MonsterListItem;
