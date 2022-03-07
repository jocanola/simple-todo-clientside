import React, { useEffect, useState } from "react";
import { TodoItem } from "../../components/todo-item/todo-item.componet";

export const Completed = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://simple-crud-todo.herokuapp.com/api/todo?complete=true")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setTodos(data.data);
      });
  }, []);
  return (
    <section id="container1">
      <h2>Completed Todo List</h2>
      {todos.map((item) => (
        <TodoItem key={item._id} id={item._id} todo={item.todo} isComplete />
      ))}
    </section>
  );
};
