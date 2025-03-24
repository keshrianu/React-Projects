import React, { useState } from "react";

const ReactTab = () => {
  const [Tab, setTab] = useState(1);

  function activetab(tabnum) {
    setTab(tabnum);
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-x-5">
        <button
          className={`p-3 border text-xl font-bold ${
            Tab === 1
              ? "bg-violet-500 border-black text-white"
              : "border-black hover:text-violet-500 hover:border-violet-500 bg-transparent"
          }`}
          onClick={() => activetab(1)}
        >
          HTML
        </button>
        <button
          className={`p-3 border text-xl font-bold ${
            Tab === 2
              ? "bg-violet-500 border-black text-white"
              : "border-black hover:text-violet-500 hover:border-violet-500 bg-transparent"
          }`}
          onClick={() => activetab(2)}
        >
          CSS
        </button>
        <button
          className={`p-3 border text-xl font-bold ${
            Tab === 3
              ? "bg-violet-500 border-black text-white"
              : "border-black hover:text-violet-500 hover:border-violet-500 bg-transparent"
          }`}
          onClick={() => activetab(3)}
        >
          JAVASCRIPT
        </button>
      </div>

      <div>
        {Tab === 1 && (
          <p className="text-5xl font-bold">
            <center>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
            </center>
          </p>
        )}
        {Tab === 2 && (
          <p className="text-5xl font-bold">
            <center>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
            </center>
          </p>
        )}
        {Tab === 3 && (
          <p className="text-5xl font-bold">
            <center>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
            </center>
          </p>
        )}
      </div>
    </div>
  );
};

export default ReactTab;
