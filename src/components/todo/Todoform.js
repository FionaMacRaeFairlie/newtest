// import React, { Component } from "react";

// const priorities = ['High', 'Med', 'Low'];

// class TodoForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { priority: priorities[2] };
//   }

//   onSelect = event => {
//     this.setState({ priority: event.value });
//   };

//   render() {
//     const addTodo = this.props.addTodo;
//     let input;
//     let select;

//     return (
//       <div className="TodoForm">
//         <input
//           type="text"
//           data-testid="TodoForm-input"
//           className="TodoForm-input"
//           placeholder="Enter todo text"
//           ref={node => {
//             input = node;
//           }}
//         />
//         <select
//           data-testid="PrioritySelect"
//           value={this.state.priority}
//           onChange={this.onSelect}
//           name="taskPriority"
//           ref={node => {
//             select = node;
//           }}
//         >
//           {priorities.map(priority => (
//             <option key={priority} value={priority}>
//               {priority}
//             </option>
//           ))}
//         </select>
//         <button
//           className="TodoForm-button"
//           onClick={() => {
//             addTodo({ text: input.value, priority: this.state.priority });
//             input.value = '';
//           }}
//         >
//           Add
//         </button>
//       </div>
//     );
//   }
// }
// export default TodoForm

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
    <div className="TodoForm">
      <input
        type="text"
        data-testid="TodoForm-input"
        className="TodoForm-input"
        placeholder="Enter todo text"
        ref={(node) => {
          input = node;
        }}
      />
      <select
        data-testid="PrioritySelect"
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
        className="TodoForm-button"
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
