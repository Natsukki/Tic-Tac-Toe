import React from "react";

const GameInfo = ({ gameState = null, currentPlayer = "unknown"}) => {
    if (gameState)
        return <h3>{gameState}</h3>;
    let player = "player 2";
    if (currentPlayer)
        player = "player 1";

    return <h3>It's your turn {player}</h3>;
}

export default GameInfo;
