// import React, { Component } from "react";
// class TodoItem extends Component {
//     render() {
//       const { deleteTodo, todo } = this.props;

//       return (
//         <div className="TodoItem" data-testid="TodoItem">
//           <div data-testid="TodoItem-priority" className={`TodoItem-priority TodoItem--${todo.priority}`} />
//           <div data-testid="TodoItem-text" className={`TodoItem-text`}>
//             {todo.text}
//           </div>
//           <button onClick={() => deleteTodo(todo)} className="TodoItem-delete">
//             -
//           </button>
//         </div>
//       );
//     }
//   }
//   export default TodoItem

import React from "react";

export default function TodoItem(props) {
  const { deleteTodo, todo } = props;
  return (
    <div className="TodoItem" data-testid="TodoItem">
      <div
        data-testid="TodoItem-priority"
        className={`TodoItem-priority TodoItem--${todo.priority}`}
      />
      <div data-testid="TodoItem-text" className={`TodoItem-text`}>
        {todo.text}
      </div>
      <button onClick={() => deleteTodo(todo)} className="TodoItem-delete">
        -
      </button>
    </div>
  );
}
