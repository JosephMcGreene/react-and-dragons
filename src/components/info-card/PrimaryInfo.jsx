export default function PrimaryInfo({ monsterDetails }) {
  return (
    <>
      <div className="info-block">
        <span className="info-item">
          <dt className="info-heading">Hit Points: </dt>
          <dd>
            {monsterDetails.hit_points + " (" + monsterDetails.hit_dice + ")"}
          </dd>
        </span>
        <span className="info-item">
          <dt className="info-heading">Armor Class: </dt>
          {/* {console.log(monsterDetails.armor_class)} */}
          <dd>{monsterDetails.armor_class[0].value}</dd>
        </span>
        <span className="info-item">
          <dt className="info-heading">Challenge Rating: </dt>
          <dd>{monsterDetails.challenge_rating}</dd>
        </span>
      </div>
    </>
  );
}
