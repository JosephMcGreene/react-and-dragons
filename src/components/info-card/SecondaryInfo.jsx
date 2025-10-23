export default function SecondaryInfo({ monsterDetails }) {
  const { speed, senses, proficiencies } = monsterDetails;

  return (
    <div className="secondary-info">
      <div>
        <dt className="info-term">Speed</dt>
        {Object.entries(speed).map((tuple) => (
          <dd>
            {tuple[0].replace("_", " ") || tuple[0]}: {tuple[1]}
          </dd>
        ))}
      </div>

      <div>
        <dt className="info-term">Senses</dt>
        {Object.entries(senses).map((tuple) => (
          <dd>
            {tuple[0].replace("_", " ") || tuple[0]}: {tuple[1]}
          </dd>
        ))}
      </div>

      <div>
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
