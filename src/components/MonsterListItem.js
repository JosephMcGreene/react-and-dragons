function MonsterListItem({ text, index, onClick }) {
  return (
    <li onClick={() => onClick(index)}>
      <a href="#monster-name">{text}</a>
    </li>
  );
}

export default MonsterListItem;
