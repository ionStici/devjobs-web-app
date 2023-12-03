import styles from "./../../styles/JobPage.module.scss";
import JobListing from "./JobListing";

function JobDescription({ job }) {
  const { postedAt, contract, position, location, apply } = job;
  const { description, requirements, role } = job;

  return (
    <section className={styles.section_job_description}>
      <div>
        <div>
          <ul>
            <li>{postedAt}</li>
            <li>{contract}</li>
          </ul>
          <h1>{position}</h1>
          <p>{location}</p>
        </div>
        <a href={apply} target="_blank">
          Apply Now
        </a>
      </div>

      <p>{description}</p>

      <JobListing heading="Requirements" data={requirements} listType="ul" />
      <JobListing heading="What You Will Do" data={role} listType="ol" />
    </section>
  );
}

export default JobDescription;
