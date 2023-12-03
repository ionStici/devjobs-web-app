import styles from "./../../styles/JobPage.module.scss";
import Image from "next/image";

function CompanyBox({ job }) {
  return (
    <section className={styles.section_company_box}>
      <div style={{ backgroundColor: job.logoBackground }}>
        <Image
          src={job.logo}
          alt={`${job.company} Logo`}
          width={25}
          height={25}
          priority
        />
      </div>

      <div>
        <p>{job.company}</p>
        <p>{`${job.company.toLowerCase().replaceAll(" ", "")}.com`}</p>
      </div>

      <div>
        <a href={job.website} target="_blank">
          Company Site
        </a>
      </div>
    </section>
  );
}

export default CompanyBox;
