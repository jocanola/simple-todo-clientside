import React, { useEffect, useState } from "react";
import { TodoItem } from "../../components/todo-item/todo-item.componet";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/todo?complete=false")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setTodos(data.data);
      });
  }, []);

  return (
    <section id="container">
      <h2>List of Todo</h2>
      {todos.map((item) => (
        <TodoItem key={item._id} id={item._id} todo={item.todo} />
      ))}
    </section>
  );
};
