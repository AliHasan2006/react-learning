import React, { useState, useCallback } from 'react';



function App() {
  const [count, setCount] = useState(0);

  const memoizedHandleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // Empty array = function recreate nahi hoga

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+ Increase</button>
      <Child handleClick={memoizedHandleClick} />
    </div>
  );
}
export default App;