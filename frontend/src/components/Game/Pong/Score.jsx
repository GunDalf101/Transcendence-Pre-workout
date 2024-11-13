import React from 'react';

const Score = ({ playerScore, computerScore, mode }) => (
  <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full bg-gray-900 p-4 border-2 border-yellow-400 rounded-md z-10 pixel-font mb-6">
    <div className="text-white text-lg md:text-2xl font-bold shadow-lg pixel-font">
      Player 1: {playerScore}
    </div>
    <div className="text-white text-lg md:text-2xl font-bold shadow-lg pixel-font">
      {mode === 'multiplayer' ? `Player 2: ${computerScore}` : `Computer: ${computerScore}`}
    </div>
  </div>
);

export default Score;
