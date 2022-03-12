function SkillsList({ monsterInfo }) {
  /**
   * calculates and returns the modifier for each of the nosnter's skills
   * @param   {Number} skillValue    A number corresponding to the value of the skill in question, arguments derived from API data.
   * @return  {String} A positive or negative integer (or 0) corresponding to the modifier indicated by the raw skill number, represented as a string in case a plus sign needs to be visually added to the number.
   */
  function calculateModifier(skillValue) {
    let modifier = Math.floor((skillValue - 10) / 2);

    if (modifier > 0) {
      return `+${modifier}`;
    }
    if (modifier <= 0) {
      return `${modifier}`;
    }
  }

  return (
    <>
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
    </>
  );
}

export default SkillsList;
