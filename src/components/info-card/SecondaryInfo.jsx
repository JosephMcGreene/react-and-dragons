import InfoHeader from "./InfoHeader";

export default function SecondaryInfo({ monsterDetails }) {
	/**
	 * takes an array or object from a nested key/value pair in the monsterDetails object and parses its info to be rendered to the user.
	 * @param  {Object} json Detailed info about the monster that is nested as an item in the monsterDetails object
	 * @return {String} The text to be rendered
	 */
	function parseDOMText(json) {
		let domText = "";

		if (!json || json.length === 0) {
			domText = "None";
			return domText;
		}
		// Speed and Senses are presented as objects, not arrays:
		if (!json.length) {
			for (let prop in json) {
				let newProp = prop.replaceAll("_", " ");
				domText += ` ${newProp}, ${json[prop]};`;
			}
			return domText;
		}

		for (let index in json) {
			domText += ` ${json[index]};`;
		}
		return domText;
	}

	return (
		<article className="info-block">
			{monsterDetails ? (
				<InfoHeader title="Speed:" text={parseDOMText(monsterDetails.speed)} />
			) : (
				""
			)}

			{monsterDetails ? (
				<InfoHeader
					title="Senses:"
					text={parseDOMText(monsterDetails.senses)}
				/>
			) : (
				""
			)}

			{monsterDetails ? (
				<InfoHeader title="Alignment:" text={monsterDetails.alignment} />
			) : (
				""
			)}

			{monsterDetails ? (
				<InfoHeader title="Type:" text={monsterDetails.type} />
			) : (
				""
			)}

			{monsterDetails.languages ? (
				<InfoHeader title="Languages:" text={monsterDetails.languages} />
			) : (
				<InfoHeader title="Languages:" text="None" />
			)}

			{monsterDetails ? (
				<InfoHeader title="Size:" text={monsterDetails.size} />
			) : (
				""
			)}

			<InfoHeader
				title="Damage Immunities:"
				text={parseDOMText(monsterDetails.damage_immunities)}
			/>

			<InfoHeader
				title="Resistances:"
				text={parseDOMText(monsterDetails.damage_resistances)}
			/>

			<InfoHeader
				title="Vulnerabilities:"
				text={parseDOMText(monsterDetails.damage_vulnerabilities)}
			/>

			{monsterDetails.condition_immunities.length > 0 ? (
				<>
					<InfoHeader title="Condition Immunities:" text="" />
					<ul>
						{monsterDetails.condition_immunities.map((immunity) => {
							return <li key={immunity.name}>{immunity.name}</li>;
						})}
					</ul>
				</>
			) : (
				<InfoHeader title="Condition Immunities:" text="None" />
			)}

			{monsterDetails.proficiencies.length > 0 ? (
				<>
					<InfoHeader title="Proficiencies:" text="" />
					<ul>
						{monsterDetails.proficiencies.map((pro) => {
							return (
								<li key={pro.proficiency.index}>
									{pro.proficiency.name} +{pro.value}
								</li>
							);
						})}
					</ul>
				</>
			) : (
				<InfoHeader title="Proficiencies:" text="None" />
			)}
		</article>
	);
}
