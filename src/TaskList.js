import React from "react";
import { Task } from "./Task";
export const TaskList = (props) => {
  return (
    <div className="list-wrapper">
      <ul>
        {props.todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            view={props.view}
            handleIsDone={() => props.handleIsDone(todo)}
            deleteOne={() => props.deleteOne(todo)}
          />
        ))}
      </ul>
    </div>
  );
};
