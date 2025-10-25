export default function ActionsInfo({ monsterDetails }) {
  const { actions, reactions, special_abilities, legendary_actions } =
    monsterDetails;

  return (
    <dl>
      <dl className="action-list">
        <dt className="action-heading">Actions:</dt>

        {actions.map((action) => (
          <span key={action.name}>
            <dt className="action-title">{action.name}. </dt>
            <dd className="action-description">{action.desc}</dd>
          </span>
        ))}
      </dl>

      {reactions.length > 0 && (
        <dl className="action-list">
          <dt className="action-heading">Reactions:</dt>

          {reactions.map((action) => (
            <span key={action.name}>
              <dt className="action-title">{action.name}. </dt>
              <dd className="action-description">{action.desc}</dd>
            </span>
          ))}
        </dl>
      )}

      {special_abilities.length > 0 && (
        <dl className="action-list">
          <dt className="action-heading">Special Abilities:</dt>

          {special_abilities.map((action) => (
            <span key={action.name}>
              <dt className="action-title">{action.name}. </dt>
              <dd className="action-description">{action.desc}</dd>
            </span>
          ))}
        </dl>
      )}

      {legendary_actions.length > 0 && (
        <dl className="action-list">
          <dt className="action-heading">Legendary Actions:</dt>

          {legendary_actions.map((action) => (
            <span key={action.name}>
              <dt className="action-title">{action.name}. </dt>
              <dd className="action-description">{action.desc}</dd>
            </span>
          ))}
        </dl>
      )}
    </dl>
  );
}
