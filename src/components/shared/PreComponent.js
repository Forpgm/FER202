import React from "react";
import "./PreComponent.css";
export function PreComponent({ PlayerDataFromMain }) {
  return (
    <div className="text-center" style={p}>
      {PlayerDataFromMain.map((player) => (
        <div className="card" key={player.id}>
          <img className="card-img" src={player.avt_url} alt={player.name} />
          <p className="card-info">{player.name}</p>
          <p style={{ backgroundColor: "black" }}>
            <button className="btn btn-dark btn-sm my-1">Detail</button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default PreComponent;
const p = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
