import React from 'react';

const MySvg = (
  <svg width="100" height="100">
    <rect x="10" y="10" width="80" height="80" />
  </svg>
);

function MyComponent() {
  return (
    <div>
      <h1>My SVG</h1>
      {MySvg}
    </div>
  );
}

export default MyComponent