export default function Home() {
  return (
    <div className="container" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "#a678e2" }}>Bienvenid@ a tu Todo App ✨</h1>

      <p style={{ fontSize: "18px", marginTop: "10px", color: "#6b4fb2" }}>
        Gestiona tus tareas, crea nuevas y marca como completadas💜  
      </p>

      <div
        style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "20px",
          maxWidth: "450px",
          margin: "40px auto",
          boxShadow: "0px 4px 12px rgba(150, 130, 255, 0.15)",
        }}
      >
        <h3 style={{ color: "#9a6ceb" }}>¿Qué deseas hacer hoy?</h3>

        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
          <a
            href="/todos"
            style={{
              background: "#cdb7ff",
              padding: "12px",
              borderRadius: "12px",
              textDecoration: "none",
              color: "#4a397d",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            📝 Ir a mis Todos
          </a>

          <a
            href="/registro"
            style={{
              background: "#e7d8ff",
              padding: "12px",
              borderRadius: "12px",
              textDecoration: "none",
              color: "#4a397d",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            👤 Ir al Registro
          </a>
        </div>
      </div>
    </div>
  );
}
