function MonsterListItem({ text, index, onClick }) {
  return <li onClick={() => onClick(index)}>{text}</li>;
}

export default MonsterListItem;
