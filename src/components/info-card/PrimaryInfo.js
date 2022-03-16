import SkillsList from "./SkillsList";

export default function PrimaryInfo({ monsterInfo, parseObject, parseArray }) {
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

      {monsterInfo ? <h4>Speed: {parseObject(monsterInfo.speed)}</h4> : ""}
    </article>
  );
}
