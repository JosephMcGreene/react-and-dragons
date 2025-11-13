export default function Actions({ monsterDetails, monsterAction }) {
  const filteredActions = monsterDetails.actions.filter(
    (action) => action.damage.length > 0
  );

  return (
    <div className="actions">
      <h3 className="encounter-actions-heading">Action Rolls:</h3>

      <ul className="encounter-action-list">
        {filteredActions.map((action, index) => (
          <li
            onClick={() => monsterAction(action)}
            key={action + index}
            className="action-btn"
          >
            {action.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
