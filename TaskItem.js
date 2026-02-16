import React from "react";

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="task-item">
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span
          className={
            task.completed
              ? "task-text completed"
              : "task-text"
          }
        >
          {task.name}
        </span>
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;

