import React, { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(10);
  /**
   * count = current or updated value
   * setCount = it is a function to update the count state
   * useState = it takes a initial value
   */

  return (
    <React.Fragment style={{}}>
      <h2>Count Number: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </React.Fragment>
  );
}

export default Home