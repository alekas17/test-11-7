import React, { useState } from 'react';
import './App.css';
import Bucket from './components/Bucket';

function App() {
  // const [waterAmount, setWaterAmount] = useState(0);
  const [waterState, setWaterState] = useState([]);
  const maxLevel = 5;
  const minLevel = 0;
  const changeLevel = (changeVal) => {
    let tempState = waterState;
    if(waterState === undefined && changeVal === 1)
      setWaterState([1]);
    let waterAmount = waterState.length;
    if(waterAmount !== maxLevel && changeVal === 1)
      setWaterState([...waterState, waterAmount + 1]);
    if(waterAmount !== minLevel && changeVal === -1)
    {
      tempState.pop();
      setWaterState([...tempState]);
    }
  }
  return (
    <div className="App">
      <Bucket waterAmount={waterState}></Bucket>
      <button onClick={() => changeLevel(1)}>
        increaseWaterLevel
      </button>
      <button onClick={() => changeLevel(-1)}>
        reduceWaterLevel
      </button>
    </div>
  );
}
export default App;
