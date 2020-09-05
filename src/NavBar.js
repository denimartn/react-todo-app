import React from "react";

export const NavBar = (props) => {
  return (
    <div className="options">
      <button
        className={props.view === "all" ? "active" : "hide"}
        id="all"
        type="button"
        onClick={props.onClickAll}
      >
        All
      </button>
      <button
        id="active"
        type="button"
        onClick={props.onClickActive}
        className={props.view === "active" ? "active" : "hide"}
      >
        Active
      </button>
      <button
        id="completed"
        className={props.view === "completed" ? "active" : "hide"}
        type="button"
        onClick={props.onClickCompleted}
      >
        Completed
      </button>
    </div>
  );
};
