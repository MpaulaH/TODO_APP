export async function fetchTodos(limit = 10) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Error al obtener los TODOS");
  }

  return await response.json();
}
