import SkillsList from "./SkillsList";

export default function PrimaryInfo({ monsterDetails }) {
  const { hit_points, hit_dice, armor_class, challenge_rating } =
    monsterDetails;

  return (
    <dl className="primary-info">
      <span>
        <dt className="primary-info-term">Hit Points: </dt>
        <dd>{`${hit_points} (${hit_dice})`}</dd>
      </span>

      <span>
        <dt className="primary-info-term">AC: </dt>
        <dd>{armor_class[0].value}</dd>
      </span>

      <span>
        <dt className="primary-info-term">CR: </dt>
        <dd>{challenge_rating}</dd>
      </span>

      <SkillsList monsterDetails={monsterDetails} />
    </dl>
  );
}
