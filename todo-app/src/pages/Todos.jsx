import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
import { fetchTodos } from "../api/todosApi";


export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchTodos(10);
        setTodos(data);

      } catch (err) {
        console.error(err);
        setError("Ocurrió un error al cargar las tareas.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
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

  // Toggle
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Eliminar
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Lista de Todos</h1>

      <TodoForm onCreate={handleCreate} />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Cargando tareas...</p>}

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
