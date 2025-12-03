import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  // Crear nuevo todo
  const handleCreate = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
  };

  // 👉 Función para marcar completado o pendiente
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div>
      <h1>Lista de Todos</h1>

      <TodoForm onCreate={handleCreate} />

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}
