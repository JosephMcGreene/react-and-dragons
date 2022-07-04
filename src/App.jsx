// ! Overall Goals:
// !   - [X]Responsive
// !   - [ ]All filters up and functional
// !   - [ ]Intuitive layout
// !   - [X]Reasonably visually appealing
// TODO Add functionality to Search Bar
// TODO Add functionality to all filters, see FilterForm.js
// TODO Styles:
// TODO   - conditional classNames?
// TODO Error Handling

import React, { useState, useEffect } from "react";
//Internal
import "./scss/App.scss";
// Components
import FilterForm from "./components/FilterForm";
import MainContent from "./components/MainContent";

export default function App() {
	const dndAPI = "https://www.dnd5eapi.co";
	const monstersUrl = "/api/monsters";

	const [monsterList, setMonsterList] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState([]);
	const [accumulatedMonsters, setAccumulatedMonsters] = useState([]);

	useEffect(() => {
		/**
		 * Fetches a list of monsters from the D&D 5th Edition API and stores the info in state as monsterList
		 */
		async function getMonsterList() {
			const listResponse = await fetch(`${dndAPI}${monstersUrl}`);
			const monsterJSON = await listResponse.json();
			await setMonsterList(monsterJSON.results);
		}
		try {
			getMonsterList();
		} catch (error) {
			console.error(error.message);
		}
	}, []);

	function search(searchInput) {
		let searchedMonsters = [];

		if (searchInput.length === 1) {
			searchedMonsters = monsterList.filter((listItem) => {
				return listItem.index.charAt(0) === searchInput.toLowerCase();
			});
		} else {
			searchedMonsters = monsterList.filter((listItem) => {
				return listItem.index === searchInput.toLowerCase();
			});
		}

		setFilteredMonsters(searchedMonsters);
	}

	function addAccumulatedMonster(monster) {
		setAccumulatedMonsters([...accumulatedMonsters, monster]);
	}

	return (
		<div className="App">
			<h1>
				Dungeons & Dragons 5th Edition <br /> Monster Guide
			</h1>

			<FilterForm onSearch={search} />
			<MainContent
				filteredMonsters={filteredMonsters}
				addAccumulatedMonster={addAccumulatedMonster}
				accumulatedMonsters={accumulatedMonsters}
			/>
		</div>
	);
}
