import React, { useState } from "react";

import MonsterList from "./MonsterList";
import MonsterInfoCard from "./info-card/MonsterInfoCard";

export default function MainContent({
	filteredMonsters,
	addAccumulatedMonster,
	accumulatedMonsters,
}) {
	const dndAPI = "https://www.dnd5eapi.co";
	const monstersUrl = "/api/monsters";

	const [monsterDetails, setMonsterDetails] = useState({});

	/**
	 * first checks to see if the user has clicked on the monster before, then if not, calls the API for the data for the monster the user has clicked on
	 * @param {String} monsterIndex the index property of the individual monster object the user wants
	 * @returns {Function}/{null}		Sets the info on the monster card to the appropriate info for the monster the user clicks, or null
	 */
	async function getMonsterDetails(monsterIndex) {
		let existingMon;
		if (accumulatedMonsters.length > 0) {
			existingMon = accumulatedMonsters.find((element, i) => {
				return element[i].index === monsterIndex;
			});
		}
		if (existingMon.index === monsterIndex) {
			return setMonsterDetails(existingMon);
		}

		const response = await fetch(`${dndAPI}${monstersUrl}/${monsterIndex}`);
		const details = await response.json();
		await setMonsterDetails(details);
		await addAccumulatedMonster(details);
	}

	return (
		<main className="main-content">
			{filteredMonsters.length > 0 ? (
				<MonsterList
					filteredMonsters={filteredMonsters}
					onClick={getMonsterDetails}
				/>
			) : (
				""
			)}
			{filteredMonsters.length > 0 ? (
				<MonsterInfoCard monsterDetails={monsterDetails} />
			) : (
				<span>Let's look up some Monsters!</span>
			)}
		</main>
	);
}
