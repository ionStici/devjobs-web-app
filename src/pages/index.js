import Head from "next/head";
import { getJobsData } from "@/lib/getJobsData";
import HomeComp from "@/components/Home/HomeComp";

export default function Home({ data: jobs }) {
  return (
    <>
      <Head>
        <title>DevJobs Web App</title>
        <meta name="description" content="DevJobs Web App | FEM Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComp jobs={jobs} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getJobsData();
  return { props: { data: data } };
}

// 689 = 222 (32.2) 466 (67.6)
// 1110 = 463 (41.7) 646 (58.2)
