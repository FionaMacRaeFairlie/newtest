import React from "react";

const style = {
  display:"inline-block",
  width: "20rem",
  margin:"1em"
};

export default function TodoItem(props) {
  const { deleteTodo, todo } = props;
  return (
    <div className="TodoItem" data-testid="TodoItem">
      <div
        data-testid="TodoItem-priority"
        className={`TodoItem-priority TodoItem--${todo.priority}`}
      />
      <div data-testid="TodoItem-text" className={`TodoItem-text`}>
      <button onClick={() => deleteTodo(todo)} className="TodoItem-delete btn btn-primary">
        -
      </button>
       <span style={style}> {todo.text} </span>

      </div>
    </div>
  );
}
