import styles from "./../../styles/JobPage.module.scss";
import JobLink from "./JobLink";

function ApplyNow({ job }) {
  const { position, apply } = job;

  return (
    <section className={styles.section_apply_now}>
      <div className={styles.wrapper}>
        <div>
          <p>{position}</p>
          <p>So Digital Inc.</p>
        </div>
        <div>
          <JobLink link={apply} blank={true} styles={styles.link}>
            Apply Now
          </JobLink>
        </div>
      </div>
    </section>
  );
}

export default ApplyNow;
