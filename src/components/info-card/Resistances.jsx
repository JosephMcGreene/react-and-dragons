import { parseDOMText } from "../../helpers";

export default function Resistances({ monsterDetails }) {
  const {
    damage_immunities,
    damage_resistances,
    damage_vulnerabilities,
    condition_immunities,
  } = monsterDetails;

  return (
    <div className="immunities-resistances">
      <span>
        <dt className="info-term">Damage Immunities: </dt>
        <dd>{parseDOMText(damage_immunities)}</dd>
      </span>

      <span>
        <dt className="info-term">Resistances: </dt>
        <dd>{parseDOMText(damage_resistances)}</dd>
      </span>

      <span>
        <dt className="info-term">Vulnerabilities: </dt>
        <dd>{parseDOMText(damage_vulnerabilities)}</dd>
      </span>

      <span>
        <dt className="info-term">Condition Immunities: </dt>
        {condition_immunities.length > 0 ? (
          <>
            {condition_immunities.map((immunity) => (
              <dd>
                {immunity.name}
                <br />
              </dd>
            ))}
          </>
        ) : (
          <dt>None</dt>
        )}
      </span>
    </div>
  );
}
