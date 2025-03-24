import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [activity, setActivity] = useState();
  const [list, setList] = useState([]);

  const addActivity = () => {
    setList((list) => {
      const updatedlist = [...list, activity];
      console.log(updatedlist);
      setActivity("");
      return updatedlist;
    });
  };
  const removeActivity = (index) => {
    const updatedData = [...list];
    updatedData.splice(index,1);
    setList(updatedData);
  };
  return (
    <>
      <div className="bg-black h-screen flex justify-center">
        <div className=" h-[600px] w-[500px] bg-white mt-20 rounded p-4">
          <h1 className="ml-5 text-xl text-gray-600 font-semibold my-4">
            {" "}
            📋 Todo List
          </h1>
          <div className="flex justify-between px-4 gap-x-2">
            <input
              className="w-[350px] p-2 border border-gray-600  h-10 rounded-full "
              type="text"
              placeholder="Add Your Work"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
            <button
              onClick={addActivity}
              className={`bg-green-500 text-white px-6 py-2 rounded-full min-w-24 ${
                !activity ? "opacity-35 cursor-not-allowed" : ""
              }`}
              disabled={!activity}
            >
              Add
            </button>
          </div>
          <TodoList list={list} removeActivity={removeActivity} />
        </div>
      </div>
    </>
  );
};

export default Todo;
