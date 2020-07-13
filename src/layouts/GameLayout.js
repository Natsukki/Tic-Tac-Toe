import React, {useCallback, useEffect, useState} from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto",
};

const GameLayout = ({}) => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [state, setState] = useState(null);


  const handleClick = useCallback((cellIndex) => {
    const win = winner(cells);
    if (cells[cellIndex] || win)
       return;
    const toset = currentPlayer ? "😈" : "😎";
    let cpy = [...cells];
    cpy[cellIndex] = toset;
    setCurrentPlayer(!currentPlayer);
    setCells(cpy);
  }, [cells, currentPlayer]);

  useEffect(() => {
    const win = winner(cells);
    const draw = cells.some(function (el) {
      return el == null;
    });

    if (!draw)
    {
      setState("Ain't no winner here, it's a draw !")
      return;
    }

    if (win)
    {
      const toset = currentPlayer ? "2" : "1";
      setState("Player " + toset + " has won !");
      return;
    }
  });

  function winner(cells) {
    const possibleLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    // go over all possibly winning lines and check if they consist of only X's/only O's
    for (let i = 0; i < possibleLines.length; i++) {
      const [a, b, c] = possibleLines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  }

  return (
    <div style={gameLayoutStyle} >
      <Board onClickCell={(cellIndex) => handleClick(cellIndex)} cells={cells}/>
      <GameInfo gameState={state} currentPlayer={currentPlayer} />
    </div>
  );
};
export default GameLayout;
