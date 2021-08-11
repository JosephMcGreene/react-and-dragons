function VulnerSelect() {
  return (
    <select name="vulnerabilities" id="vulnerabilities" defaultValue>
      <option value="">-- Damage Vulnerabilities --</option>
      <option value="acid">Acid</option>
      <option value="bludgeoning">Bludgeoning</option>
      <option value="cold">Cold</option>
      <option value="fire">Fire</option>
      <option value="force">Force</option>
      <option value="lightning">Lightning</option>
      <option value="necrotic">Necrotic</option>
      <option value="piercing">Piercing</option>
      <option value="poison">Poison</option>
      <option value="psychic">Psychic</option>
      <option value="radiant">Radiant</option>
      <option value="slashing">Slashing</option>
      <option value="thunder">Thunder</option>
    </select>
  );
}

export default VulnerSelect;
