import React, { useReducer } from "react";

const UseReducer = () => {
  const intialstate = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return intialstate;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, intialstate);

  return (
    <>
   
      <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-md shadow-md">
        <div className="mb-4 text-lg font-bold">UseReducer</div>
        <h1 className="text-lg m-4">{count}</h1>
        <div className="mb-2">
          <button
            className="w-24 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={() => dispatch("increment")}
          >
            Increment
          </button>
        </div>

        <div className="mb-2">
          <button
            className="w-24 p-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            onClick={() => dispatch("decrement")}
          >
            Decrement
          </button>
        </div>

        <div className="mb-2">
          <button
            className="w-24 p-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
            onClick={() => dispatch("reset")}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
