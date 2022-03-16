export default function ActionsInfo({ monsterInfo, parseDOMText }) {
  return (
    <article>
      {monsterInfo ? (
        <>
          <h4>Actions:</h4>
          {monsterInfo.actions.map((action) => {
            return (
              <>
                <h5>{action.name}</h5>
                <p>{action.desc}</p>
              </>
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
              <>
                <h5>{ability.name}</h5>
                <p>{ability.desc}</p>
              </>
            );
          })}
        </>
      ) : (
        <h4>Special Abilities: None</h4>
      )}

      {monsterInfo.legendary_actions.length > 0 ? (
        <>
          <h4>Legendary Actions:</h4>
          {monsterInfo.legendary_actions.map((action) => {
            return (
              <>
                <h5>{action.name}</h5>
                <p>{action.desc}</p>
              </>
            );
          })}
        </>
      ) : (
        <h4>Legendary Actions: None</h4>
      )}
    </article>
  );
}
