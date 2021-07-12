import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function clickHandler(e) {
    setTitle("Updated"); // assign new value and re-render the component in which it is called and initialized
    // state update is not synchronous, it is scheduled
    console.log("Clicked");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title </button>
    </Card>
  );
}

export default ExpenseItem;
