import Resistances from "./Resistances";

export default function TertiaryInfo({ monsterDetails }) {
  const { languages, alignment, type, size } = monsterDetails;

  return (
    <div className="tertiary-info">
      <Resistances monsterDetails={monsterDetails} />

      <div className="other-info">
        <span>
          <dt className="info-term">Languages</dt>
          {languages.split(", ").map((lang) => (
            <dd>{lang}</dd>
          ))}
        </span>

        <span>
          <dt className="info-term">Alignment</dt>
          <dd>{alignment}</dd>
        </span>

        <span>
          <dt className="info-term">Type</dt>
          <dd>{type}</dd>
        </span>

        <span>
          <dt className="info-term">Size</dt>
          <dd>{size}</dd>
        </span>
      </div>
    </div>
  );
}
