export default function ActionsInfo({ monsterDetails }) {
  return (
    <>
      {/* Action component declared in this file, below */}
      <Action
        monsterDetails={monsterDetails}
        title="Actions:"
        index="actions"
      />

      {monsterDetails.reactions ? (
        <Action
          monsterDetails={monsterDetails}
          title="Reactions:"
          index="reactions"
        />
      ) : (
        ""
      )}

      {monsterDetails.special_abilities.length > 0 ? (
        <Action
          monsterDetails={monsterDetails}
          title="Special Abilities:"
          index="special_abilities"
        />
      ) : (
        ""
      )}

      {monsterDetails.legendary_actions.length > 0 ? (
        <Action
          monsterDetails={monsterDetails}
          title="Legendary Actions:"
          index="legendary_actions"
        />
      ) : (
        ""
      )}
    </>
  );
}

function Action({ monsterDetails, title, index }) {
  return (
    <>
      <dt className="action-heading">{title} </dt>
      {monsterDetails[index].map((action) => {
        return (
          <span key={action.name} className="action-body">
            <dt className="action-title">{action.name}. </dt>
            <dd className="action-description">{action.desc}</dd>
          </span>
        );
      })}
    </>
  );
}
