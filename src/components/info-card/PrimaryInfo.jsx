import SkillsList from "./SkillsList";
import InfoHeader from "./InfoHeader";

export default function PrimaryInfo({ monsterDetails }) {
	return (
		<article className="info-block">
			{monsterDetails ? (
				<InfoHeader
					title="Hit Points:"
					text={
						monsterDetails.hit_points + " (" + monsterDetails.hit_dice + ")"
					}
				/>
			) : (
				""
			)}
			{monsterDetails ? (
				<InfoHeader title="Armor Class:" text={monsterDetails.armor_class} />
			) : (
				""
			)}
			{monsterDetails ? (
				<InfoHeader
					title="Challenge Rating:"
					text={monsterDetails.challenge_rating}
				/>
			) : (
				""
			)}

			<SkillsList monsterInfo={monsterDetails} />
		</article>
	);
}
