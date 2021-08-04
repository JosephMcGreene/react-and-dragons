import MonsterList from "./MonsterList";
import MonsterInfo from "./MonsterInfo";

function MainContent({ monsterList, monsterInfo, onClick }) {
  return (
    <main>
      {monsterList.length > 0 ? (
        <MonsterList monsterList={monsterList} onClick={onClick} />
      ) : (
        ""
      )}
      {monsterList.length > 0 ? <MonsterInfo monsterInfo={monsterInfo} /> : ""}
    </main>
  );
}

export default MainContent;
