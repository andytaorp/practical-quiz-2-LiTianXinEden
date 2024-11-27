import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      description: description.trim(),
      complete: false,
    };
    onAddTask(newTask);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="desc">Description: </label>
      <input
        type="text"
        id="desc"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="New Task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
