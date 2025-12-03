export default function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "8px",
      }}
    >
      {/* Checkbox para marcar como completado/pendiente */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {/* Texto con tachado si está completado */}
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>
    </li>
  );
}
