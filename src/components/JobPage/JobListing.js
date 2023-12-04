import styles from "./../../styles/JobListing.module.scss";

function JobListing({ heading, data, listType }) {
  const { content, items } = data;

  return (
    <div className={styles.wrapper}>
      <h2>{heading}</h2>
      <p>{content}</p>

      {listType === "ul" ? (
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <ol>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default JobListing;
