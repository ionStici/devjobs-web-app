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
      setJobsNum(12);
      return;
    }
    setJobsNum((prev) => prev + 3);
  }

  return (
    <>
      <section className={styles.jobs_section}>
        {jobsOnPage.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </section>

      <div className={styles.btn_wrapper}>
        {!(jobsOnPage.length < jobsNum) && (
          <Button
            onClick={handleLoadMore}
            styles={styles.btn}
            text={!(jobsNum === jobs.length) ? "Load More" : "Show Less"}
          />
        )}
      </div>
    </>
  );
}

export default Jobs;
