import styles from "./../../styles/JobPage.module.scss";
import JobListing from "./JobListing";
import JobLink from "./JobLink";

function JobDescription({ job }) {
  const { postedAt, contract, position, location, apply } = job;
  const { description, requirements, role } = job;

  return (
    <section className={styles.section_job_description}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <div>
            <ul>
              <li>{postedAt}</li>
              <li>{contract}</li>
            </ul>
            <h1>{position}</h1>
            <p>{location}</p>
          </div>

          <JobLink link={apply} blank={true} styles={styles.link}>
            Apply Now
          </JobLink>
        </div>

        <p className={styles.description}>{description}</p>

        <JobListing heading="Requirements" data={requirements} listType="ul" />
        <JobListing heading="What You Will Do" data={role} listType="ol" />
      </div>
    </section>
  );
}

export default JobDescription;
