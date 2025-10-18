import { parseDOMText } from "../../helpers";

export default function TertiaryInfo({ monsterDetails }) {
  const { languages, alignment, type, size } = monsterDetails;

  return (
    <div className="tertiary-info">
      <span>
        <dt className="info-term">Languages: </dt>
        {languages ? <dd>{parseDOMText(languages)}</dd> : <dd>None</dd>}
      </span>

      <span>
        <dt className="info-term">Alignment: </dt>
        <dd>{alignment}</dd>
      </span>

      <span>
        <dt className="info-term">Type: </dt>
        <dd>{type}</dd>
      </span>

      <span>
        <dt className="info-term">Size: </dt>
        <dd>{size}</dd>
      </span>
    </div>
  );
}
