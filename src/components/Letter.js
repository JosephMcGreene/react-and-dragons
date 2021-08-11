function Letter({ text, onClick }) {
  return (
    <li>
      <button onClick={() => onClick(text.toLowerCase())}>{text}</button>
    </li>
  );
}

export default Letter;
