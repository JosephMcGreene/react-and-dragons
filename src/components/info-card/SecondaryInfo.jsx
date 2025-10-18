import { parseDOMText } from "../../helpers";

export default function SecondaryInfo({ monsterDetails }) {
  const { alignment, speed, senses, type, languages, size, proficiencies } =
    monsterDetails;

  const sensesFormatted = Object.entries(senses);

  return (
    <div className="secondary-info">
      <span>
        <dt className="info-term">Speed: </dt>
        <dd>{parseDOMText(speed)}</dd>
      </span>

      <span>
        <dt className="info-term">Senses: </dt>
        {sensesFormatted.map((array) => {
          if (array[0].split("_").length > 1) {
            // format key to remove underscore
          }
          return (
            <dd>
              {array[0]}: {array[1]}
            </dd>
          );
        })}
      </span>

      <span>
        <dt className="info-term">Proficiences: </dt>
        {proficiencies.length > 0 ? (
          <>
            {proficiencies.map((pro) => (
              <dd>
                {pro.proficiency.name}: +{pro.value}
                <br />
              </dd>
            ))}
          </>
        ) : (
          <dd>None</dd>
        )}
      </span>
    </div>
  );
}
