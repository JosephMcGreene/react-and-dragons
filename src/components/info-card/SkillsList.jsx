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
    <>
      <InfoHeader title="Skills" />
      <ul className="monster-skills-list">
        <li>
          Strength: {monsterDetails.strength} (
          {calculateModifier(monsterDetails.strength)})
        </li>
        <li>
          Dexterity: {monsterDetails.dexterity} (
          {calculateModifier(monsterDetails.dexterity)})
        </li>
        <li>
          Constitution: {monsterDetails.constitution} (
          {calculateModifier(monsterDetails.constitution)})
        </li>
        <li>
          Intelligence: {monsterDetails.intelligence} (
          {calculateModifier(monsterDetails.intelligence)})
        </li>
        <li>
          Wisdom: {monsterDetails.wisdom} (
          {calculateModifier(monsterDetails.wisdom)})
        </li>
        <li>
          Charisma: {monsterDetails.charisma} (
          {calculateModifier(monsterDetails.charisma)})
        </li>
      </ul>
    </>
  );
}
