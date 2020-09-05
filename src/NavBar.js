import React from "react";

export const NavBar = (props) => {
  const onClickAll = () => {
    props.setView("all");
  };
  const onClickActive = () => {
    props.setView("active");
  };

  const onClickCompleted = () => {
    props.setView("completed");
  };
  return (
    <div className="options">
      <button
        className={props.view === "all" ? "active" : "hide"}
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
        className={props.view === "active" ? "active" : "hide"}
      >
        Active
      </button>
      <button
        id="completed"
        className={props.view === "completed" ? "active" : "hide"}
        type="button"
        onClick={onClickCompleted}
      >
        Completed
      </button>
    </div>
  );
};
