import React, { useState } from "react";
import "./App.css";

function App() {
  const [jobsList, setJobsList] = useState(new Array(20).fill("job"));

  return (
    <div className="body-container">
      <div className="job-filters-container">Job Filters Sections</div>
      <div className="jobs-list-container">
        {jobsList.map((job, index) => {
          return (
            <div key={index} className="job-item">
              {job} item {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
