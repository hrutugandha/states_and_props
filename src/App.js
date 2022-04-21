//import { useState } from 'react';
import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import Counter from "./components/counter.jsx";
import { Inventory } from "./components/inventory";



function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <h1>REACT INVENTORY</h1>
      <Inventory />
    </div>
  );
}



export default App;
