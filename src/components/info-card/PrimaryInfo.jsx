import SkillsList from "./SkillsList";
import InfoHeader from "./InfoHeader";

export default function PrimaryInfo({ monsterDetails }) {
  return (
    <>
      <InfoHeader title="Hit Points:" />
      <dd>
        {monsterDetails.hit_points + " (" + monsterDetails.hit_dice + ")"}
      </dd>

      <InfoHeader title="Armor Class:" />
      <dd>{monsterDetails.armor_class}</dd>

      <InfoHeader title="Challenge Rating:" />
      <dd>{monsterDetails.challenge_rating}</dd>

      <SkillsList monsterDetails={monsterDetails} />
    </>
  );
}
