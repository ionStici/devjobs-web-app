import styles from "./../../styles/Jobs.module.scss";
import { useEffect, useState } from "react";
import Job from "./Job";
import Button from "../ui/Button";

function Jobs({ jobs: allJobs, jobFilter }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const filteredJobs = allJobs.filter((job) => {
      let title, loc, fullTime;

      if (jobFilter.title) {
        title = job.position.toLowerCase().includes(jobFilter.title);
      } else {
        title = true;
      }

      if (jobFilter.loc) {
        loc = job.location === jobFilter.loc;
      } else {
        loc = true;
      }

      if (jobFilter.fullTime) {
        fullTime = job.contract === "Full Time";
      } else {
        fullTime = true;
      }

      if (title && loc && fullTime) return job;
    });

    setJobs(filteredJobs);
  }, []);

  const [jobsNum, setJobsNum] = useState(12);
  const jobsOnPage = jobs.slice(0, jobsNum);

  function handleLoadMore() {
    if (jobsNum === jobs.length) {
      setJobsNum((prev) => prev - 3);
      return;
    }
    setJobsNum((prev) => prev + 3);
  }

  return (
    <>
      <section className={styles.section}>
        {jobsOnPage.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </section>

      {!(jobsOnPage.length < jobsNum) && (
        <Button
          onClick={handleLoadMore}
          text={!(jobsNum === jobs.length) ? "Load More" : "Show Less"}
        />
      )}
    </>
  );
}

export default Jobs;
