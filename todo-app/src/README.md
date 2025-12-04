✔️ Todo App – Manejo de Rutas, Formularios y Consumo de API en React

Este proyecto corresponde a la actividad GA1-220501096-03-AA1-EV10, donde se integran rutas dinámicas, peticiones HTTP a una API REST, manejo de formularios controlados y actualización del UI mediante estado local con React.

La aplicación permite navegar entre páginas, listar tareas obtenidas desde una API pública, agregar nuevas tareas mediante un formulario controlado, marcar tareas como completadas, eliminarlas, manejar estados de carga y errores, y estructurar componentes de manera modular.

📌 📁 Tecnologías utilizadas

React + Vite

React Router DOM (navegación)

Fetch API (consumo de datos)

Hooks: useState, useEffect

CSS personalizado (tema pastel)

Git & GitHub

🚀 Funcionalidades implementadas
🔷 1. Navegación entre páginas (React Router DOM)

/ Página de Inicio

/todos Página de tareas

/registro Formulario de registro

Barra de navegación en todas las páginas excepto en Home.

🔷 2. Consumo de API REST

La aplicación consume datos desde:

https://jsonplaceholder.typicode.com/todos


Funcionalidades implementadas:

Fetch inicial con useEffect

Listado dinámico de tareas

Manejo de carga (loading)

Manejo de errores (try/catch)

🔷 3. CRUD básico de Tareas (TO-DOs)
✔ Listar todos

Las tareas se listan en pantalla con:

ID

Título

Estado (completado o pendiente)

✔ Crear nuevos todos

Incluye:

Formulario controlado

Validación básica

Limpieza del formulario después de enviar

✔ Marcar como completado / pendiente

Cada tarea tiene un botón:

“Completar”

“Pendiente”

Modifica visualmente el estado.

✔ Eliminar todos

El usuario puede eliminar cualquier tarea.

🔷 4. Estados de carga

Cuando la app obtiene los datos:

Se muestra un componente <Loader />

Pantalla en modo "cargando…"

🔷 5. Manejo básico de errores

Si la petición falla:

Se muestra un mensaje de error

La app sigue funcionando correctamente

🔷 6. Formularios controlados

Tanto en Registro como en Crear TODO

value sincronizado con el estado

onChange

onSubmit

Prevención de recarga (e.preventDefault())

🔷 7. Diseño mejora pastel

Estilo suave y moderno

Botones con hover

Layout limpio

Formularios estilizados

🧩 Estructura del Proyecto
src/
 ├── components/
 │    ├── TodoItem.jsx
 │    ├── TodoForm.jsx
 │    ├── Loader.jsx
 ├── helpers/
 │    └── apiTodos.js
 ├── pages/
 │    ├── Home.jsx
 │    ├── Todos.jsx
 │    ├── Registro.jsx
 ├── App.jsx
 ├── main.jsx
 ├── styles.css

🖼 Capturas de Pantalla

📌 Vista Home
![alt text](/todo-app/public/images/1.png)


📌 Vista Todos (listado + acciones)
![alt text](/todo-app/public/images/2.png)


📌 Vista Registro (formulario controlado)
![alt text](/todo-app/public/images/3.png)

🛠 Instrucciones para ejecutar el proyecto
1️⃣ Clonar el repositorio
git clone https://github.com/MpaulaH/TODO_APP.git

2️⃣ Entrar al proyecto
cd todo-app

3️⃣ Instalar dependencias
npm install

4️⃣ Ejecutar el servidor de desarrollo
npm run dev

5️⃣ Abrir en el navegador

http://localhost:5173/

📝 Autoevaluación
1. ¿Qué ventaja ofrece tener el estado global en App.jsx?

Permite que varios componentes compartan información sin duplicarla, manteniendo una sola fuente de la verdad.

2. ¿Cómo evitaste que el formulario recargara la página?

Usando e.preventDefault() dentro del onSubmit.

3. ¿Por qué usamos setTodos([...prev, nuevo]) en lugar de push()?

Porque push() muta directamente el arreglo y no genera un re-render.
React necesita un nuevo arreglo para actualizar la UI.

4. ¿Cómo podría reutilizarse el formulario para otros datos?

Creando campos dinámicos y enviando la función por props (ej. agregar idioma, proyecto, habilidad).

5. ¿Qué pasaría si el estado se manejara dentro de un componente hijo?

Los cambios no podrían comunicarse al resto de la app.
El flujo se rompe y perderíamos control centralizado.

🎥 Video de demostración

https://youtu.be/7l9wM4mno84

🎯 Estado del proyecto

✔ Completado según requisitos de la actividad EV10
✔ 12 commits realizados correctamente
✔ Rutas, API y formularios funcionando
✔ Código modular y limpio