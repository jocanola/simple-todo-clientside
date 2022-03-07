import React, { useState } from "react";
import "./input.style.css";
export const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const addTodo = () => {
  
    fetch("https://simple-crud-todo.herokuapp.com/api/todo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: inputValue }),
    })
      .then((result) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section id="inputSec">
      <h2>Enter what to do</h2>
      <div className="inputDiv">
        <input
          className="input"
          type="text"
          placeholder="What to do"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="addButton" onClick={addTodo}>
          Add
        </button>
      </div>
    </section>
  );
};
