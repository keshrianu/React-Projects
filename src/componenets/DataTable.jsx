import React, { useEffect, useState } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1); 

  const columns = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  const totalPages = Math.ceil(data.length / rowsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

 
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

 
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value)); 
    setCurrentPage(1); 
  };

  return (
    <>
     

      <table className="w-full border-collapse border border-gray-100">
        <thead>
          <tr className="flex justify-center items-center text-left bg-gray-300">
            {columns.map(({ label, key }) => (
              <th
                key={key}
                className="flex-1 px-4 py-2 text-2xl font-semibold border border-gray-500"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id} className="flex justify-center items-center text-left">
              <td className="flex-1 border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="flex-1 border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="flex-1 border border-gray-300 px-4 py-2">{item.username}</td>
              <td className="flex-1 border border-gray-300 px-4 py-2">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-around items-center mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded border border-transparent hover:border-gray-600"
          >
          Previous
        </button>

        <div className="text-xl font-semibold">
          Page {currentPage} of {totalPages}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded border border-transparent hover:border-gray-600"
          >
          Next
        </button>
      </div>

      <div className="mt-4 ml-2">
        <label  className="mr-2 text-lg font-semibold">
          Select number of rows to display:
        </label>
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
    </>
  );
};

export default DataTable;
