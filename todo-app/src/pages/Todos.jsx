import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h1>Lista de Todos</h1>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

