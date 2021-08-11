import Letter from "./Letter";

function LetterList({ letters, onClick }) {
  return (
    <ul className="letter-list">
      {/* The following map renders the alphabet which the user clicks on to render a list of the monsters (MonsterList.js) whose name begin with the corresponding letter. */}
      {letters.map((letter) => (
        <Letter key={letter.toLowerCase()} text={letter} onClick={onClick} />
      ))}
    </ul>
  );
}

export default LetterList;
