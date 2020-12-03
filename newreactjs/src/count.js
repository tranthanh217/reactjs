import React, { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p className="countTitle"> You click {count} </p>
      <button onClick={() => setCount(count + 1)}> click here</button>
    </div>
  );
}
export default Count;
