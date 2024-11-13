import React from 'react';

const Ball = ({ x, y, radius }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${x - radius}px`,
        top: `${y - radius}px`,
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        backgroundColor: 'white',
        borderRadius: '50%',
      }}
    />
  );
};

export default Ball;
