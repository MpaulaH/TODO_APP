import { useState } from "react";

export default function TodoForm({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("El campo no puede estar vacío");
      return;
    }

    onCreate(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Nuevo todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px" }}
      />

      <button type="submit" style={{ marginLeft: "10px" }}>
        Agregar
      </button>
    </form>
  );
}
