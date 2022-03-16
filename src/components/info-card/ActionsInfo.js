export default function ActionsInfo({ monsterInfo, parseDOMText }) {
  return (
    <article>
      {monsterInfo ? (
        <>
          <h4>Actions:</h4>
          {monsterInfo.actions.map((action) => {
            return (
              <article key={action.name}>
                <h5>{action.name}</h5>
                <p>{action.desc}</p>
              </article>
            );
          })}
        </>
      ) : (
        ""
      )}

      {monsterInfo.reactions.length > 0 ? (
        <>
          <h4>Reactions:</h4>
          {monsterInfo.reactions.map((reaction) => {
            return (
              <article key={reaction.name}>
                <h5>{reaction.name}</h5>
                <p>{reaction.desc}</p>
              </article>
            );
          })}
        </>
      ) : (
        ""
      )}

      {monsterInfo.special_abilities.length > 0 ? (
        <>
          <h4>Special Abilities:</h4>
          {monsterInfo.special_abilities.map((ability) => {
            return (
              <article key={ability.name}>
                <h5>{ability.name}</h5>
                <p>{ability.desc}</p>
              </article>
            );
          })}
        </>
      ) : (
        ""
      )}

      {monsterInfo.legendary_actions.length > 0 ? (
        <>
          <h4>Legendary Actions:</h4>
          {monsterInfo.legendary_actions.map((action) => {
            return (
              <article key={action.name}>
                <h5>{action.name}</h5>
                <p>{action.desc}</p>
              </article>
            );
          })}
        </>
      ) : (
        ""
      )}
    </article>
  );
}
