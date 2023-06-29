import { useState } from "react";

export default function DamageModal({ onDamage, onResetHP }) {
  const [damage, setDamage] = useState("");
  const [damageType, setDamageType] = useState("");
  const [isMagical, setIsMagical] = useState(false);

  const damageTypes = [
    "acid",
    "bludgeoning",
    "cold",
    "fire",
    "force",
    "lightning",
    "necrotic",
    "piercing",
    "poison",
    "psychic",
    "radiant",
    "slashing",
    "thunder",
  ];

  function handleDamageSubmit(e) {
    e.preventDefault();
    if (damageType === "") return alert("Don't forget a damage type");
    onDamage({ damage, damageType, weaponIsMagical: isMagical });
  }

  return (
    <form
      className="modal-content damage-modal"
      onSubmit={(e) => handleDamageSubmit(e)}
    >
      <label htmlFor="damageNumber">
        Damage Given:
        <input
          value={damage}
          onChange={(e) => setDamage(e.target.value)}
          type="number"
          id="damageNumber"
          placeholder="Negative Numbers Heal"
        />
      </label>

      <label htmlFor="damageType">
        Damage Type:
        <select
          value={damageType}
          onChange={(e) => setDamageType(e.target.value)}
          id="damageType"
        >
          <option value="">-- Select Type --</option>
          {damageTypes.map((type, index) => {
            return (
              <option key={type + index} value={type}>
                {type}
              </option>
            );
          })}
        </select>
      </label>

      <label htmlFor="magical">
        <input
          type="checkbox"
          checked={isMagical}
          onChange={(e) => setIsMagical(e.target.checked)}
          name="magical"
          id="magical"
        />{" "}
        Magical Weapon
      </label>

      <button type="submit">Apply Damage/Heal</button>
      <button type="button" onClick={() => onResetHP()}>
        Reset Hit Points
      </button>
    </form>
  );
}
