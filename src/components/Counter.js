import React, { useState} from "react";
function Counter() {
  const [count, setCount] = useState(0);

  function increment(){
     setCount(count + 1)
  }

  return (
    <div className="border border-primary border-2 rounded m-2 p-2">
      <p>Counter</p>
      <button data-testid="Button"  className="btn btn-primary" onClick={increment}>{count}</button>
    </div>
  );
}
export default Counter;