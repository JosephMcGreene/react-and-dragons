import useEncounterFeatures from "../../hooks/useEncounterFeatures";
import DamageModal from "./DamageModal";

export default function EncounterHitPoints({
  monsterDetails,
  damageModalShown,
  setDamageModalShown,
}) {
  const { hit_points } = monsterDetails;

  const [currentHitPoints, setCurrentHitPoints, dealDamage, , ,] =
    useEncounterFeatures(monsterDetails);

  function takeDamage(damageInfo) {
    dealDamage(damageInfo);
    setDamageModalShown(!damageModalShown);
  }

  function resetHP() {
    setCurrentHitPoints(hit_points);
    setDamageModalShown(!damageModalShown);
  }

  function cancelDamage() {
    setDamageModalShown(!damageModalShown);
  }

  return (
    <div className="encounter-hit-points">
      <h3>Hit Points:</h3>
      <button
        className="action-btn"
        onClick={() => setDamageModalShown(!damageModalShown)}
      >
        {currentHitPoints} / {hit_points}
      </button>

      {damageModalShown && (
        <DamageModal
          takeDamage={(damageInfo) => takeDamage(damageInfo)}
          resetHP={resetHP}
          cancelDamage={cancelDamage}
        />
      )}
    </div>
  );
}
