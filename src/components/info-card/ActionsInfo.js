import InfoHeader from "./InfoHeader";

export default function ActionsInfo({ monsterInfo }) {
  return (
    <article className="info-block">
      {monsterInfo ? (
        <>
          <Action monsterInfo={monsterInfo} title="Actions:" index="actions" />
        </>
      ) : (
        ""
      )}

      {monsterInfo.reactions ? (
        <>
          <Action
            monsterInfo={monsterInfo}
            title="Reactions:"
            index="reactions"
          />
        </>
      ) : (
        ""
      )}

      {monsterInfo.special_abilities.length > 0 ? (
        <>
          <Action
            monsterInfo={monsterInfo}
            title="Special Abilities:"
            index="special_abilities"
          />
        </>
      ) : (
        ""
      )}

      {monsterInfo.legendary_actions.length > 0 ? (
        <>
          <Action
            monsterInfo={monsterInfo}
            title="Legendary Actions:"
            index="legendary_actions"
          />
          {console.log(monsterInfo.legendary_actions)}
        </>
      ) : (
        ""
      )}
    </article>
  );
}

function Action({ monsterInfo, title, index }) {
  return (
    <>
      <InfoHeader title={title} />
      {monsterInfo[index].map((action) => {
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
