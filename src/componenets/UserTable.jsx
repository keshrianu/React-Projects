import React, { useState } from "react";

const UserTable = () => {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [genrate, setGenrate] = useState(false);

  const handleRows = (e) => {
    setRows(Number(e.target.value));
  };

  const handleCols = (e) => {
    setCols(Number(e.target.value));
  };

  const handleGenerate = () => {
    setGenrate(true);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <label className="mb-4">Rows</label>
      <input
        className="border border-gray-600 mt-4"
        type="number"
        value={rows > 0 ? rows : ""}
        onChange={handleRows}
      />

      <label className="mb-4">Columns</label>
      <input
        className="border border-gray-600"
        type="number"
        value={cols > 0 ? cols : ""}
        onChange={handleCols}
      />

      <button
        className="mt-6 px-4 py-2 bg-teal-300 rounded"
        onClick={handleGenerate}
      >
        Generate Table
      </button>

      {genrate && rows > 0 && cols > 0 && (
        <table className="mt-4 border border-gray-400">
          <tbody>
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: cols }).map((_, colIndex) => (
                  <td key={colIndex} className="border border-gray-300 p-2">
                    Row {rowIndex + 1}, Col {colIndex + 1}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;




