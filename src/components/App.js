import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // Initialize counter state
  const [count, setCount] = useState(0);

  // Handle button click
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      {/* Paragraph showing current count */}
      <p>Button clicked {count} times</p>

      {/* Button to increment counter */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
