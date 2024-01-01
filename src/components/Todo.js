import React from 'react';

function Todo(props) {
  function createTimeData() {
    const now = new Date();
    const dateFormatter = Intl.DateTimeFormat('en-us', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    return `Added at ${dateFormatter.format(now)}.`;
  }

  return (
    <div className="todo">
      <div className="todo-data">
        <p className="todo-body">{props.body}</p>
        <time className="todo-time">{createTimeData()}</time>
      </div>
      <button
          className="button button-primary"
          onClick={() => {props.onSelect(props.id)}}
      >Delete</button>
    </div>
  );
}

export default Todo;
