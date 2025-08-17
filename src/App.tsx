// src/App.tsx
import React from 'react';
import BlochSphere from './components/Sphere';
import GateControls from './components/Gates';
import StateInfo from './components/States';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        <BlochSphere />
      </div>
      <div style={{ width: 300, padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <h2>Quantum Gates</h2>
        <GateControls />
        <hr />
        <StateInfo />
      </div>
    </div>
  );
};

export default App;
