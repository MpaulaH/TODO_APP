import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Registro from "./pages/Registro";

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* ⭐ Barra de navegación solo si NO estamos en home */}
      {location.pathname !== "/" && (
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/todos">Todos</Link>
          <Link to="/registro">Registro</Link>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

