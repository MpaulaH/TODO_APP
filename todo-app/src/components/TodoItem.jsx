export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "8px",
      }}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {/* Texto */}
      <span
        style={{
          flex: 1,
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>

      {/* Botón para eliminar */}
      <button
        onClick={() => onDelete(todo.id)}
        style={{ backgroundColor: "red", color: "white", border: "none", padding: "4px 8px" }}
      >
        Eliminar
      </button>
    </li>
  );
}
