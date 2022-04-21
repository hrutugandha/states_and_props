import React from "react";
import "../App.css";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);
  const handleCounter = (value) => {
    setCounter(counter + value);
  };
  const reduceCounter = (value) => {
    setCounter(counter - value);
  };

  return (
    <>
      <h1 className="AppTitle">counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleCounter(2)}>double</button>
      <button onClick={() => reduceCounter(1)}>reduce</button>
    </>
  );
}
