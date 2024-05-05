import React, { useState } from "react";
import "./App.css";
import JobItem from "./components/JobItem/JobItem";

function App() {
  const [jobsList, setJobsList] = useState(new Array(20).fill("job"));

  return (
    <div className="body-container">
      <div className="job-filters-container">Job Filters Sections</div>
      <div className="jobs-list-container">
        {jobsList.map((job, index) => {
          return <JobItem job={job} index={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
