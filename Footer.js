import React from "react";

function Footer({ totalTasks, completedTasks }) {
  return (
    <footer className="footer">
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
    </footer>
  );
}

export default Footer;

