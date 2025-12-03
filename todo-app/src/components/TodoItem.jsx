export default function TodoItem({ todo }) {
  return (
    <li style={{ display: "flex", gap: "10px" }}>
      <span>{todo.title}</span>
    </li>
  );
}
