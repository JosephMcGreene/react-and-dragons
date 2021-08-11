function AlignmentSelect() {
  return (
    <select name="alignment" id="alignment" defaultValue>
      <option value="">-- Alignment --</option>
      <option value="lawful good">Lawful Good</option>
      <option value="neutral good">Neutral Good</option>
      <option value="chaotic good">Chaotic Good</option>
      <option value="lawful neutral">Lawful Neutral</option>
      <option value="unaligned">Neutral (Unaligned)</option>
      <option value="chaotic neutral">Chaotic Neutral</option>
      <option value="lawful evil">Lawful Evil</option>
      <option value="neutral evil">Neutral Evil</option>
      <option value="chaotic evil">Chaotic Evil</option>
    </select>
  );
}

export default AlignmentSelect;
