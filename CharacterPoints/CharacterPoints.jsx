import React, { useState } from "react";
import ReactDOM from "react-dom";

function CharacterAttributes({ totalPoints }) {
  const [points, setPoints] = useState({
    health: 0,
    stamina: 0,
    speed: 0
  })

  const { health, stamina, speed } = points;

  const availablePoints = totalPoints - health - stamina - speed;

  const handleOnChange = (e) => {
    const id = e.target.id;
    const value = +e.target.value;
    const isNotMaxThreshold = value <= Math.floor(totalPoints * 0.7);
    const isTotalPointsOne = totalPoints === 1;

    switch (id) {
      case "health":
        if (isTotalPointsOne && value === 1 && stamina === 0 && speed === 0) {
          return setPoints({
            ...points,
            health: value
          })
        }
        if (isNotMaxThreshold && value + stamina + speed <= totalPoints) {
          return setPoints({
            ...points,
            health: value
          })
        }
      case "stamina":
        if (isTotalPointsOne && value === 1 && health === 0 && speed === 0) {
          return setPoints({
            ...points,
            stamina: value
          })
        }
        if (isNotMaxThreshold && value + speed + health <= totalPoints) {
          return setPoints({
            ...points,
            stamina: value
          })
        }
      case "speed":
        if (isTotalPointsOne && value === 1 && stamina === 0 && health === 0) {
          return setPoints({
            ...points,
            speed: value
          })
        }
        if (isNotMaxThreshold && value + health + stamina <= totalPoints) {
          return setPoints({
            ...points,
            speed: value
          })
        }
      default:
        return
    }
  }


  return (
    <div>
      Character stats: <span id="points">{availablePoints}</span> points left.
      <div>
        <input type="range" id="health" min="0" max={totalPoints} value={health} onChange={handleOnChange} step="1" />Health
      </div>
      <div>
        <input type="range" id="stamina" min="0" max={totalPoints} value={stamina} onChange={handleOnChange} step="1" />Stamina
      </div>
      <div>
        <input type="range" id="speed" min="0" max={totalPoints} value={speed} onChange={handleOnChange} step="1" />Speed
      </div>
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CharacterAttributes totalPoints={15} />);