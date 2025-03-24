import React, { useEffect, useState } from "react";
import JobList from "./JobList";

const JobBoard = () => {
  const [jobIds, setJobIds] = useState([]);
  const [jobDetails, setJobDetails] = useState([]);
  const[visibleJobs,setVisibleJobs] = useState(6);

  useEffect(() => {
    const fetchJobIds = async () => {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/jobstories.json"
        );
        const ids = await response.json();
        setJobIds(ids);
      } catch (error) {
        console.error("Error fetching job IDs:", error);
      }
    };

    fetchJobIds();
  }, []);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const detailsPromises = jobIds.slice(0,visibleJobs).map(async (id) => {
          const response = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          );
          return await response.json();
        });
        const details = await Promise.all(detailsPromises);
        setJobDetails(details);
        console.log("Job Details:", details); 
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    if (jobIds.length > 0) {
      fetchJobDetails();
    }
  }, [jobIds,visibleJobs]);

const loadmorejobs = () =>{
   setVisibleJobs((prevVisible) => prevVisible + 6); 
}


  return (
    <div>
      <JobList jobDetails ={jobDetails} loadmorejobs={loadmorejobs} />
    </div>
  );
};

export default JobBoard;
