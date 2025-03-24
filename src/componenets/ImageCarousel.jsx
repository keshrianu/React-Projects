import React, { useEffect, useState } from "react";
import ele1 from "../assets/ele1.jpg";
import ele2 from "../assets/ele2.jpg";
import ele3 from "../assets/ele3.jpg";
import ele4 from "../assets/ele4.jpg";
import ele5 from "../assets/ele5.jpg";
import ele6 from "../assets/ele6.jpg";

const Imagecarousel = () => {
  const [slide, setSlide] = useState(0);
  let image = [ele1, ele2, ele3, ele4, ele5, ele6];

  const imagePlus = () => {
    setSlide(slide === image.length - 1 ? 0 : slide + 1);
  };

  const imageMinus = () => {
    setSlide(slide === 0 ? image.length - 1 : slide - 1);
  };

  useEffect(() => {
    const clearslide = setInterval(() => {
      imagePlus();
    }, 2000);

    return () => {
      clearInterval(clearslide);
    };
  }, [slide]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <img src={image[slide]} alt="ele7" className="w-[700px] h-[700px] " />

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button
            onClick={imagePlus}
            className="px-4 py-2 bg-gray-400 opacity-80 rounded-full"
          >
            -
          </button>
          <button
            onClick={imageMinus}
            className="px-4 py-2 bg-gray-400 opacity-80 rounded-full"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Imagecarousel;
