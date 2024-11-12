import React, { useState } from "react";
import TodoForm from "./Todoform";
import TodoList from "./Todolist";

export default function TodoApp(props) {
  const [todos, setTodos] = useState(
    [
    { text: "Walk the Dog", priority: "High" },
    { text: "Ride bike", priority: "Low" },
    { text: "Get a haircut", priority: "Med" }
  ]
);

const  addTodo = (todo) => {
      setTodos( [...todos,todo] );
  };

function  deleteTodo  (value)  {
    const index = todos.indexOf(value);
    if (index > -1) {
      setTodos(todos.filter((item, i) => i !== index) );
    }
  };

  return (
    <div className="App border border-primary border-2 rounded m-2 p-2">
      <header className="App-header">
        <h1 className="App-title">React Todos</h1>
      </header>
      <div className="App-body">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}
