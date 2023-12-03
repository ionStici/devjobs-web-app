import CompanyBox from "./CompanyBox";
import JobDescription from "./JobDescription";
import ApplyNow from "./ApplyNow";

function JobPageComp({ job }) {
  return (
    <>
      <CompanyBox job={job} />
      <JobDescription job={job} />
      <ApplyNow job={job} />
    </>
  );
}

export default JobPageComp;
