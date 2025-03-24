import React, { useEffect, useState } from "react";

const light = {
  red: "red",
  green: "green",
  yellow: "yellow",
};

const TrafficLight = () => {
  const [active, setActive] = useState(light.red);

  useEffect(() => {
    switch (active) {
      case light.red:
        setTimeout(() => {
          setActive(light.green);
        }, 4000);
        break;
      case light.green:
        setTimeout(() => {
          setActive(light.yellow);
        }, 3000);
        break;
      case light.yellow:
        setTimeout(() => {
          setActive(light.red);
        }, 500);
    }
  }, [active]);

  return (
    <>
    <h1 className="flex items-center justify-center text-3xl font-extrabold underline">Traffic light in React</h1>
    <div className="flex flex-col gap-4 mt-10  p-4  bg-black items-center ml-10 w-20 border-4 border-red-300">
      <div
        className={`bg-red-600 w-16 h-16 rounded-full  text-white flex items-center justify-center border-2 border-white object-contain ${
          light.red !== active ? "opacity-30" : "null"
        }`}
      >
        A
      </div>

      <div
        className={`bg-green-500 w-16 h-16 rounded-full  text-white flex items-center justify-center border-2 border-white object-contain ${
          light.green !== active ? "opacity-30" : "null"
        }`}
      >
        B
      </div>

      <div
        className={`bg-yellow-300 w-16 h-16 rounded-full text-white flex items-center justify-center border-2 border-white object-contain ${
          light.yellow !== active ? "opacity-30" : "null"
        }`}
      >
        C
      </div>
    </div>
    </>
  );
};

export default TrafficLight;
