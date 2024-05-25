import React, { useState } from "react";

export default function CountDemoFunc() {
  const [car, setCar] = useState({
    make: "Ford",
    model: "Mustang",
    year: 1967,
    color: "red",
  });
  const updateColor = (color) => {
    setCar({ ...car, color: color });
  };
  return (
    <div>
      <h1>My {car.model}</h1>
      <p>
        It is a {car.color} {car.make} car in {car.year}
      </p>
      <button onClick={() => updateColor("blue")}>set color to blue</button>
    </div>
  );
}
