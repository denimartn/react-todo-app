// one item
import React from "react";
export const Task = (props) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.isDone}
        onChange={props.handleIsDone}
      ></input>
      {props.todo.value}
      <span
        style={{
          visibility: props.view === "completed" ? "visible" : "hidden",
        }}
      >
        <button type="button" className="delete-one" onClick={props.deleteOne}>
          X
        </button>
      </span>
    </li>
  );
};
