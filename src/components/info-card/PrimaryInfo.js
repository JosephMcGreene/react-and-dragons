import SkillsList from "./SkillsList";
import InfoHeader from "./InfoHeader";

export default function PrimaryInfo({ monsterInfo }) {
  return (
    <article className="info-block">
      {monsterInfo ? (
        <InfoHeader
          title="Hit Points:"
          text={monsterInfo.hit_points + " (" + monsterInfo.hit_dice + ")"}
        />
      ) : (
        ""
      )}
      {monsterInfo ? (
        <InfoHeader title="Armor Class:" text={monsterInfo.armor_class} />
      ) : (
        ""
      )}
      {monsterInfo ? (
        <InfoHeader
          title="Challenge Rating:"
          text={monsterInfo.challenge_rating}
        />
      ) : (
        ""
      )}

      <SkillsList monsterInfo={monsterInfo} />
    </article>
  );
}
