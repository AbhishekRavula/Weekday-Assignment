import React, { useState } from "react";
import "./App.css";
import JobCard from "./components/JobCard/JobCard";

function App() {
  const [jobsList, setJobsList] = useState(new Array(20).fill("job"));

  return (
    <div className="body-container">
      <div className="job-filters-container">Job Filters Sections</div>
      <div className="jobs-list-container">
        {jobsList.map((job, index) => {
          return <JobCard job={job} index={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
