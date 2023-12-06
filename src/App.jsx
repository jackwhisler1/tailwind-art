import React from "react";
import Quadrant from "./components/Piece";
export default function App() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-screen">
      <Quadrant />
      <Quadrant />
      <Quadrant />
      <Quadrant />
    </div>
  );
}
