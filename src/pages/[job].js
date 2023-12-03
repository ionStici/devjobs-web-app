import JobPageComp from "@/components/JobPage/JobPageComp";
import { getJobsData } from "@/lib/getJobsData";
import Head from "next/head";

function JobPage({ job }) {
  return (
    <>
      <Head>
        <title>{job.company} Company | Job</title>
        <meta name="description" content="Apply for the desired job!" />
      </Head>
      <JobPageComp job={job} />
    </>
  );
}

export default JobPage;

export async function getStaticProps(context) {
  const jobs = await getJobsData();

  const job = jobs.find((job) => {
    return (
      job.company.toLowerCase().replaceAll(" ", "-") === context.params.job
    );
  });

  return { props: { job } };
}

export async function getStaticPaths() {
  const jobs = await getJobsData();

  const paths = jobs.map((job) => {
    return { params: { job: job.company.toLowerCase().replaceAll(" ", "-") } };
  });

  return { paths, fallback: false };
}
