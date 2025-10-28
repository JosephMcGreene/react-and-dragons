export default function SecondaryInfo({ monsterDetails }) {
  const { speed, senses, proficiencies } = monsterDetails;

  return (
    <div className="secondary-info">
      <div className="speed-senses">
        <div className="speed">
          <dt className="info-term">Speed</dt>
          {Object.entries(speed).map((keyValPair) => (
            <dd>
              {keyValPair[0].replace("_", " ") || keyValPair[0]},{" "}
              {keyValPair[1]}
            </dd>
          ))}
        </div>

        <div className="senses">
          <dt className="info-term">Senses</dt>
          {Object.entries(senses).map((keyValPair) => (
            <dd>
              {keyValPair[0].replace("_", " ") || keyValPair[0]},{" "}
              {keyValPair[1]}
            </dd>
          ))}
        </div>
      </div>

      <div className="proficiencies">
        <dt className="info-term">Proficiences</dt>
        {proficiencies.length > 0 ? (
          <>
            {proficiencies.map((proficiency) => (
              <dd>
                {proficiency.proficiency.name}: +{proficiency.value}
              </dd>
            ))}
          </>
        ) : (
          <dd>None</dd>
        )}
      </div>
    </div>
  );
}
