import SkillsList from "./SkillsList";

export default function PrimaryInfo({ monsterDetails }) {
  const { hit_points, hit_dice, armor_class, challenge_rating } =
    monsterDetails;

  return (
    <dl className="primary-info">
      <img
        src={`https://www.dnd5eapi.co${monsterDetails?.image}`}
        alt={`${monsterDetails.name}`}
        className="monster-img"
      />

      <div className="hp-ac-cr">
        <div className="hp">
          <dt className="primary-info-term">Hit Points: </dt>
          <dd>{`${hit_points} (${hit_dice})`}</dd>
        </div>

        <div className="ac-cr">
          <div>
            <dt className="primary-info-term">AC: </dt>
            <dd>{armor_class[0].value}</dd>
          </div>

          <div>
            <dt className="primary-info-term">CR: </dt>
            <dd>{challenge_rating}</dd>
          </div>
        </div>

        <SkillsList monsterDetails={monsterDetails} />
      </div>
    </dl>
  );
}
