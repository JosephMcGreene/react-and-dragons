function MonsterInfoCard({ monsterInfo }) {
  /**
   * calculates and returns the modifier for each of the nosnter's skills
   * @param   {Number} skill    A number corresponding to the value of the skill in question, arguments derived from API data.
   * @return  {String} A positive or negative integer (or 0) corresponding to the modifier indicated by the raw skill number, represented as a string in case a plus sign needs to be visually added to the number.
   */
  function calculateModifier(skill) {
    let modifier = Math.floor((skill - 10) / 2);

    if (modifier > 0) {
      return `+${modifier}`;
    }
    if (modifier <= 0) {
      return `${modifier}`;
    }
  }

  return (
    <>
      {/* The sole purpose of this div is to provide a place for the user to be directed to when they render a monster's info for the first time since refresh, the anchor for which is in the MonsterListItem component. I'm sure there are other things I can do with some fancy JavaScript, but this is a benign, simple JSX solution, so sue me. */}
      <div id="monsterScrollTo"></div>
      <section id="monster-info">
        {monsterInfo ? <h2 id="monster-name">{monsterInfo.name}</h2> : ""}
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
        <ul className="monster-skills-list">
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
    </>
  );
}

export default MonsterInfoCard;
