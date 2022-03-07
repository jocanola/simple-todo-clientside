import "./App.css";
import { Input } from "./components/input/input.component";
import { Completed } from "./features/completed/completed";
import { TodoList } from "./features/todo-list/todo-list";

function App() {
  return (
    <>
      <h1>
        <span>TODO LIST</span>
      </h1>
      {/* input section */}
      <Input />
      {/* To do list section */}
      <TodoList />
      {/* Completed Project */}
      <Completed />
    </>
  );
}

export default App;
