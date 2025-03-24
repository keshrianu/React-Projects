import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    
    if (isRunning) {
      var interval = setInterval(() => {
        console.log("timer")
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setIsRunning(false); 
            return 100;
          }
          return prevProgress + 1;
        });
      }, 100);
    }
    
    return () => clearInterval(interval);
   
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setProgress(0);
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-lg font-semibold mb-4">
        {progress}% Complete
      </h1>
      <div className="w-4/5 h-16 bg-gray-300 rounded-md mb-4">
        <div
          className="h-full bg-teal-400 rounded-md  duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="space-x-4">
        <button
          onClick={handleStart}
          disabled={isRunning || progress === 100}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          disabled={!isRunning}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:bg-gray-400"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
