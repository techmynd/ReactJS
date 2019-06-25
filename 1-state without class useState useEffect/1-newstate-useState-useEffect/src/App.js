import React, { useState, useEffect } from "react";
import "./App.css";

// this is functional component
const App = () => {
  // this is state here
  const [counter, setCounter] = useState(0);
  const [counterDown, setCounterDown] = useState(100);
  const [counterTwo, setCounterTwo] = useState(10);
  const [countOnLoad, setCountOnLoad] = useState(0);
  // state ends here

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // do here something and add/remove it in/from state
    // addEventListener or removeEventListener here
    // you can't access variables from here to below in return
    // but you will do calls here and manipulate state
    setCountOnLoad(countOnLoad + 50);
  }, []);

  // this is a handler
  const doIncrement = () => {
    setCounterTwo(counterTwo + 1);
  };

  return (
    <div className='App'>
      <h3>Hooks (useState and useEffect / with and without handler)</h3>
      <button onClick={() => setCounter(counter + 1)}>Count Up</button>
      <div>{counter}</div>
      <hr />
      <button onClick={() => setCounterDown(counterDown - 1)}>
        Count Down
      </button>
      <div>{counterDown}</div>
      <hr />
      <button onClick={doIncrement}>Count Up via handler</button>
      <div>{counterTwo}</div>
      <hr />
      Count on Load > from 0 in state to something in useEffect
      <br />
      {countOnLoad}
    </div>
  );
};

export default App;
