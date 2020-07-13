import React, {useCallback, useState} from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

const cellStyleHover = {
  display: "block",
  backgroundColor: "grey",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

const Cell = ({player = null, onClickCell = () => {} }) => {
  const [style, setStyle] = useState(cellStyle);
  const setHover = useCallback(() => {setStyle(cellStyleHover)}, []);
  const setUsual = useCallback(() => {setStyle(cellStyle)}, []);
  return (
      <div
          onClick={onClickCell}
          onMouseOver={setHover}
          onMouseOut={setUsual}
          style={style}>
        {player}
      </div>
  );
}

export default Cell;
