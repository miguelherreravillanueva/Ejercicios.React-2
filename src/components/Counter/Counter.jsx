import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.value);
  const increment = () => {
    setCount(count + 2);
  };
  const decrement = () => {
    setCount(count - 2);
  };
  return (
    <div>
     <h3>Counter: {count}</h3> 
      <button onClick={increment}>+</button> <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;