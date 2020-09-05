import React from "react";
import "./App.css";
import { Task } from "./Task";
//split into multiple components

//app with title
// h1 el with title
//todo form
//forms from which i get the input values
//CreateTask
//create a task for each input

//TaskList
//render all the tasks

//tree
//--------------------------App
//--------------------Form
//-------------Task List
//--------Task

const App = () => {
  const [inputValue, setInputValue] = React.useState("");

  const [todos, setTodos] = React.useState([]);

  const [view, setView] = React.useState("all");
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
  };

  const deleteOne = (todo) => {
    todoToRender = todos.filter((t) => t.id !== todo.id);
    setTodos(todoToRender);
  };
  const deleteAll = () => {
    todoToRender = todos.filter((t) => !t.isDone);
    setTodos(todoToRender);
  };

  if (view === "all") {
    todoToRender = todos;
  } else if (view === "active") {
    todoToRender = todos.filter((t) => !t.isDone);
  } else if (view === "completed") {
    todoToRender = todos.filter((t) => t.isDone);
  }

  return (
    <main className="row">
      <div className="row2">
        <h1>#todo</h1>
        <div className="options">
          <button
            className={view === "all" ? "active" : "hide"}
            id="all"
            type="button"
            onClick={onClickAll}
          >
            All
          </button>
          <button
            id="active"
            type="button"
            onClick={onClickActive}
            className={view === "active" ? "active" : "hide"}
          >
            Active
          </button>
          <button
            id="completed"
            className={view === "completed" ? "active" : "hide"}
            type="button"
            onClick={onClickCompleted}
          >
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
              {todoToRender.map((todo) => (
                <Task
                  key={todo.id}
                  todo={todo}
                  view={view}
                  handleIsDone={() => handleIsDone(todo)}
                  deleteOne={() => deleteOne(todo)}
                />
              ))}
            </ul>
            <button
              style={{
                visibility: view === "completed" ? "visible" : "hidden",
              }}
              type="button"
              className="delete-all"
              onClick={() => deleteAll()}
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
