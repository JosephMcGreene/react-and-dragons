export default function MonsterList({ filteredMonsters, onClick }) {
	return (
		<section>
			<ul className="monster-list">
				{filteredMonsters.map((item) => {
					return (
						// declared in this file, below:
						<MonsterListItem
							key={item.index}
							index={item.index}
							text={item.name}
							onClick={onClick}
						/>
					);
				})}
			</ul>
			<div id="monsterScrollTo"></div>
		</section>
	);
}

function MonsterListItem({ text, index, onClick }) {
	return (
		<li onClick={() => onClick(index)}>
			<a href="#monsterScrollTo">{text}</a>
		</li>
	);
}
