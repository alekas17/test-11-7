import React, { useState } from 'react';
import './App.css';
import Bucket from './components/Bucket';

function App() {
  const [waterAmount, setWaterAmount] = useState(0);
  const [flowDirection, setFlow] = useState(1);
  const maxLevel = 5;
  const minLevel = 0;
  const setCount = () => {
    if(waterAmount === maxLevel - 1)
      setFlow(-1);
    else if(waterAmount === minLevel + 1)
      setFlow(1);
    setWaterAmount(waterAmount + flowDirection);
  }
  return (
    <div className="App">
      <Bucket amount={waterAmount}></Bucket>
      <button onClick={() => setCount()}>
        {flowDirection === 1 && "plusWaterLevel"}
        {flowDirection === -1 && "reduceWaterLevel"}
      </button>
    </div>
  );
}

export default App;
