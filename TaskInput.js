import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;

    if (inputValue.length > 50) {
      alert("Task must be under 50 characters.");
      return;
    }

    addTask(inputValue);
    setInputValue("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter a new task..."
        value={inputValue}
        onChange={(e) =>
          setInputValue(e.target.value)
        }
      />
      <button onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;


