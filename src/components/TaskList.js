import { useState } from "react";
import Task from "./Task";

export default function TaskList({
  tasks,
  onDeleteTask,
  onToggleTask,
  onDeleteList,
}) {
  const [sortby, setSortBy] = useState("input");

  let sortedTasks;

  if (sortby === "input") sortedTasks = tasks;

  if (sortby === "descritpion")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortby === "packed")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedTasks.map((task) => (
          <Task
          task={task}
            key={task.id}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="descritpion">Sort by descritpion</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onDeleteList}>Clear List</button>
      </div>
    </div>
  );
}
