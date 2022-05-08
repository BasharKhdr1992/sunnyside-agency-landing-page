import React from 'react';

const Triangle = () => {
  return (
    <svg
      id="triangle"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="150,100 200,100 200,50"
        style={{ fill: 'white', stroke: 'white', strokeWidth: 1 }}
      />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};

export default Triangle;
