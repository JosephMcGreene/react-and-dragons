export default function SkillsList({ monsterDetails }) {
  const { strength, dexterity, constitution, intelligence, wisdom, charisma } =
    monsterDetails;

  /**
   * calculates and returns the modifier for each of the monster's skills.
   *
   * @param  {number} skillValue An integer corresponding to the value of the skill in question, arguments derived from API data.
   *
   * @return {string} A positive or negative integer (or 0) corresponding to the modifier indicated by the raw skill number, represented as a string in case a plus sign needs to be visually added to the number.
   */
  function modifierFor(skillValue) {
    let modifier = Math.floor((skillValue - 10) / 2);

    if (modifier > 0) {
      return `+${modifier}`;
    }
    if (modifier <= 0) {
      return `${modifier}`;
    }
  }

  return (
    <dl className="skills-list">
      <div>
        <dt className="info-term">STR:</dt>
        <dd>
          {strength} ({modifierFor(strength)})
        </dd>
      </div>

      <div>
        <dt className="info-term">DEX: </dt>
        <dd>
          {dexterity} ({modifierFor(dexterity)})
        </dd>
      </div>

      <div>
        <dt className="info-term">CON: </dt>
        <dd>
          {constitution} ({modifierFor(constitution)})
        </dd>
      </div>

      <div>
        <dt className="info-term">INT: </dt>
        <dd>
          {intelligence} ({modifierFor(intelligence)})
        </dd>
      </div>

      <div>
        <dt className="info-term">WIS: </dt>
        <dd>
          {wisdom} ({modifierFor(wisdom)})
        </dd>
      </div>

      <div>
        <dt className="info-term">CHA: </dt>
        <dd>
          {charisma} ({modifierFor(charisma)})
        </dd>
      </div>
    </dl>
  );
}
