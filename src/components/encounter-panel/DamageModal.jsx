import { useState } from "react";

export default function DamageModal({ takeDamage, resetHP, cancelDamage }) {
  const [damage, setDamage] = useState("");
  const [damageType, setDamageType] = useState("");
  const [isMagical, setIsMagical] = useState(false);

  // prettier-ignore
  const damageTypes = ["acid", "bludgeoning", "cold", "fire", "force", "lightning", "necrotic", "piercing", "poison", "psychic", "radiant", "slashing", "thunder"];

  function handleDamageSubmit(event) {
    event.preventDefault();
    if (damageType === "") return alert("Don't forget a damage type!");
    takeDamage({ damage, damageType, weaponIsMagical: isMagical });
  }

  return (
    <form
      className="modal-content damage-modal"
      onSubmit={(e) => handleDamageSubmit(e)}
    >
      <div className="damage-number">
        <label htmlFor="damageNumber">Damage Given:</label>
        <input
          value={damage}
          onChange={(e) => setDamage(e.target.value)}
          type="number"
          id="damageNumber"
          placeholder="Negatives heal"
        />
      </div>

      <div className="damage-type">
        <label htmlFor="damageType">Damage Type:</label>
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
      </div>

      <div className="magic-checkbox">
        <input
          type="checkbox"
          checked={isMagical}
          onChange={(e) => setIsMagical(e.target.checked)}
          name="magical"
          id="magical"
        />{" "}
        <label htmlFor="magical">Magical Weapon</label>
      </div>

      <div className="buttons">
        <button type="submit">Apply Damage/Heal</button>

        <button type="button" onClick={resetHP}>
          Reset Hit Points
        </button>

        <button type="button" onClick={cancelDamage}>
          Cancel
        </button>
      </div>
    </form>
  );
}
