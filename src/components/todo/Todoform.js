

import React, { useState } from "react";

const priorities = ["High", "Med", "Low"];

export default function TodoForm(props) {
  const [priority, setPriority] = useState(priorities[2]);
  const onSelect = (event) => {
      setPriority(select.value);
  };

 
  const {addTodo} = props
  let input;
  let select;

  return (
    <div className="TodoForm form-group">
      <input
        type="text"
        data-testid="TodoForm-input"
        className="TodoForm-input form-control"
        placeholder="Enter todo text"
        ref={(node) => {
          input = node;
        }}
      />
      <select
        data-testid="PrioritySelect"
        className="form-control"
        value={priority}
        onChange={onSelect}
        name="taskPriority"
        ref={(node) => {
          select = node;
        }}
      >
        {priorities.map((priority) => (
          <option key={priority} value={priority}>
            {priority}
          </option>
        ))}
      </select>
      <button
        className="TodoForm-button btn btn-primary"
        onClick={() => {
          addTodo({ text: input.value, priority: priority });
          input.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
}
