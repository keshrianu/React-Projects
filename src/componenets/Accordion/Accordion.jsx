import React, { useState } from "react";

const Accordion = ({ obj }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <div className="border border-gray-500  rounded-lg w-1/2 m-2 bg-blue-50 hover:bg-blue-100">
        <div className="flex justify-between  p-5">
          <h1 className="text-xl font-bold">{obj.question}</h1>
          <span
            className="text-2xl cursor-pointer text-blue-700 bg-white hover:bg-blue-300 border border-blue-700 rounded-full w-10 h-10 flex justify-center pt-0.5"
            onClick={() => setShow(!show)}
          >
            {show ? "-" : "+"}
          </span>
        </div>
        {show ? <p className="p-3 text-xl">{obj.answer}</p> : ""}
      </div>
    </div>
  );
};

export default Accordion;
