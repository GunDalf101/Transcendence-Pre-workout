import React from 'react';

const GameController = ({ gameStarted, playerScore, computerScore, winningScore, onGameStart }) => {
  let message = '';
  if (!gameStarted) {
    if (playerScore >= winningScore) message = "Player Wins! Click to Restart";
    else if (computerScore >= winningScore) message = "Computer Wins! Click to Restart";
    else message = "Click to Start";
  }

  return (
    !gameStarted && (
      <div className="absolute text-white text-4xl" onClick={onGameStart}>
        {message}
      </div>
    )
  );
};

export default GameController;
