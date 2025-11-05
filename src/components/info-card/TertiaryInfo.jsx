import Resistances from "./Resistances";

export default function TertiaryInfo({ monsterDetails }) {
  const { languages, alignment, type, size } = monsterDetails;
  const languagesArray = languages.split(", ");

  return (
    <div className="tertiary-info">
      <Resistances monsterDetails={monsterDetails} />

      <div className="other-info">
        <div>
          <dt className="info-term">Languages</dt>
          {languagesArray.map((language) => (
            <dd key={language}>{language}</dd>
          ))}
        </div>

        <div>
          <dt className="info-term">Alignment</dt>
          <dd>{alignment}</dd>
        </div>

        <div>
          <dt className="info-term">Type</dt>
          <dd>{type}</dd>
        </div>

        <div>
          <dt className="info-term">Size</dt>
          <dd>{size}</dd>
        </div>
      </div>
    </div>
  );
}
