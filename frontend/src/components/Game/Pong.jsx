import React, { useEffect, useRef, useState } from 'react';
import Ball from './Pong/Ball';
import Paddle from './Pong/Paddle';
import Score from './Pong/Score';
import Canvas from './Pong/Canvas';
import GameController from './Pong/GameController';

const Pong = ({ mode = 'AI' }) => {
  const WINNING_SCORE = 100;
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 400 });
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const canvasRef = useRef(null);
  const [playerY, setPlayerY] = useState(150);
  const [playerSpeed, setPlayerSpeed] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [ball, setBall] = useState({
    x: 400,
    y: 200,
    radius: 10,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
  });

  const paddleWidth = 10;
  const paddleHeight = 100;

  const computerSpeed = 4;
  const [computerY, setComputerY] = useState(150);
  const [player2Y, setPlayer2Y] = useState(150);
  const [player2Speed, setPlayer2Speed] = useState(0);

  const checkCollisionWithPaddle = (ball, paddle) => {
    const pointsToCheck = [];
  
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * 2 * Math.PI;
      const x = ball.x + ball.radius * Math.cos(angle);
      const y = ball.y + ball.radius * Math.sin(angle);
      pointsToCheck.push({ x, y });
    }
  
    for (let point of pointsToCheck) {
      if (
        point.x >= paddle.x && point.x <= paddle.x + paddle.width &&
        point.y >= paddle.y && point.y <= paddle.y + paddle.height
      ) {
        return true;
      }
    }
    return false;
  };
  
  

  const updateGame = () => {
    const canvas = canvasRef.current;

    let newPlayerY = playerY + playerSpeed;
    if (newPlayerY < 0) newPlayerY = 0;
    if (newPlayerY + paddleHeight > canvas.height) newPlayerY = canvas.height - paddleHeight;

    let newPlayer2Y = player2Y + player2Speed;
    if (newPlayer2Y < 0) newPlayer2Y = 0;
    if (newPlayer2Y + paddleHeight > canvas.height) newPlayer2Y = canvas.height - paddleHeight;

    let newBall = { ...ball };
    newBall.x += newBall.velocityX;
    newBall.y += newBall.velocityY;

    if (newBall.y - newBall.radius < 0 || newBall.y + newBall.radius > canvas.height) {
      newBall.velocityY = -newBall.velocityY;
    }


    if (checkCollisionWithPaddle(newBall, { x: paddleWidth, y: newPlayerY, width: paddleWidth, height: paddleHeight })) {
      newBall.velocityX = -newBall.velocityX;

      const paddleCenter = newPlayerY + paddleHeight / 2;
      const ballRelativeY = newBall.y - paddleCenter;
      const angle = (ballRelativeY / (paddleHeight / 2)) * (Math.PI / 4);
      newBall.speed += 0.5;
      newBall.velocityY = newBall.speed * Math.sin(angle);
      newBall.velocityX = newBall.velocityX > 0 ? newBall.speed : -newBall.speed;
    }

    if (mode === 'multiplayer' && checkCollisionWithPaddle(newBall, { x: canvas.width - paddleWidth * 2, y: newPlayer2Y, width: paddleWidth, height: paddleHeight })) {
      newBall.velocityX = -newBall.velocityX;

      const paddleCenter = newPlayer2Y + paddleHeight / 2;
      const ballRelativeY = newBall.y - paddleCenter;
      const angle = (ballRelativeY / (paddleHeight / 2)) * (Math.PI / 4);
      newBall.speed += 0.5;
      newBall.velocityY = newBall.speed * Math.sin(angle);
      newBall.velocityX = newBall.velocityX > 0 ? newBall.speed : -newBall.speed;
    }else if (mode === 'AI') {
      if (checkCollisionWithPaddle(newBall, { x: canvas.width - paddleWidth * 2, y: computerY, width: paddleWidth, height: paddleHeight })) {
        newBall.velocityX = -newBall.velocityX;

        const paddleCenter = newPlayer2Y + paddleHeight / 2;
        const ballRelativeY = newBall.y - paddleCenter;
        const angle = (ballRelativeY / (paddleHeight / 2)) * (Math.PI / 4);
        newBall.speed += 0.5;
        newBall.velocityY = newBall.speed * Math.sin(angle);
        newBall.velocityX = newBall.velocityX > 0 ? newBall.speed : -newBall.speed;
      } 
      if (newBall.y > computerY + paddleHeight / 2) {
        setComputerY((prevY) => Math.min(prevY + computerSpeed, canvas.height - paddleHeight));
      } else if (newBall.y < computerY + paddleHeight / 2) {
        setComputerY((prevY) => Math.max(prevY - computerSpeed, 0));
      }
    }

    if (newBall.x - newBall.radius < 0 || newBall.x + newBall.radius > canvas.width) {
      if (newBall.x - newBall.radius < 0) {
        setComputerScore((prevScore) => prevScore + 1);
      } else {
        setPlayerScore((prevScore) => prevScore + 1);
      }
      newBall.x = canvas.width / 2;
      newBall.y = canvas.height / 2;
      newBall.velocityX = -newBall.velocityX;
      newBall.speed = 5;
      newBall.velocityX = newBall.velocityX > 0 ? newBall.speed : -newBall.speed;
      newBall.velocityY = newBall.velocityY > 0 ? newBall.speed : -newBall.speed;

      if (playerScore >= WINNING_SCORE) {
        setGameStarted(false);
        setPlayerScore(0);
        setComputerScore(0);
        return;
      } else if (computerScore >= WINNING_SCORE) {
        setGameStarted(false);
        setPlayerScore(0);
        setComputerScore(0);
        return;
      }
    }

    setPlayerY(newPlayerY);
    setPlayer2Y(newPlayer2Y);
    setBall(newBall);
  };

  useEffect(() => {
    if (gameStarted) {
      const gameInterval = setInterval(updateGame, 1000 / 60);
      return () => clearInterval(gameInterval);
    }
  }, [ball, playerY, playerSpeed, player2Y, player2Speed, computerY]);

  const handleKeyDown = (event) => {
    event.preventDefault();
    if (event.key === 'ArrowUp') {
      setPlayerSpeed(-4);
    } else if (event.key === 'ArrowDown') {
      setPlayerSpeed(4);
    }

    if (event.key === 'w') {
      setPlayer2Speed(-4);
    } else if (event.key === 's') {
      setPlayer2Speed(4);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      setPlayerSpeed(0);
    }

    if (event.key === 'w' || event.key === 's') {
      event.preventDefault();
      setPlayer2Speed(0);
    }
  };

  const handleGameStart = () => {
    if (!gameStarted) {
      setGameStarted(true);
      setBall({
        x: 400,
        y: 200,
        radius: 10,
        speed: 5,
        velocityX: 5,
        velocityY: 5,
      });
      setPlayerY(150);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const updateCanvasSize = () => {
      const maxWidth = 800;
      const maxHeight = 400;

      const widthScale = window.innerWidth / maxWidth;
      const heightScale = window.innerHeight / maxHeight;

      const scale = Math.min(widthScale, heightScale);
      
      const width = Math.min(maxWidth, window.innerWidth * scale);
      const height = Math.min(maxHeight, window.innerHeight * scale);
      
      setCanvasSize({ width, height });
    };

    updateCanvasSize();

    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  
  return (
    <>
      <div className="flex flex-col items-center">
        <Score playerScore={playerScore} computerScore={computerScore} mode={mode} />
        <div
          className="flex justify-center items-center"
          style={{
            position: 'relative',
            width: `${canvasSize.width}px`,
            height: `${canvasSize.height}px`,
          }}
        >
          <GameController
            gameStarted={gameStarted}
            playerScore={playerScore}
            computerScore={computerScore}
            winningScore={WINNING_SCORE}
            onGameStart={handleGameStart}
          />
          <Canvas
            gameStarted={gameStarted}
            width={canvasSize.width}
            height={canvasSize.height}
            ref={canvasRef}
            paddleHeight={paddleHeight}
            paddleWidth={paddleWidth}
            playerY={playerY}
            player2Y={player2Y}
            computerY={computerY}
            ball={ball}
            mode={mode}
          />
        </div>
      </div>
    </>
  );
};

export default Pong;
