import React, { useState } from 'react';
import { TodoForm, TodoList} from './components';

function App() {
  const [todoItems, setTodoItems] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a todo app', completed: true },
    { id: 3, text: 'Profit', completed: false }
  ]);

  function addTodoItem(text) {
    const newTodoItem = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodoItems([...todoItems, newTodoItem]);
  }

  function toggleTodoItem(id) {
    const newTodoItems = todoItems.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodoItems(newTodoItems);
  }

  return (
    <>
    <head>
      <title>Todo App</title>
    </head>
    <main className='Main-Container'>
     
      <h1>Todo App</h1>
      <TodoForm addTodoItem={addTodoItem} />
      <TodoList todoItems={todoItems} toggleTodoItem={toggleTodoItem} />
    </main>
    </>
  );
}

export default App;

