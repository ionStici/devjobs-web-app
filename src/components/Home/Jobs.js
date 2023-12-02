import styles from "./../../styles/Jobs.module.scss";
import { useState } from "react";
import Job from "./Job";
import Button from "../ui/Button";

function Jobs({ jobs }) {
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

      {
        <Button
          onClick={handleLoadMore}
          text={!(jobsNum === jobs.length) ? "Load More" : "Show Less"}
        />
      }
    </>
  );
}

export default Jobs;
