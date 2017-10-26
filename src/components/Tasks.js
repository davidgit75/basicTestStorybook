import React from 'react';

export default ({ tasks }) => {
  if (tasks.length === 0) {
    return (
      <h3>No tasks</h3>
    );
  }
  return (
    <ul>
      {
        tasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))
      }
    </ul>
  );
};