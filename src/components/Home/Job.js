import styles from "./../../styles/Jobs.module.scss";
import Image from "next/image";

function Job({ job }) {
  return (
    <div>
      <div
        className={styles.image_wrapper}
        style={{ backgroundColor: job.logoBackground }}
      >
        <Image
          src={job.logo}
          alt={`${job.company} Logo`}
          width={25}
          height={25}
        />
      </div>
      <ul>
        <li>{job.postedAt}</li>
        <li>{job.contract}</li>
      </ul>
      <h2>{job.position}</h2>
      <p>{job.company}</p>
      <address>{job.location}</address>
    </div>
  );
}

export default Job;
