import React from "react";
import TodoItem from "./Todoitem";

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
