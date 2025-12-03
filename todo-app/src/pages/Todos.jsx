import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // 🌟 Nuevo estado de error

  useEffect(() => {
    const loadTodos = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");

        if (!res.ok) {
          throw new Error("Error al obtener los datos");
        }

        const data = await res.json();
        setTodos(data);

      } catch (err) {
        console.error("Error cargando los TODOs:", err);
        setError("Ocurrió un error al cargar las tareas.");
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
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
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
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

      {/* 🌟 Mostrar error si ocurre */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 🌟 Mostrar mensaje de carga */}
      {loading && <p>Cargando tareas...</p>}

      {/* 🌟 Mostrar lista solo si NO hay error y NO hay loading */}
      {!loading && !error && (
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
