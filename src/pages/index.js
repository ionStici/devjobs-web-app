import Head from "next/head";
import Link from "next/link";
import { getJobsData } from "@/lib/getJobsData";
import Jobs from "@/components/Home/Jobs";

export default function Home({ data: jobs }) {
  return (
    <>
      <Head>
        <title>DevJobs Web App</title>
        <meta name="description" content="DevJobs Web App | FEM Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Jobs jobs={jobs} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getJobsData();
  return { props: { data: data } };
}
