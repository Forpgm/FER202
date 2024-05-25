import React from "react";
import { users } from "./shared/ListOfPlayers";
import "./PlayersWithMap.css";
import { useState } from "react";
export default function PlayersWithMap() {
  const [player, setPlayer] = useState([]);

  return (
    <div className="container" style={p}>
      {users.map((player) => (
        <div key={player.id} className="card text-center">
          <img src={player.img} alt={player.name} />
          <h2>{player.name}</h2>

          <button
            onClick={() => {
              setPlayer(player);
            }}
          >
            <a href="#pop-up1" id="openPopUp">
              Detail
            </a>
          </button>
        </div>
      ))}
      <div className="overlay" id="pop-up1">
        <div className="popup">
          <img src={player.img} alt={player.name} />
          <h2>{player.name}</h2>
          <a className="close" href="/">
            &times;
          </a>
          <div className="content">
            <p>{player.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
const p = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
