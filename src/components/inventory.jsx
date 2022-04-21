import { useState } from "react";
import React from "react"

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });

  const handleItems = (value)=>{
      setInv(value)
  }

  const [total, setTotal] = React.useState(0);

  const totalValue = (books,notebooks,pens) => {
      setTotal(books+notebooks+pens)
  }
    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "550px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{handleItems(1)}}>+</button>
        <button className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div >
      <p></p>
      total: {0}
    </div>
  );
};