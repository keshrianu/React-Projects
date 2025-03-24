import React, { useState } from "react";

const FileExplorer = ({ folderData }) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  return (
    <div className="ml-10 mt-10 border-l-2 border-black pl-2 cursor-pointer">
      <h5>
        {folderData.type === "folder" ? "📁" : "📋"}
        <span onClick={handleClick} className="font-bold text-lg ml-2">
          {folderData.name}
        </span>
      </h5>
      {showChildren ? (
        folderData?.children?.length > 0 ? (
          folderData.children.map((childData, index) => (
            <FileExplorer key={index} folderData={childData} />
          ))
        ) : (
          <p>No file inside {folderData.name}</p>
        )
      ) : null}
    </div>
  );
};

export default FileExplorer;
