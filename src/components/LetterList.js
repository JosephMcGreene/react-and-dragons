import Letter from "./Letter";

function LetterList({ letters, onClick }) {
  return (
    <ul className="letter-list">
      {letters.map((letter) => (
        <Letter key={letter.toLowerCase()} text={letter} onClick={onClick} />
      ))}
    </ul>
  );
}

export default LetterList;
