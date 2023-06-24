export default function DamageModal() {
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

  return (
    <form className="modal-content damage-modal">
      <label htmlFor="damageNumber">
        Damage Given:
        <input type="number" id="damageNumber" placeholder="Damage applied" />
      </label>

      <label htmlFor="damageType">
        Damage Type:
        <select id="damageType">
          <option value="">-- Select Type --</option>
          {damageTypes.map((type, index) => {
            return (
              <option key={type + index} value="type">
                {type}
              </option>
            );
          })}
        </select>
      </label>

      <label htmlFor="magical">
        <input type="checkbox" name="magical" id="magical" /> Magical
      </label>

      <button type="submit">Deal Damage</button>
    </form>
  );
}
