import React from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = React.useState("");

  const [todos, setTodos] = React.useState([]);

  //set the view
  const [view, setView] = React.useState("");

  let todoToRender = todos;
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

  const handleIsDone = (todo) => {
    const newTodos = [];

    for (const t of todos) {
      if (t.id === todo.id) {
        t.isDone = !t.isDone;
      }
      newTodos.push(t);
    }
    setTodos(newTodos);
  };
  const onClickAll = () => {
    setView("all");
  };
  const onClickActive = () => {
    setView("active");
  };

  const onClickCompleted = () => {
    setView("completed");
    // remove input section from completed section
    let elem = document.querySelector(".input-wrapper");
    elem.parentNode.removeChild(elem);
  };

  const deleteOne = (todo) => {
    todoToRender = todoToRender.filter((t) => t.id !== todo.id);
    setTodos(todoToRender);
  };

  if (view === "all") {
    todoToRender = todos;
  } else if (view === "active") {
    todoToRender = todoToRender.filter((t) => !t.isDone);
  } else if (view === "completed") {
    todoToRender = todoToRender.filter((t) => t.isDone);
  }

  return (
    <main className="row">
      <div className="row2">
        <h1>#todo</h1>
        <div className="options">
          <button
            className="active"
            id="all"
            type="button"
            onClick={onClickAll}
          >
            All
          </button>
          <button id="active" type="button" onClick={onClickActive}>
            Active
          </button>
          <button id="completed" type="button" onClick={onClickCompleted}>
            Completed
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <div
            className="input-wrapper"
            style={{
              visibility: view === "completed" ? "hidden" : "visible",
            }}
          >
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
              {todoToRender.map((todo) => (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => handleIsDone(todo)}
                  ></input>
                  {todo.value}
                  <span
                    style={{
                      visibility: view === "completed" ? "visible" : "hidden",
                    }}
                  >
                    <button
                      type="button"
                      className="delete-one"
                      onClick={() => deleteOne(todo)}
                    >
                      X
                    </button>
                  </span>
                </li>
              ))}
            </ul>
            <button
              style={{
                visibility: view === "completed" ? "visible" : "hidden",
              }}
              type="button"
              className="delete-all"
            >
              Delete all
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default App;
