import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'

// Importar páginas
import Home from "./pages/Home.jsx"
import Todos from "./pages/Todos.jsx"
import Registro from "./pages/Registro.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="todos" element={<Todos />} />
        <Route path="registro" element={<Registro />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
