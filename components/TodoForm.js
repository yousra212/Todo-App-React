import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm(props) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
    props.addTodoItem(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className='outline'
        type="text"
        placeholder="Add new todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
