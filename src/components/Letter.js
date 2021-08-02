function Letter({ text, onClick }) {
  return <li onClick={() => onClick(text.toLowerCase())}>{text}</li>;
}

export default Letter;
