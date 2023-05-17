import React from 'react';

function TodoList(props) {
  function handleTodoClick(todo) {
    props.toggleTodoItem(todo.id);
  }

  return (
    <ul>
      {props.todoItems.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleTodoClick(todo)}
          />
          <span>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
