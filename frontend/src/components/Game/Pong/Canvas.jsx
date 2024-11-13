import React from 'react';
import Ball from './Ball';
import Paddle from './Paddle';

const Canvas = React.forwardRef(({ width, height, gameStarted, ball, paddleWidth, playerY, player2Y, computerY, paddleHeight, mode }, ref) => {

    const renderPaddleAndBall = () => {
        if (gameStarted) {
            return (
                <>
                    <Paddle x={paddleWidth} y={playerY} width={paddleWidth} height={paddleHeight} />
                    {mode === 'multiplayer' ? (
                        <Paddle x={width - paddleWidth * 2} y={player2Y} width={paddleWidth} height={paddleHeight} />
                    ) : (
                        <Paddle x={width - paddleWidth * 2} y={computerY} width={paddleWidth} height={paddleHeight} />
                    )}
                    <Ball x={ball.x} y={ball.y} radius={ball.radius} />
                </>
            );
        }
    }

    return (
        <>
            <canvas ref={ref} width={width} height={height} className="border-2 border-white"></canvas>
            {renderPaddleAndBall()}
        </>
    );
});

export default Canvas;
