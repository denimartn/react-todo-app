import React from "react";
export const TaskForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="input-wrapper">
        <input
          className="input-text"
          type="text"
          value={props.inputValue}
          onChange={(event) => props.setInputValue(event.target.value)}
          placeholder="Type something..."
        />

        <button id="add" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};
