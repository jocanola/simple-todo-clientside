import React from "react";
import "./todo-item.style.css";
export const TodoItem = ({ id, todo, isComplete }) => {
  const markComplete = (id) => {
    fetch(`http://localhost:3000/api/todo/${id}`, {
      method: "PUT",
    })
      .then((result) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = (id) => {
    fetch(`http://localhost:3000/api/todo/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="item">
      {!isComplete && (
        <input
          type="radio"
          className="radio"
          onChange={() => markComplete(id)}
        />
      )}
      <input
        type="text"
        value={todo}
        name=""
        className="inputItem"
        disabled="true"
      />
      <button className="removeButton" onClick={() => deleteTodo(id)}>
        Remove
      </button>
    </div>
  );
};
