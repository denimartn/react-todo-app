import React from "react";
import "./App.css";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { NavBar } from "./NavBar";

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
        <NavBar
          view={view}
          onClickAll={onClickAll}
          onClickActive={onClickActive}
          onClickCompleted={onClickCompleted}
        />
        <TaskForm
          onSubmit={onSubmit}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <TaskList
          todos={todoToRender}
          view={view}
          handleIsDone={handleIsDone}
          deleteOne={deleteOne}
        />
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
    </main>
  );
};

export default App;
