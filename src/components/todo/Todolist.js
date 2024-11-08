// import React, { Component } from "react";
import React from "react";
import TodoItem from "./Todoitem";
// class TodoList extends Component {
//     render() {
//       const { todos, deleteTodo } = this.props;
//       return todos.map((todo, i) => <TodoItem deleteTodo={deleteTodo} key={i} todo={todo} />);
//     }
//   }
//   export default TodoList

export default function TodoList(props) {
  const { todos, deleteTodo } = props;

  return (
    <div>
      {todos.map((todo, i) => (
        <TodoItem deleteTodo={deleteTodo} key={i} todo={todo} />
      ))}
    </div>
  );
}
