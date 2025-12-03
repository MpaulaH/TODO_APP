import { useState } from "react";

export default function Registro() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.password) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    // Solo mostramos los datos por consola (como pide la guía)
    console.log("Datos del registro:", formData);

    setMensaje("Registro enviado correctamente ✔");
  };

  return (
    <div>
      <h1>Registro de usuario</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "350px" }}>
        {/* Nombre */}
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
        />

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="correo@example.com"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Contraseña */}
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="********"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" style={{ marginTop: "10px" }}>
          Registrarse
        </button>
      </form>

      {mensaje && <p style={{ marginTop: "15px" }}>{mensaje}</p>}
    </div>
  );
}
