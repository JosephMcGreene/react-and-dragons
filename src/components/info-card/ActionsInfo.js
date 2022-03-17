export default function ActionsInfo({ monsterInfo }) {
  return (
    <article className="info-block">
      {monsterInfo ? (
        <>
          <h4>
            <strong>
              <u>Actions:</u>
            </strong>
          </h4>
          {monsterInfo.actions.map((action) => {
            return (
              <p key={action.name}>
                <strong>
                  <em>{action.name}.</em>
                </strong>{" "}
                {action.desc}
              </p>
            );
          })}
        </>
      ) : (
        ""
      )}

      {monsterInfo.reactions.length > 0 ? (
        <>
          <h4>
            <strong>
              <u>Reactions:</u>
            </strong>
          </h4>
          {monsterInfo.reactions.map((reaction) => {
            return (
              <p key={reaction.name}>
                <strong>
                  <em>{reaction.name}.</em>
                </strong>{" "}
                {reaction.desc}
              </p>
            );
          })}
        </>
      ) : (
        ""
      )}

      {monsterInfo.special_abilities.length > 0 ? (
        <>
          <h4>
            <strong>
              <u>Special Abilities:</u>
            </strong>
          </h4>
          {monsterInfo.special_abilities.map((ability) => {
            return (
              <p key={ability.name}>
                <strong>
                  <em>{ability.name}.</em>
                </strong>{" "}
                {ability.desc}
              </p>
            );
          })}
        </>
      ) : (
        ""
      )}

      {monsterInfo.legendary_actions.length > 0 ? (
        <>
          <h4>
            <strong>
              <u>Legendary Actions:</u>
            </strong>
          </h4>
          {monsterInfo.legendary_actions.map((action) => {
            return (
              <p key={action.name}>
                <strong>
                  <em>{action.name}.</em>
                </strong>{" "}
                {action.desc}
              </p>
            );
          })}
        </>
      ) : (
        ""
      )}
    </article>
  );
}
