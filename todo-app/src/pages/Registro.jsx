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

        console.log("Datos del registro:", formData);
        setMensaje("Registro enviado correctamente ✔");
    };

    return (
        <div className="container">
            <h1>Registro de usuario</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label>Contraseña</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button type="submit">Registrarse</button>
            </form>

            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}
