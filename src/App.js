import React from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = React.useState("");

  const [todos, setTodos] = React.useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      return;
    }
    addTodo();
    setInputValue("");
  };
  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        value: inputValue,
        isDone: false,
      },
    ]);
  };

  return (
    <main className="row">
      <div className="row2">
        <h1>#todo</h1>
        <div className="options">
          <button className="active" id="all" type="button">
            All
          </button>
          <button id="active" type="button">
            Active
          </button>
          <button id="completed" type="button">
            Completed
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <input
              className="input-text"
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Type something..."
            />

            <button id="add" type="submit">
              Add
            </button>
          </div>
          <div className="list-wrapper">
            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>
                  <input type="checkbox"></input>
                  {todo.value}
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </main>
  );
};

export default App;
