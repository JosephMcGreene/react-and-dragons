function MonsterInfo({ monsterInfo }) {
  function calculateModifier(skill) {
    let modifier = Math.floor((skill - 10) / 2);

    if (modifier > 0) {
      return `+${modifier}`;
    }
    if (modifier <= 0) {
      return modifier;
    }
  }

  return (
    <section id="monster-info">
      {monsterInfo ? <h2>Name: {monsterInfo.name}</h2> : ""}
      {monsterInfo ? <h4>Alignment: {monsterInfo.alignment}</h4> : ""}
      {monsterInfo ? <h4>Type: {monsterInfo.type}</h4> : ""}
      {monsterInfo ? (
        <h4>Challenge Rating: {monsterInfo.challenge_rating}</h4>
      ) : (
        ""
      )}
      {monsterInfo ? <h4>Armor Class: {monsterInfo.armor_class}</h4> : ""}
      {monsterInfo ? (
        <h4 className="skills-heading">
          <u>Skills</u>
        </h4>
      ) : (
        ""
      )}
      <ul className="monster-info-list">
        {monsterInfo ? (
          <li>
            Strength: {monsterInfo.strength} (
            {calculateModifier(monsterInfo.strength)})
          </li>
        ) : (
          ""
        )}
        {monsterInfo ? (
          <li>
            Dexterity: {monsterInfo.dexterity} (
            {calculateModifier(monsterInfo.dexterity)})
          </li>
        ) : (
          ""
        )}
        {monsterInfo ? (
          <li>
            Constitution: {monsterInfo.constitution} (
            {calculateModifier(monsterInfo.constitution)})
          </li>
        ) : (
          ""
        )}
        {monsterInfo ? (
          <li>
            Intelligence: {monsterInfo.intelligence} (
            {calculateModifier(monsterInfo.intelligence)})
          </li>
        ) : (
          ""
        )}
        {monsterInfo ? (
          <li>
            Wisdom: {monsterInfo.wisdom} (
            {calculateModifier(monsterInfo.wisdom)})
          </li>
        ) : (
          ""
        )}
        {monsterInfo ? (
          <li>
            Charisma: {monsterInfo.charisma} (
            {calculateModifier(monsterInfo.charisma)})
          </li>
        ) : (
          ""
        )}
      </ul>
      {monsterInfo ? <h4>Languages: {monsterInfo.languages}</h4> : ""}
    </section>
  );
}

export default MonsterInfo;
