import { useEffect, useState } from "react";
import "./App.css";
import JobCard from "./components/JobCard/JobCard";
import {
  setJobsList,
  setIsLoading,
} from "./features/searchJobs/searchJobs.slice";
import { useAppDispatch, useAppSelector } from "./state/hooks";
import { RootState } from "./state/store";

function App() {
  const dispatch = useAppDispatch();

  const jobsList = useAppSelector(
    (state: RootState) => state.searchJobs.jobsList
  );
  const isLoading = useAppSelector(
    (state: RootState) => state.searchJobs.isLoading
  );

  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isLoading) {
        setPage((prev) => prev + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [isLoading]);

  async function fetchData(page: number) {
    try {
      dispatch(setIsLoading(true));
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 10,
        offset: page * 10,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      const res = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const jsonRes = await res.json();
      dispatch(setJobsList(jsonRes.jdList));
    } catch (error) {
      console.log("error:", error);
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  return (
    <div className="body-container">
      {/* <div className="job-filters-container">Job Filters Sections</div> */}
      <div className="jobs-list-container">
        {jobsList.map((job) => {
          return <JobCard job={job} key={job.jdUid} />;
        })}
      </div>
    </div>
  );
}

export default App;
