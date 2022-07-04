import PrimaryInfo from "./PrimaryInfo";
import SecondaryInfo from "./SecondaryInfo";
import ActionsInfo from "./ActionsInfo";

export default function MonsterInfoCard({ monsterDetails }) {
	return (
		<section className="monster-info-card">
			<h2 className="monster-name">{monsterDetails.name}</h2>
			{monsterDetails.index ? (
				<div className="core-info">
					<PrimaryInfo monsterInfo={monsterDetails} />
					<SecondaryInfo monsterInfo={monsterDetails} />
					<ActionsInfo monsterInfo={monsterDetails} />
				</div>
			) : (
				""
			)}
		</section>
	);
}
