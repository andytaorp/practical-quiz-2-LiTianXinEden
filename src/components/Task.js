import React from "react";

export default function Task({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.complete}
        onChange={() => onToggleTask(task.id)}
      />
      <span style={{ textDecoration: task.complete ? "line-through" : "none" }}>
        {task.description}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}
