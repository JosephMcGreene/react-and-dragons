import InfoHeader from "./InfoHeader";

export default function ActionsInfo({ monsterDetails }) {
	return (
		<article className="info-block">
			{monsterDetails ? (
				// Action component declared in this file, below
				<>
					<Action
						monsterInfo={monsterDetails}
						title="Actions:"
						index="actions"
					/>
				</>
			) : (
				""
			)}

			{monsterDetails.reactions ? (
				<>
					<Action
						monsterInfo={monsterDetails}
						title="Reactions:"
						index="reactions"
					/>
				</>
			) : (
				""
			)}

			{monsterDetails.special_abilities.length > 0 ? (
				<>
					<Action
						monsterInfo={monsterDetails}
						title="Special Abilities:"
						index="special_abilities"
					/>
				</>
			) : (
				""
			)}

			{monsterDetails.legendary_actions.length > 0 ? (
				<>
					<Action
						monsterInfo={monsterDetails}
						title="Legendary Actions:"
						index="legendary_actions"
					/>
					{console.log(monsterDetails.legendary_actions)}
				</>
			) : (
				""
			)}
		</article>
	);
}

function Action({ monsterDetails, title, index }) {
	return (
		<>
			<InfoHeader title={title} />
			{monsterDetails[index].map((action) => {
				return (
					<p key={action.name} className="actions-description">
						<strong>
							<em>{action.name}.</em>
						</strong>{" "}
						{action.desc}
					</p>
				);
			})}
		</>
	);
}
