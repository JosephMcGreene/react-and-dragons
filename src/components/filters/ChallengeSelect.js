function ChallengeSelect() {
  const challengeRatings = [
    0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return (
    <select name="challenge-rating" id="challenge-rating" defaultValue>
      <option value="">-- Challenge Rating --</option>
      {challengeRatings.map((item) => (
        <option key={challengeRatings.indexOf(item)} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default ChallengeSelect;
