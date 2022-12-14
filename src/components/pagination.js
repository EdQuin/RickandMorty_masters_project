import React, { useState } from "react";
import { Test } from "../styles/styles";


function Pagination() {

  // State to store count value
  const [count, setCount] = useState(1);

  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  const dicrementCount = () => {
    // Update state with dicremented value
    setCount(count - 1);
  };
  return (
    <Test>
      <button onClick={incrementCount}>Next</button>
      {count}
      <button onClick={dicrementCount}>Back</button>
    </Test>
  );
}
export default Pagination;
