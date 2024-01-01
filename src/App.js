import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodo([...todos, input]);
    setInput('');
  }

  const deleteItem = (id) =>{
    setTodo((Element) => {
      return Element.filter((_current,index) => index !== id);
    });
  }

  return (
    <div className="App">
      <div className="app-header">
        <div className="app-container">
          <form className="todo-form">
            <input
                value={input}
                onChange={(event) => {setInput(event.target.value)}}
                type="text"
                placeholder="What do you want to do?"
            />
            <button
                disabled={!input}
                onClick={addTodo}
                className="button button-primary"
                data-variant="dark"
            >Add</button>
          </form>
        </div>
      </div>
      <div className="app-container">
        <h1 className="todos-list-title">Things to do</h1>
        <div className="todos-status">
          {todos.length > 0 && (
            <p>
              You have {todos.length} {todos.length > 1 ? "todos " : "todo "}
              remaining.
            </p>
          )}
        </div>
        <div className="todos-container">
          {todos.length > 0 ? (
            todos.map((todo, index) => 
              <Todo key={index} id={index} onSelect={deleteItem} body={todo} />
            )
          ) : (
            <div className="todos-congrats-message">
              <div className="
                  todos-congrats-message-icon
                  material-symbols-outlined">
                sentiment_very_satisfied
              </div>
              <p className="todos-congrats-message-text">
                Congrats! You have nothing to do right now!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
