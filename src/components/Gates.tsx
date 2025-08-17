import React from 'react';

const GateControls = () => {
  const applyGate = (gate: string) => {
    console.log(`Apply ${gate} gate`);
    // Will update state soon
  };

  return (
    <div>
      <button onClick={() => applyGate('X')}>X Gate</button>
      <button onClick={() => applyGate('Y')}>Y Gate</button>
      <button onClick={() => applyGate('Z')}>Z Gate</button>
    </div>
  );
};

export default GateControls;
