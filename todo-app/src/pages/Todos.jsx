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

  // 👉 Función para crear un nuevo todo
  const handleCreate = (title) => {
    const newTodo = {
      id: Date.now(), // id único
      title,
      completed: false,
    };

    // Agregar el nuevo todo al inicio del arreglo
    setTodos([newTodo, ...todos]);
  };

  return (
    <div>
      <h1>Lista de Todos</h1>

      {/* Formulario para agregar todos */}
      <TodoForm onCreate={handleCreate} />

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );

}
