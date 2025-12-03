import { useState } from "react";

export default function TodoForm({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onCreate(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
      <button type="submit">Agregar</button>
    </form>
  );
}
