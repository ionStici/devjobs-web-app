function JobLink({ link, blank, styles, children }) {
  return (
    <a href={link} target={blank && "_blank"} className={styles}>
      {children}
    </a>
  );
}

export default JobLink;
