import { modifierFor } from "../../helpers";

export default function SkillsList({ monsterDetails }) {
  const { strength, dexterity, constitution, intelligence, wisdom, charisma } =
    monsterDetails;

  return (
    <dl className="skills-list">
      <span>
        <dt className="info-term">STR: </dt>
        <dd>
          {strength} ({modifierFor(strength)})
        </dd>
      </span>

      <span>
        <dt className="info-term">DEX: </dt>
        <dd>
          {dexterity} ({modifierFor(dexterity)})
        </dd>
      </span>

      <span>
        <dt className="info-term">CON: </dt>
        <dd>
          {constitution} ({modifierFor(constitution)})
        </dd>
      </span>

      <span>
        <dt className="info-term">INT: </dt>
        <dd>
          {intelligence} ({modifierFor(intelligence)})
        </dd>
      </span>

      <span>
        <dt className="info-term">WIS: </dt>
        <dd>
          {wisdom} ({modifierFor(wisdom)})
        </dd>
      </span>

      <span>
        <dt className="info-term">CHA: </dt>
        <dd>
          {charisma} ({modifierFor(charisma)})
        </dd>
      </span>
    </dl>
  );
}
