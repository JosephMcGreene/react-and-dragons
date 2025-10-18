/**
 * takes an array or object from a nested key/value pair in the monsterDetails object and parses its info to be rendered to the user.
 * @param  {object} json Detailed info about the monster that is nested as an item in the monsterDetails object
 * @return {string}      The text to be rendered
 */
export function parseDOMText(json) {
  let domText = "";

  if (!json || json.length === 0) {
    domText = "None";
    return domText;
  }
  // Speed and Senses are presented as objects, not arrays:
  if (!json.length) {
    for (let prop in json) {
      let newProp = prop.replaceAll("_", " ");
      domText += `${newProp}, ${json[prop]}\n`;
    }
    return domText;
  }

  if (typeof json === "string") {
    let lineBreak = json.replaceAll(", ", "\n");
    domText = `${lineBreak}`;
    return domText;
  }

  for (let index in json) {
    domText += `${json[index]}\n`;
  }
  return domText;
}

/**
 * calculates and returns the modifier for each of the monster's skills
 * @param   {Number} skillValue    A number corresponding to the value of the skill in question, arguments derived from API data.
 * @return  {String} A positive or negative integer (or 0) corresponding to the modifier indicated by the raw skill number, represented as a string in case a plus sign needs to be visually added to the number.
 */
export function modifierFor(skillValue) {
  let modifier = Math.floor((skillValue - 10) / 2);

  if (modifier > 0) {
    return `+${modifier}`;
  }
  if (modifier <= 0) {
    return `${modifier}`;
  }
}
