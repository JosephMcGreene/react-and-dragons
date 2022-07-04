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
		<ul className="monster-skills-list">
			{monsterDetails ? (
				<li>
					Strength: {monsterDetails.strength} (
					{calculateModifier(monsterDetails.strength)})
				</li>
			) : (
				""
			)}
			{monsterDetails ? (
				<li>
					Dexterity: {monsterDetails.dexterity} (
					{calculateModifier(monsterDetails.dexterity)})
				</li>
			) : (
				""
			)}
			{monsterDetails ? (
				<li>
					Constitution: {monsterDetails.constitution} (
					{calculateModifier(monsterDetails.constitution)})
				</li>
			) : (
				""
			)}
			{monsterDetails ? (
				<li>
					Intelligence: {monsterDetails.intelligence} (
					{calculateModifier(monsterDetails.intelligence)})
				</li>
			) : (
				""
			)}
			{monsterDetails ? (
				<li>
					Wisdom: {monsterDetails.wisdom} (
					{calculateModifier(monsterDetails.wisdom)})
				</li>
			) : (
				""
			)}
			{monsterDetails ? (
				<li>
					Charisma: {monsterDetails.charisma} (
					{calculateModifier(monsterDetails.charisma)})
				</li>
			) : (
				""
			)}
		</ul>
	);
}
