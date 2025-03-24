import React from "react";
import Data from "./data.json";
import Accordion from "./Accordion";

const Faq = () => {
  console.log(Data);
  return (
    <div>
    <h1 className="flex justify-center text-3xl font-bold m-3 underline">Accordion For FrontEnd Question</h1>
      {Data.faqData.map((obj, index) => {
        return   <Accordion  obj={obj}/>
      })}

    
    </div>
  );
};

export default Faq;
