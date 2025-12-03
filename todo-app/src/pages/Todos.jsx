import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
import Loader from "../components/Loader";
import { fetchTodos } from "../api/todosApi";
import Filters from "../components/Filters"; // ⭐ Importante


export default function Todos() {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ⭐ 1. Cargar todos desde la API
  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (err) {
        setError("Error al cargar los todos");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // ⭐ 2. Crear nuevo todo
  const handleCreate = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
  };

  // ⭐ 3. Alternar completado/pendiente
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // ⭐ 4. Eliminar todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Lista de Todos</h1>

      {/* ⭐ FILTROS PLACEHOLDER */}
      <Filters />

      {/* ⭐ FORMULARIO NUEVO TODO */}
      <TodoForm onCreate={handleCreate} />

      {/* ⭐ Mensajes */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <Loader />}

      {/* ⭐ Lista de todos */}
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
