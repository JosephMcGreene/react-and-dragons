import InfoHeader from "./InfoHeader";

export default function SkillsList({ monsterDetails }) {
  /**
   * calculates and returns the modifier for each of the monster's skills
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
    <div>
      <InfoHeader title="Skills" />
      <dl className="monster-skills-list">
        <dt>Strength: </dt>
        <dd>
          {monsterDetails.strength} (
          {calculateModifier(monsterDetails.strength)})
        </dd>
        <br />
        <dt>Dexterity: </dt>
        <dd>
          {monsterDetails.dexterity} (
          {calculateModifier(monsterDetails.dexterity)})
        </dd>
        <br />
        <dt>Constitution: </dt>
        <dd>
          {monsterDetails.constitution} (
          {calculateModifier(monsterDetails.constitution)})
        </dd>
        <br />
        <dt>Intelligence: </dt>
        <dd>
          {monsterDetails.intelligence} (
          {calculateModifier(monsterDetails.intelligence)})
        </dd>
        <br />
        <dt>Wisdom: </dt>
        <dd>
          {monsterDetails.wisdom} ({calculateModifier(monsterDetails.wisdom)})
        </dd>
        <br />
        <dt>Charisma: </dt>
        <dd>
          {monsterDetails.charisma} (
          {calculateModifier(monsterDetails.charisma)})
        </dd>
      </dl>
    </div>
  );
}
