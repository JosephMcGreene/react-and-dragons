import SkillsList from "./SkillsList";

export default function PrimaryInfo({ monsterInfo }) {
  return (
    <article className="info-block">
      {monsterInfo ? (
        <h4 className="info-header">
          <strong>
            <u>Hit Points:</u>
          </strong>{" "}
          {monsterInfo.hit_points} ({monsterInfo.hit_dice}
        </h4>
      ) : (
        ""
      )}
      {monsterInfo ? (
        <h4 className="info-header">
          <strong>
            <u>Armor Class:</u>
          </strong>{" "}
          {monsterInfo.armor_class}
        </h4>
      ) : (
        ""
      )}
      {monsterInfo ? (
        <h4 className="info-header">
          <strong>
            <u>Challenge Rating:</u>
          </strong>{" "}
          {monsterInfo.challenge_rating}
        </h4>
      ) : (
        ""
      )}

      <SkillsList monsterInfo={monsterInfo} />
    </article>
  );
}
