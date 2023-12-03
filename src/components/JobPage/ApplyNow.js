import styles from "./../../styles/JobPage.module.scss";

function ApplyNow({ job }) {
  const { position, apply } = job;

  return (
    <section className={styles.section_apply_now}>
      <div>
        <p>{position}</p>
        <p>So Digital Inc.</p>
      </div>
      <div>
        <a href={apply} target="_blank">
          Apply Now
        </a>
      </div>
    </section>
  );
}

export default ApplyNow;
