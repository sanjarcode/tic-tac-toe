import React from "react";
import "./Board.css";
import Cell from "./Cell.js";

function Board() {
  return (
    <div id="board">
      {[...Array(9)].map(() => (
        <Cell sign="X" />
      ))}
    </div>
  );
}

export default Board;
