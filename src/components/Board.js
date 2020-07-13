import React from "react";
import Cell from "./Cell";

const boardStyle = {
  display: "grid",
  width: "600px",
  grid: "auto-flow dense / 1fr 1fr 1fr",
  gridAutoRows: "auto"
};

const Board = ({ cells = [], onClickCell = () => {} }) => (
  <div style={boardStyle}>
    {cells.map((c, i) => (
      <Cell
      key={i}
      player={c}
      onClickCell={() => onClickCell(i)}
      />
    ))}
  </div>
);

export default Board;
