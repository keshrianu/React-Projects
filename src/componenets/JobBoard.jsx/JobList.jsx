import React from "react";

const JobList = ({ jobDetails, loadmorejobs }) => {
  console.log({ jobDetails });
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-4">
      <div className="h-auto w-[500px] bg-white rounded-lg px-6 py-4 border border-gary-200 shadow-2xl hover:shadow-xl transition-shadow duration-300">
      <div className="text-orange-500  mt-5 text-lg font-semibold">
          Hacker News Job Board
        </div>

        <div className="mt-4">
          {jobDetails.map((job) => (
            <div
              key={job.id}
              className="w-full h-auto bg-white border border-gray-300 rounded-sm p-4 mt-4"
            >
              <a
                href={job.url}
                target="_blank"
                // rel="noopener noreferrer"
                className="text-black font-medium"
              >
                {job.title}
              </a>
              <p className="text-gray-400">
                by {job.by}.{" "}
                <span>{new Date(job.time * 1000).toLocaleDateString()}</span>.{" "}
                <span>{new Date(job.time * 1000).toLocaleTimeString()}</span>
              </p>
            </div>
          ))}
          <div className="py-2">
            <button
              className="px-3 py-2 bg-orange-500 border border-gray-500 rounded-lg text-white"
              onClick={loadmorejobs}
            >
              Load more jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
