import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const time = new Date().toLocaleTimeString(); // Initial time
  const [currentTime, setCurrentTime] = useState(time);

  // const upadteTime = () => {
  //   const time = new Date().toLocaleTimeString();
  //   setCurrentTime(time);
  // };

  // setInterval(upadteTime, 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return function cleanup() {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className=" text-8xl font-extrabold border-4 border-gray-500 p-10 text-white bg-gray-700">{currentTime}</h1>
    </div>
  );
};

export default DigitalClock;
