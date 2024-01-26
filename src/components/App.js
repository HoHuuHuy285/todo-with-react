import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import TaskList from "./TaskList";
import Stats from "./Stats";
import { getTodos } from "../apis/todo";

export default function App() {
  const [tasks, setTasks] = useState(getTodos);
  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, packed: !task.packed } : task
      )
    );
  }

  function handleDeleteList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all tasks"
    );
    if (confirmed) setTasks([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddTasks={handleAddTasks} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
        onDeleteList={handleDeleteList}
      />
      <Stats tasks={tasks} />
    </div>
  );
}
