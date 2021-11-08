import React, { useEffect, useState } from 'react';
import './App.css';
import Bucket from './components/Bucket';

function App() {
  // const [waterAmount, setWaterAmount] = useState(0);
  const [waterState, setWaterState] = useState([]);
  const [isIncrease, setIsIncrease] = useState(false);
  const maxLevel = 5;
  useEffect(() => {
    console.log("sdf")
    window.setTimeout(() => {
      if (isIncrease === true && waterState.length < maxLevel) {
        setWaterState([...waterState, 1])
      }
      else if (isIncrease === false && waterState.length > 0) {
        setWaterState(waterState.slice(0, -1))
      }
    }, 2000)
  }, [isIncrease, waterState])
  return (
    <div className="App">
      <Bucket waterAmount={waterState}></Bucket>
      <button onClick={() => setIsIncrease(true)}>
        increaseWaterLevel
      </button>
      <button onClick={() => setIsIncrease(false)}>
        reduceWaterLevel
      </button>
    </div>
  );
}
export default App;
