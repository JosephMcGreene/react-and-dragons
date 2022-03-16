import SkillsList from "./SkillsList";

export default function PrimaryInfo({ monsterInfo, parseDOMText }) {
  return (
    <article>
      {monsterInfo ? (
        <h4>
          Hit Points: {monsterInfo.hit_points} ({monsterInfo.hit_dice})
        </h4>
      ) : (
        ""
      )}
      {monsterInfo ? <h4>Armor Class: {monsterInfo.armor_class}</h4> : ""}
      {monsterInfo ? (
        <h4>Challenge Rating: {monsterInfo.challenge_rating}</h4>
      ) : (
        ""
      )}

      <SkillsList monsterInfo={monsterInfo} />
    </article>
  );
}