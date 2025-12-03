import { useState } from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftText, setDraftText] = useState(todo.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setDraftText(todo.title);
  };

  return (
    <li>
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {/* ⭐ Modo edición */}
      {isEditing ? (
        <>
          <input
            type="text"
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
          />

          {/* Botón de guardar — placeholder */}
          <button disabled>Guardar</button>

          {/* Botón cancelar */}
          <button onClick={handleCancel}>Cancelar</button>
        </>
      ) : (
        <>
          {/* Texto normal */}
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginRight: "10px",
            }}
          >
            {todo.title}
          </span>

          {/* Botón EDITAR */}
          <button onClick={handleEditClick}>Editar</button>

          {/* Botón ELIMINAR */}
          <button onClick={() => onDelete(todo.id)}>Eliminar</button>
        </>
      )}
    </li>
  );
}
