import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="text-lg bg-green-300 rounded p-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Clicked
      </button>
      <h1 className="text-4xl">
        <center>{count}</center>
      </h1>
    </>
  );
};

export default Counter;
