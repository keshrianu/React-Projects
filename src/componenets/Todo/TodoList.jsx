import React from "react";

const TodoList = ({ list, removeActivity }) => {
  return (
    <div className="max-h-[450px] overflow-y-auto"> 
      {list.map((data, index) => {
        return (
          <div key={index} className="mb-4">
            <div className="flex justify-between px-4 py-2 mt-5 ">
              <div>{data}</div>
              <button
                onClick={() => removeActivity(index)}
                className="bg-red-400 text-white px-6 py-2 rounded-full min-w-24"
              >
                Delete
              </button>
            </div>
            <div className="border-b mt-2"></div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
