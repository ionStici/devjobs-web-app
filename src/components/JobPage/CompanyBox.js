import styles from "./../../styles/CompanyBox.module.scss";
import Image from "next/image";
import JobLink from "./JobLink";

function CompanyBox({ job }) {
  return (
    <section className={styles.section_company_box}>
      <div className={styles.wrapper}>
        <div
          className={styles.img_wrapper}
          style={{ backgroundColor: job.logoBackground }}
        >
          <Image
            src={job.logo}
            alt={`${job.company} Logo`}
            width={25}
            height={25}
            priority
          />
        </div>

        <div>
          <p className={styles.position}>{job.company}</p>
          <p className={styles.site}>{`${job.company
            .toLowerCase()
            .replaceAll(" ", "")}.com`}</p>
        </div>

        <div>
          <JobLink link={job.website} blank={true} styles={styles.comp_site}>
            Company Site
          </JobLink>
        </div>
      </div>
    </section>
  );
}

export default CompanyBox;
