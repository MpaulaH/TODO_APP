import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true); // 🌟 Estado de carga

  useEffect(() => {
    setLoading(true); // activa el estado de carga

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false); // desactiva carga cuando llegan los datos
      })
      .catch((error) => {
        console.error("Error cargando los TODOs:", error);
        setLoading(false); // incluso en error se detiene el loading
      });
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

  // Marcar completado/pendiente
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Eliminar todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Lista de Todos</h1>

      <TodoForm onCreate={handleCreate} />

      {/* 🌟 Mensaje mientras se cargan los datos */}
      {loading && <p>Cargando tareas...</p>}

      {/* 🌟 Solo muestra la lista cuando loading es false */}
      {!loading && (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
