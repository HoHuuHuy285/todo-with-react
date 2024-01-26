export default function Task({ task, onDeleteTask, onToggleTask }) {
  return (
    <li>
      <input
        type="checkbox"
        value={task.packed}
        onChange={() => onToggleTask(task.id)}
      />
      <span style={task.packed ? { textDecoration: "line-through" } : {}}>
        {task.quantity} {task.description}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>❌</button>
    </li>
  );
}
